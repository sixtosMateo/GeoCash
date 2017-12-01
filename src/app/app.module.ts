import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from "@angular/http";


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { PeopleServiceProvider } from '../providers/people-service/people-service';
import {CreditCards} from '../pages/creditcards/creditcards'
import {Bills} from '../pages/bills/bills';
import {AddBill} from '../pages/addbill/addbill';
import {AddCreditCard} from '../pages/addcreditcard/addcreditcard';
import {Accounts} from '../pages/accounts/accounts';
import {CardDetailsService} from "./services/cardDetails.service";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CreditCards,
    Bills,
    AddBill,
    AddCreditCard,
    Accounts
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CreditCards,
    Bills,
    AddBill,
    AddCreditCard,
    Accounts
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardDetailsService,
    // PeopleServiceProvider
  ]
})
export class AppModule {}
