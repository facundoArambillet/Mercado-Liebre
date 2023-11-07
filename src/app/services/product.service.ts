import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCreateDTO } from '../models/product/product-create-dto';
import { ProductDTO } from '../models/product/product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${this.baseUrl}`);
  }

  public getById(idProduct: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${idProduct}`);
  }

  public getByName(productName: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/name/${productName}`);
  }

  public getByNameAndInsertIntoHistory(productName: string, idUser: number): Observable<ProductDTO> {
    return this.http.get<ProductDTO>(`${this.baseUrl}/history/${productName}/${idUser}`);
  }

  public createProduct(productCreateDTO: ProductCreateDTO): Observable<ProductCreateDTO> {
    return this.http.post<ProductCreateDTO>(`${this.baseUrl}`, productCreateDTO);
  }

  public insertProductAttribute(idProduct: number, idAttribute: number): Observable<ProductDTO> {
    return this.http.post<ProductDTO>(`${this.baseUrl}/attribute/${idProduct}/${idAttribute}`, {});
  }

  public insertPaymentPlan(idProduct: number, idPayment: number): Observable<ProductDTO> {
    return this.http.post<ProductDTO>(`${this.baseUrl}/payment-plan/${idProduct}/${idPayment}`, {});
  }

  public updateProduct(idProduct: number, productDetailDTO: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${idProduct}`, productDetailDTO);
  }

  public removePaymentPlan(idProduct: number, idPayment: number): Observable<ProductDTO> {
    return this.http.delete<ProductDTO>(`${this.baseUrl}/payment-plan/${idProduct}/${idPayment}`);
  }

  public deleteProduct(idProduct: number): Observable<ProductDTO> {
    return this.http.delete<ProductDTO>(`${this.baseUrl}/${idProduct}`);
  }
}
