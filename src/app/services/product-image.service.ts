import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { ProductImageDTO } from '../models/product-image/product-image-dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductImageDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductImageDTO[]>(`${environment.apiUrl}/product-image`, {headers});
  }

  public getByIdProduct(idProduct: number): Observable<ProductImageDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductImageDTO[]>(`${environment.apiUrl}/product-image/byProduct/${idProduct}`, {headers});
  }

  public getById(idProductImage: number): Observable<ProductImageDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductImageDTO>(`${environment.apiUrl}/product-image/${idProductImage}`, {headers});
  }

  public createProductImage(productImage: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<any>(`${environment.apiUrl}/product-image`, productImage, {headers});
  }

  public updateProductImage(idProductImage: number, productImageDTO: ProductImageDTO): Observable<ProductImageDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<ProductImageDTO>(`${environment.apiUrl}/product-image/${idProductImage}`, 
    productImageDTO, {headers});
  }

  public deleteProductImage(idProductImage: number): Observable<ProductImageDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<ProductImageDTO>(`${environment.apiUrl}/product-image/${idProductImage}`, {headers});
  }
}
