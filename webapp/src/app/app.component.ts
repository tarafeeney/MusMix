import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './mainPage.html',
  styleUrl: './mainpage.css'
})
export class AppComponent {
  title = 'MusMix';
}
