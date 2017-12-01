import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {CreditCards} from "../creditcards/creditcards";

@Component({
  selector: 'addcreditcard-page',
  templateUrl: 'addcreditcard.html'
})

export class AddCreditCard {
  
  constructor(public navCtrl: NavController) {
    
  }
  doSomething(){
    this.navCtrl.setRoot(CreditCards);
    
    
  }
}
