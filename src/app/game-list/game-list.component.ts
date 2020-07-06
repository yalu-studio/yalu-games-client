import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from '../shared/game';
import { ApiService } from '../shared/api.service';
import { AddGameComponent } from '../add-game/add-game.component'
import { EditGameComponent } from '../edit-game/edit-game.component'

export interface DialogData {
  url: string;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: any = [];
  filteredGames: any = []

  constructor(private gameApi: ApiService,
              public dialog: MatDialog) {
    this.gameApi.GetGames().subscribe((data: [Game]) => {
      this.games = data
      this.filteredGames = data.sort((a, b) => {
        return a.release_date > b.release_date ? -1 : 1
      });
    })
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGameComponent)
                                  .afterClosed().subscribe(result => {
                                    if(result != undefined){
                                      this.games.push(result)
                                      this.games.sort((a, b) => {
                                        return a.release_date > b.release_date ? -1 : 1
                                      })
                                    }
                                  });
  }

  onGameCardClicked(game){
    const dialogRef = this.dialog.open(EditGameComponent, {data: {game: game},
                                                          width: '600px'})
                                  .afterClosed().subscribe(result => {
                                    if(result != undefined){
                                      // this.games.push(result)
                                      // this.games.sort((a, b) => {
                                      //   return a.release_date > b.release_date ? -1 : 1
                                      // })
                                      console.log(result)
                                    }
                                  });
  }
}
