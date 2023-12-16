import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { PaymentPlanDTO } from '../models/payment-plan/payment-plan-dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentPlanService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<PaymentPlanDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<PaymentPlanDTO[]>(`${environment.apiUrl}/payment-plan`, {headers});
  }

  public getById(idPayment: number): Observable<PaymentPlanDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<PaymentPlanDTO>(`${environment.apiUrl}/payment-plan/${idPayment}`, {headers});
  }

  public createPaymentPlan(paymentPlan: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<any>(`${environment.apiUrl}/payment-plan`, paymentPlan, {headers});
  }

  public updatePaymentPlan(idPayment: number, paymentPlanDTO: PaymentPlanDTO): Observable<PaymentPlanDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<PaymentPlanDTO>(`${environment.apiUrl}/payment-plan/${idPayment}`, 
    paymentPlanDTO, {headers});
  }

  public deletePaymentPlan(idPayment: number): Observable<PaymentPlanDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<PaymentPlanDTO>(`${environment.apiUrl}/payment-plan/${idPayment}`, {headers});
  }
}
