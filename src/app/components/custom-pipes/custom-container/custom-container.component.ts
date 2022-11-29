import { TemperatureValues } from './../../../shared/enums/temperature.enums';
import { DarkModeService } from './../../../shared/services/dark-mode.service';
import { Component } from '@angular/core';
import { DarkModeAutomaticPipe } from 'src/app/shared/pipes/dark-mode-automatic.pipe';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css'],
})
export class CustomContainerComponent {
  grados: number = 31;
  tipo: TemperatureValues = TemperatureValues.F;
  constructor(private darkModeService: DarkModeService) {}
  get dark(){
    return this.darkModeService.dark;
  }
  changeMode(){
    this.darkModeService.changeMode();
  }
}
