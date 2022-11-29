import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css'],
})
export class JsonComponent {
  persona = {
    nombre: "Angel",
    fechaNacimiento: Date.now(),
    ocupacion: "desarrollador"
  };
}
