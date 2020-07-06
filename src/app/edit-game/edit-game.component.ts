import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from '../shared/game';


@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  game: Game;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.game = data.game;
    console.log(this.game)
  }

  ngOnInit(): void {
  }

}
