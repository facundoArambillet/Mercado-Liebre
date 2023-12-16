import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { CategoryAttributeDTO } from '../models/category-attribute/category-attribute-dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryAttributeService {
  private authService = inject(AuthService)
  constructor(private http: HttpClient) { }

  public getAll(): Observable<CategoryAttributeDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryAttributeDTO[]>(`${environment.apiUrl}/category-attribute`, {headers});
  }

  public getById(idCategoryAttribute: number): Observable<CategoryAttributeDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryAttributeDTO>(`${environment.apiUrl}/category-attribute/${idCategoryAttribute}`, {headers});
  }

  public getByName(categoryAttributeName: string): Observable<CategoryAttributeDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryAttributeDTO>(`${environment.apiUrl}/category-attribute/name/${categoryAttributeName}`, {headers});
  }

  public createCategoryAttribute(categoryAttribute: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<any>(`${environment.apiUrl}/category-attribute`, categoryAttribute, {headers});
  }

  public updateCategoryAttribute(idCategoryAttribute: number, categoryAttributeDTO: CategoryAttributeDTO): Observable<CategoryAttributeDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<CategoryAttributeDTO>(`${environment.apiUrl}/category-attribute/${idCategoryAttribute}`,
     categoryAttributeDTO, {headers});
  }

  public deleteCategoryAttribute(idCategoryAttribute: number): Observable<CategoryAttributeDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<CategoryAttributeDTO>(`${environment.apiUrl}/category-attribute/${idCategoryAttribute}`, {headers});
  }
}
