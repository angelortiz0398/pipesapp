import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n-select.component.html',
  styleUrls: ['./i18n-select.component.css']
})
export class I18nSelectComponent {
  genero = 'm';
  mensajes = {
    m: 'Bienvenido usuario',
    f: 'Bienvenida usuario'
  };
}
