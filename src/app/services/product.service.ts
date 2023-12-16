import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCreateDTO } from '../models/product/product-create-dto';
import { ProductDTO } from '../models/product/product-dto';
import { ProductDetailDTO } from '../models/product/product-detail-dto';
import { environment } from '../enviroments/environment'; 
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductDTO[]>(`${environment.apiUrl}/product`, {headers});
  }

  public getAllByCategoryName(categoryName: string): Observable<ProductDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductDTO[]>(`${environment.apiUrl}/product/by-category-name/${categoryName}`, {headers});
  }
  public getAllByCategoryFamilyType(categoryFamilyType: string): Observable<ProductDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};
    
    return this.http.get<ProductDTO[]>(`${environment.apiUrl}/product/by-category-family/${categoryFamilyType}`, {headers});
  }
  public getProductsInOffer(): Observable<ProductDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductDTO[]>(`${environment.apiUrl}/product/offers`, {headers});
  }

  public getProductsInWeeklyOffer(): Observable<ProductDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductDTO[]>(`${environment.apiUrl}/product/latest-offers`, {headers});
  }

  public getById(idProduct: number): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<any>(`${environment.apiUrl}/product/${idProduct}`, {headers});
  }

  public getByName(productName: string): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<any>(`${environment.apiUrl}/product/name/${productName}`, {headers});
  }

  public getByNameAndInsertIntoHistory(productName: string, idUser: number): Observable<ProductDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductDTO>(`${environment.apiUrl}/product/history/${productName}/${idUser}`, {headers});
  }
  
  public getProductsByLatestCategoryInUserHistory(idUser: number): Observable<ProductDetailDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductDetailDTO[]>(`${environment.apiUrl}/product/history/latest-category/${idUser}`, {headers});
  }

  public getProductsInShoppingCart(idCart: number): Observable<ProductDetailDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<ProductDetailDTO[]>(`${environment.apiUrl}/product/by-cart/${idCart}`, {headers});
  }
  
  public createProduct(productCreateDTO: ProductCreateDTO): Observable<ProductCreateDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<ProductCreateDTO>(`${environment.apiUrl}/product`, productCreateDTO, {headers});
  }

  public insertProductAttribute(idProduct: number, idAttribute: number): Observable<ProductDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<ProductDTO>(`${environment.apiUrl}/product/attribute/${idProduct}/${idAttribute}`, {headers});
  }

  public insertPaymentPlan(idProduct: number, idPayment: number): Observable<ProductDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<ProductDTO>(`${environment.apiUrl}/product/payment-plan/${idProduct}/${idPayment}`, {headers});
  }

  public updateProduct(idProduct: number, productDetailDTO: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<any>(`${environment.apiUrl}/product/${idProduct}`, productDetailDTO, {headers});
  }

  public removePaymentPlan(idProduct: number, idPayment: number): Observable<ProductDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<ProductDTO>(`${environment.apiUrl}/product/payment-plan/${idProduct}/${idPayment}`, {headers});
  }

  public deleteProduct(idProduct: number): Observable<ProductDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<ProductDTO>(`${environment.apiUrl}/product/${idProduct}`, {headers});
  }
}
