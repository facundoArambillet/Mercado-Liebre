import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { InvoiceDTO } from '../models/invoice/invoice-dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<InvoiceDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<InvoiceDTO[]>(`${environment.apiUrl}/invoice`, {headers});
  }

  public getById(idInvoice: number): Observable<InvoiceDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<InvoiceDTO>(`${environment.apiUrl}/invoice/${idInvoice}`, {headers});
  }

  public getInvoicesByIdCart(idCart: number): Observable<InvoiceDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<InvoiceDTO[]>(`${environment.apiUrl}/invoice/cart/${idCart}`, {headers});
  }

  public createInvoice(invoice: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<any>(`${environment.apiUrl}/invoice`, invoice, {headers});
  }

  public updateInvoice(idInvoice: number, invoiceDTO: InvoiceDTO): Observable<InvoiceDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<InvoiceDTO>(`${environment.apiUrl}/invoice/${idInvoice}`, 
    invoiceDTO, {headers});
  }

  public deleteInvoice(idInvoice: number): Observable<InvoiceDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<InvoiceDTO>(`${environment.apiUrl}/invoice/${idInvoice}`, {headers});
  }
}
