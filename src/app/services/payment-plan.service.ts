import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentPlanDTO } from '../models/payment-plan/payment-plan-dto';

@Injectable({
  providedIn: 'root'
})
export class PaymentPlanService {
  private baseUrl = 'http://localhost:8080/payment-plan';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<PaymentPlanDTO[]> {
    return this.http.get<PaymentPlanDTO[]>(`${this.baseUrl}`);
  }

  public getById(idPayment: number): Observable<PaymentPlanDTO> {
    return this.http.get<PaymentPlanDTO>(`${this.baseUrl}/${idPayment}`);
  }

  public createPaymentPlan(paymentPlan: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, paymentPlan);
  }

  public updatePaymentPlan(idPayment: number, paymentPlanDTO: PaymentPlanDTO): Observable<PaymentPlanDTO> {
    return this.http.put<PaymentPlanDTO>(`${this.baseUrl}/${idPayment}`, paymentPlanDTO);
  }

  public deletePaymentPlan(idPayment: number): Observable<PaymentPlanDTO> {
    return this.http.delete<PaymentPlanDTO>(`${this.baseUrl}/${idPayment}`);
  }
}
