import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductAttributeDTO } from '../models/product-attribute/product-attribute-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductAttributeService {
  private baseUrl = 'http://localhost:8080/product-attribute';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductAttributeDTO[]> {
    return this.http.get<ProductAttributeDTO[]>(`${this.baseUrl}`);
  }

  public getById(idProductAttribute: number): Observable<ProductAttributeDTO> {
    return this.http.get<ProductAttributeDTO>(`${this.baseUrl}/${idProductAttribute}`);
  }

  public createProductAttribute(productAttribute: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, productAttribute);
  }

  public updateProductAttribute(idProductAttribute: number, productAttributeDTO: ProductAttributeDTO): Observable<ProductAttributeDTO> {
    return this.http.put<ProductAttributeDTO>(`${this.baseUrl}/${idProductAttribute}`, productAttributeDTO);
  }

  public deleteProductAttribute(idProductAttribute: number): Observable<ProductAttributeDTO> {
    return this.http.delete<ProductAttributeDTO>(`${this.baseUrl}/${idProductAttribute}`);
  }
}
