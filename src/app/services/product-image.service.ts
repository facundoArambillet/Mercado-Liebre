import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductImageDTO } from '../models/product-image/product-image-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  private baseUrl = 'http://localhost:8080/product-image';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductImageDTO[]> {
    return this.http.get<ProductImageDTO[]>(`${this.baseUrl}`);
  }

  public getById(idProductImage: number): Observable<ProductImageDTO> {
    return this.http.get<ProductImageDTO>(`${this.baseUrl}/${idProductImage}`);
  }

  public createProductImage(productImage: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, productImage);
  }

  public updateProductImage(idProductImage: number, productImageDTO: ProductImageDTO): Observable<ProductImageDTO> {
    return this.http.put<ProductImageDTO>(`${this.baseUrl}/${idProductImage}`, productImageDTO);
  }

  public deleteProductImage(idProductImage: number): Observable<ProductImageDTO> {
    return this.http.delete<ProductImageDTO>(`${this.baseUrl}/${idProductImage}`);
  }
}
