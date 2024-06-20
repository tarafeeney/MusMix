import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './searchPage.html',
  styleUrl: './search.css'
})
export class SearchComponent {
  title = 'Search Page';
  username = "NEW USER"
}
