import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/invoice';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  readonly url = `https://localhost:7284/api/Invoice`;

  constructor(
    private httpClient: HttpClient,
  ) { }


  getInvoice(){
    return this.httpClient.get(this.url);
  }

  addInvoice(invoice: Invoice):Observable<Invoice> {
    return this.httpClient.post<Invoice>(this.url, invoice);
  }
  updateInvoice(id:string, invoice: Invoice):Observable<Invoice> {
    return this.httpClient.put<Invoice>(this.url+`/${id}`, invoice);
  }
  deleteInvoice(id:string){
    return this.httpClient.delete(this.url+`/${id}`);
  }
  filterInvoice(id:string){
    return this.httpClient.get(this.url+`/${id}`);
  }
}
