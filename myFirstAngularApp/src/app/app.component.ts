import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tesztelgetos app-om';
  myHero : Hero = {
    name: "Kitty Devil",
    address: "Nyul York",
    superpower:  "Killing feet"
  };
}
