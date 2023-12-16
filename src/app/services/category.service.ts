import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { CategoryDTO } from '../models/category/category-dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<CategoryDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryDTO[]>(`${environment.apiUrl}/category`, {headers});
  }

  public getById(idCategory: number): Observable<CategoryDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryDTO>(`${environment.apiUrl}/category/${idCategory}`, {headers});
  }

  public getByName(categoryName: string): Observable<CategoryDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryDTO>(`${environment.apiUrl}/category/type/${categoryName}`, {headers});
  }

  public createCategory(category: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<any>(`${environment.apiUrl}/category`, category, {headers});
  }

  public updateCategory(idCategory: number, categoryDTO: CategoryDTO): Observable<CategoryDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<CategoryDTO>(`${environment.apiUrl}/category/${idCategory}`, 
    categoryDTO, {headers});
  }

  public deleteCategory(idCategory: number): Observable<CategoryDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<CategoryDTO>(`${environment.apiUrl}/category/${idCategory}`, {headers});
  }
}
