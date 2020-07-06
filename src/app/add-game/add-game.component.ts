import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';
import { Game } from '../shared/game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  storePageUrl: String = "";

  gameForm: FormGroup;

  constructor(private http: HttpClient,
              private gameApi: ApiService,
              public fb: FormBuilder,
              public dialogRef: MatDialogRef<AddGameComponent>) { }

  ngOnInit(): void {
    this.gameForm = this.fb.group({
      name: ['', [Validators.required]],
      imgUrl: ["../../assets/images/image_not_found.jpg"],
      onPS4: [false],
      onPS3: [false],
      onPSV: [false],
      onSwitch: [false],
      onXbox: [false],
      onSteam: [false],
      releaseDate: ['']
    })
  }

  parseStorePageUrl() {
    const STEAM_STORE = "https://store.steampowered.com/app/"
    console.log("Parsing URL: " + this.storePageUrl);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    if(this.storePageUrl.startsWith(STEAM_STORE)) {
      let appId = this.storePageUrl.substring(STEAM_STORE.length, this.storePageUrl.indexOf('/', STEAM_STORE.length))
      console.log("Fetching Game from Steam: " + appId)
      const APP_URL = `https://cors-anywhere.herokuapp.com/https://store.steampowered.com/api/appdetails/?appids=${appId}`;
      let jsonData = this.http.get(APP_URL, {headers: headers}).subscribe(data => {
        console.log(data);
        this.gameForm.patchValue({
          name: data[appId].data.name,
          imgUrl: data[appId].data.header_image,
          onSteam: true,
          releaseDate: data[appId].data.release_date.date
        })
      });
    }
  }

  submitGameForm() {
    if(this.gameForm.valid) {
      let game = new Game();
      game.name = this.gameForm.controls['name'].value;
      game.img_url = this.gameForm.controls['imgUrl'].value;
      game.release_date = this.gameForm.controls['releaseDate'].value;
      game.platforms = {
          ps4: this.gameForm.controls['onPS4'].value,
          ps3: this.gameForm.controls['onPS3'].value,
          psv: this.gameForm.controls['onPSV'].value,
          steam: this.gameForm.controls['onSteam'].value
        }
      console.log(game)
      this.gameApi.AddGame(game).subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);
      });
    }
  }

}
