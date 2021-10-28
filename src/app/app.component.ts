import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :String = "First";
   name : String= this.Addition();


   Addition(): String
   {
     var n: String = "classs";
      return n;
   }

}
