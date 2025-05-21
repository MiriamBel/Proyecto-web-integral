import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pangular';
  constructor(){
    console.log('Nuevas funciones');
    console.warn("Cuidado");
     console.log("Prueba de conflictos")
  }
}
