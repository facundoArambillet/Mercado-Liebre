import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { ProductOfferDTO } from '../models/product-offer/product-offer-dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductOfferService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductOfferDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductOfferDTO[]>(`${environment.apiUrl}/product-offer`, {headers});
  }

  public getById(idProductOffer: number): Observable<ProductOfferDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductOfferDTO>(`${environment.apiUrl}/product-offer/${idProductOffer}`, {headers});
  }

  public getByIdProduct(idProduct: number): Observable<ProductOfferDTO>{
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductOfferDTO>(`${environment.apiUrl}/product-offer/byProduct/${idProduct}`, {headers})
  }

  public createProductOffer(productOffer: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<any>(`${environment.apiUrl}/product-offer`, productOffer, {headers});
  }

  public updateProductOffer(idProductOffer: number, productOfferDTO: ProductOfferDTO): Observable<ProductOfferDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<ProductOfferDTO>(`${environment.apiUrl}/product-offer/${idProductOffer}`, 
    productOfferDTO, {headers});
  }

  public deleteProductOffer(idProductOffer: number): Observable<ProductOfferDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<ProductOfferDTO>(`${environment.apiUrl}/product-offer/${idProductOffer}`, {headers});
  }
}

