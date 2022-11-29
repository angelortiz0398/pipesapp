import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit{
  texto:string = "TiTUlo dE APLIcacIoN";
  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
