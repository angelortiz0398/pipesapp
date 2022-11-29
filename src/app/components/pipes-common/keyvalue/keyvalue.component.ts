import { Component } from '@angular/core';

@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.css']
})
export class KeyvalueComponent {
  persona = {
    nombre: "Angel",
    fechaNacimiento: Date.now(),
    ocupacion: "desarrollador"
  };
}
