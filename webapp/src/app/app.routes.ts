import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';

export const routes: Routes = [
    { path: '', redirectTo: '/mainPage', pathMatch: 'full'},
    { path: 'mainPage', component: AppComponent },
    { path: 'searchPage', component: SearchComponent}
];