import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AddCreditCard} from "../addcreditcard/addcreditcard";
import {CardDetailsService} from "../../app/services/cardDetails.service";
import {CardDetails} from "../../app/services/cardDetails";

@Component({
  selector: 'creditcards-page',
  templateUrl: 'creditcards.html'
})

export class CreditCards {

  constructor(
    public navCtrl: NavController,
    public cardDetailsServices: CardDetailsService
  ) {}

  cardDetails: CardDetails[]

  ionViewDidLoad(): void {
    this.getCardsDetails();
  }

  getCardsDetails(): void {
    this.cardDetailsServices.getCardDetails().then(result => this.cardDetails = result);
  }
  doSomething(){
    this.navCtrl.setRoot(AddCreditCard);
  }

}
