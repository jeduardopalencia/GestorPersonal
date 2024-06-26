import { Component } from '@angular/core';
import { Proyecto1Component } from './proyecto1/proyecto1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Proyecto1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AHD1';
}
