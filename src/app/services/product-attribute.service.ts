import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { ProductAttributeDTO } from '../models/product-attribute/product-attribute-dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductAttributeService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductAttributeDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductAttributeDTO[]>(`${environment.apiUrl}/product-attribute`, {headers});
  }

  public getById(idProductAttribute: number): Observable<ProductAttributeDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductAttributeDTO>(`${environment.apiUrl}/product-attribute/${idProductAttribute}`, {headers});
  }

  public createProductAttribute(productAttribute: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<any>(`${environment.apiUrl}/product-attribute`, productAttribute, {headers});
  }

  public updateProductAttribute(idProductAttribute: number, productAttributeDTO: ProductAttributeDTO): Observable<ProductAttributeDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<ProductAttributeDTO>(`${environment.apiUrl}/product-attribute/${idProductAttribute}`, 
    productAttributeDTO, {headers});
  }

  public deleteProductAttribute(idProductAttribute: number): Observable<ProductAttributeDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<ProductAttributeDTO>(`${environment.apiUrl}/product-attribute/${idProductAttribute}`, {headers});
  }
}
