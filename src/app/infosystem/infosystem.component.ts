import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infosystem',
  templateUrl: './infosystem.component.html',
  styleUrls: ['./infosystem.component.css']
})
export class InfosystemComponent implements OnInit {

  name:String ="Angular-12";
  fun():String
  {
    return "inside function";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
