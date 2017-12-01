import {Component, ViewChild} from "@angular/core";
import {Nav, NavController} from "ionic-angular";
import {AddBill} from "../addbill/addbill";

@Component({
  selector: 'bill-page',
  templateUrl: 'bills.html'
})

export class Bills {

  constructor(public navCtrl: NavController) {

  }

  addBill() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(AddBill);
    this.navCtrl.setRoot(AddBill);
  }
}
