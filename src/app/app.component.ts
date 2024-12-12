import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent  } from './home-page/home-page.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'b_website_angular';
}
