import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceDTO } from '../models/invoice/invoice-dto';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseUrl = 'http://localhost:8080/invoice';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<InvoiceDTO[]> {
    return this.http.get<InvoiceDTO[]>(`${this.baseUrl}`);
  }

  public getById(idInvoice: number): Observable<InvoiceDTO> {
    return this.http.get<InvoiceDTO>(`${this.baseUrl}/${idInvoice}`);
  }

  public getInvoicesByIdCart(idCart: number): Observable<InvoiceDTO[]> {
    return this.http.get<InvoiceDTO[]>(`${this.baseUrl}/cart/${idCart}`);
  }

  public createInvoice(invoice: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, invoice);
  }

  public updateInvoice(idInvoice: number, invoiceDTO: InvoiceDTO): Observable<InvoiceDTO> {
    return this.http.put<InvoiceDTO>(`${this.baseUrl}/${idInvoice}`, invoiceDTO);
  }

  public deleteInvoice(idInvoice: number): Observable<InvoiceDTO> {
    return this.http.delete<InvoiceDTO>(`${this.baseUrl}/${idInvoice}`);
  }
}
