import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Bills} from "../bills/bills";

@Component({
  selector: 'addbill-page',
  templateUrl: 'addbill.html'
})

export class AddBill {
  
  constructor(public navCtrl: NavController) {
    
  }

  doSomething(){
    this.navCtrl.setRoot(Bills);
    
    
  }

}
