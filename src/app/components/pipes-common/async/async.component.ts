import { Component } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent {
  img = new Promise((resolve, reject)=>{
    resolve("https://e7.pngegg.com/pngimages/869/829/png-clipart-angularjs-protractor-software-testing-web-development-others-miscellaneous-angle.png");
  });
}
