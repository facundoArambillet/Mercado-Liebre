import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetailDTO } from '../models/product/product-detail-dto';
import { ShoppingCartDTO } from '../models/shopping-cart/shopping-cart-dto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private baseUrl = 'http://localhost:8080/shopping-cart';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ShoppingCartDTO[]> {
    return this.http.get<ShoppingCartDTO[]>(`${this.baseUrl}`);
  }

  public getById(idShoppingCart: number): Observable<ShoppingCartDTO> {
    return this.http.get<ShoppingCartDTO>(`${this.baseUrl}/${idShoppingCart}`);
  }

  public createShoppingCart(shoppingCart: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, shoppingCart);
  }

  public insertProduct(idUser: number, productDetailDTO: ProductDetailDTO): Observable<ShoppingCartDTO> {
    return this.http.post<ShoppingCartDTO>(`${this.baseUrl}/insert/${idUser}`, productDetailDTO);
  }

  public removeProduct(idUser: number, productDetailDTO: ProductDetailDTO): Observable<ShoppingCartDTO> {
    return this.http.delete<ShoppingCartDTO>(`${this.baseUrl}/remove/${idUser}`, { body: productDetailDTO });
  }

}
