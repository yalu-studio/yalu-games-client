import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddGameComponent } from './add-game/add-game.component';
import { GameListComponent} from './game-list/game-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from './shared/auth.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: RegisterComponent },
  { path: 'game', component: GameListComponent },

  { path: '**', redirectTo: ''}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
