import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetailDTO } from '../models/product/product-detail-dto';
import { ShoppingCartDTO } from '../models/shopping-cart/shopping-cart-dto';
import { environment } from '../enviroments/environment';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<ShoppingCartDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ShoppingCartDTO[]>(`${environment.apiUrl}/shopping-cart`, {headers});
  }

  public getById(idShoppingCart: number): Observable<ShoppingCartDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ShoppingCartDTO>(`${environment.apiUrl}/shopping-cart/${idShoppingCart}`, {headers});
  }

  public getByIdUser(idUser: number): Observable<ShoppingCartDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ShoppingCartDTO>(`${environment.apiUrl}/shopping-cart/by-user/${idUser}`, {headers});
  }

  public createShoppingCart(shoppingCart: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<any>(`${environment.apiUrl}/shopping-cart`, shoppingCart, {headers});
  }

  public insertProduct(idCart: number, idProduct: number): Observable<ShoppingCartDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<ShoppingCartDTO>(`${environment.apiUrl}/shopping-cart/insert/${idCart}/${idProduct}`, {headers});
  }

  public removeProduct(idCart: number, idProduct: number): Observable<ShoppingCartDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<ShoppingCartDTO>(`${environment.apiUrl}/shopping-cart/remove/${idCart}/${idProduct}`, {headers});
  }

}
