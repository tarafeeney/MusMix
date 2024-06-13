import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SongInputComponent } from './song-input/song-input.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home component as the default route
  { path: 'login', component: LoginComponent }, // Login component at /login
  { path: 'song-input', component: SongInputComponent }, // song input component at /song-input
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }