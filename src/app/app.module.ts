import { CustomPipesModule } from './components/custom-pipes/custom-pipes.module';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeService } from './shared/services/dark-mode.service';
import { DarkModeAutomaticPipe } from './shared/pipes/dark-mode-automatic.pipe';
import { TemperaturePipe } from './shared/pipes/temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeAutomaticPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesCommonModule,
    CustomPipesModule
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
