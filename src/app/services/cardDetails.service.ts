import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CardDetails } from './cardDetails';

@Injectable()
export class CardDetailsService {
  private cardDetailsUrl = 'https://sandbox.apihub.citi.com/gcb/api/v1/cards?cardFunction=ALL'

  private callHeaders= new Headers({
    'Content-Type':'application/json',
    'Authorization':'Bearer AAEkMTdmZjg0NjctMTk4Yi00ZGMwLWE1NWMtZjAyYzQ1Nzc3NzBhWCEITMmFGTpihMs5nb6HfUGncUb-FNgs3KHVddg8Ym1-mr4N00xitJJ_cn5oGwqSqrnLBh5nsteHIkgN4epjUJd7xNqN13FA1S11iJIb_3EDog153xJReBJvbTBKdmwcbS85qmjdj0AmZQoT9saYu96rfDqJXHOjxG6b7HiwEXW-3tdTrf8L8CAlXxOrho_moQi4XRDjlLrZ4SSi6LfOGV45hzNgQUfd9OjElvJbk5YUCJLJo8bvYN0RE86q2ADY',
    'client_id':'17ff8467-198b-4dc0-a55c-f02c4577770a',
    'uuid':'c0258280-6c11-44a4-bdc5-7081dbed7b30'
  })

  constructor(public http: Http) { }

  getCardDetails(): Promise<Array<CardDetails>> {
    return this.http
      .get(this.cardDetailsUrl,{headers: this.callHeaders})
      .toPromise()
      .then((response) => {
        console.log(response);
        return response.json().cardDetails as CardDetails[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  /*
  getCardDetails(cardId: string): Promise<CardDetails> {
    return this.getCardDetails()
      .then(res => res.json().cardDetails as CardDetails[])
      .catch();
  }

  save(card: CardDetails): Promise<CardDetails> {
    if (card.cardId) {
      return this.put(card);
    }
    return this.post(card);
  }

  delete(card: CardDetails): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.cardDetailsUrl}/${card.cardId}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new CardDetails
  private post(card: CardDetails): Promise<CardDetails> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.cardDetailsUrl, JSON.stringify(card), { headers: headers })
      .toPromise()
      .then(res => res.json().cardDetails)
      .catch(this.handleError);
  }

  // Update existing CardDetails
  private put(card: CardDetails): Promise<CardDetails> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.cardDetailsUrl}/${card.cardId}`;

    return this.http
      .put(url, JSON.stringify(card), { headers: headers })
      .toPromise()
      .then(() => card)
      .catch(this.handleError);
  }
  */
}
