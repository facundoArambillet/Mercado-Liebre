import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductOfferDTO } from '../models/product-offer/product-offer-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductOfferService {
  private baseUrl = 'http://localhost:8080/product-offer';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductOfferDTO[]> {
    return this.http.get<ProductOfferDTO[]>(`${this.baseUrl}`);
  }

  public getById(idProductOffer: number): Observable<ProductOfferDTO> {
    return this.http.get<ProductOfferDTO>(`${this.baseUrl}/${idProductOffer}`);
  }

  public createProductOffer(productOffer: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, productOffer);
  }

  public updateProductOffer(idProductOffer: number, productOfferDTO: ProductOfferDTO): Observable<ProductOfferDTO> {
    return this.http.put<ProductOfferDTO>(`${this.baseUrl}/${idProductOffer}`, productOfferDTO);
  }

  public deleteProductOffer(idProductOffer: number): Observable<ProductOfferDTO> {
    return this.http.delete<ProductOfferDTO>(`${this.baseUrl}/${idProductOffer}`);
  }
}

