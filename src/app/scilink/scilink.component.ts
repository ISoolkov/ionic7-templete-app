import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scilink',
  templateUrl: './scilink.component.html',
  styleUrls: ['./scilink.component.scss'],
})
export class ScilinkComponent  implements OnInit {

  Name: string = ""

  changeBUTTON(){
    this.Name += "!"
  }
  constructor() { }

  ngOnInit() {}

}
