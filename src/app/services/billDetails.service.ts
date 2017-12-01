import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BillDetails } from './billDetails';

@Injectable()
export class BillDetailsService {
  private billDetailsUrl = 'https://parseapi.back4app.com/classes/Bill'

  constructor(private http: Http) { }

  getBillDetails(): Promise<Array<BillDetails>> {
    return this.http
      .get(this.billDetailsUrl)
      .toPromise()
      .then((response) => {
        return response.json().results as BillDetails[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  /*
  getBillDetails(objectId: string): Promise<BillDetails> {
    return this.getBillDetails()
      .then(res => res.json().results as BillDetails[])
      .catch();
  }
*/
  save(bill: BillDetails): Promise<BillDetails> {
    if (bill.objectId) {
      return this.put(bill);
    }
    return this.post(bill);
  }

  delete(bill: BillDetails): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.billDetailsUrl}/${bill.objectId}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new BillDetails
  private post(bill: BillDetails): Promise<BillDetails> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.billDetailsUrl, JSON.stringify(bill), { headers: headers })
      .toPromise()
      .then(res => res.json().cardDetails)
      .catch(this.handleError);
  }

  // Update existing BillDetails
  private put(bill: BillDetails): Promise<BillDetails> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.billDetailsUrl}/${bill.objectId}`;

    return this.http
      .put(url, JSON.stringify(bill), { headers: headers })
      .toPromise()
      .then(() => bill)
      .catch(this.handleError);
  }
}