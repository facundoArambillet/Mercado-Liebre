import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { CategoryFamilyDTO } from '../models/category-family/category-family-dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryFamilyService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<CategoryFamilyDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryFamilyDTO[]>(`${environment.apiUrl}/category-family`, {headers});
  }

  public getPopularCategoryFamilies(): Observable<CategoryFamilyDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryFamilyDTO[]>(`${environment.apiUrl}/category-family/popular`, {headers});
  }

  public getById(idCategoryFamily: number): Observable<CategoryFamilyDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryFamilyDTO>(`${environment.apiUrl}/category-family/${idCategoryFamily}`, {headers});
  }

  public getByType(categoryFamilyType: string): Observable<CategoryFamilyDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryFamilyDTO>(`${environment.apiUrl}/category-family/type/${categoryFamilyType}`, {headers});
  }

  public createCategoryFamily(categoryFamily: any): Observable<any> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<any>(`${environment.apiUrl}/category-family`, categoryFamily, {headers});
  }

  public updateCategoryFamily(idCategoryFamily: number, categoryFamilyDTO: CategoryFamilyDTO): Observable<CategoryFamilyDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<CategoryFamilyDTO>(`${environment.apiUrl}/category-family/${idCategoryFamily}`, 
    categoryFamilyDTO, {headers});
  }

  public deleteCategoryFamily(idCategoryFamily: number): Observable<CategoryFamilyDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<CategoryFamilyDTO>(`${environment.apiUrl}/category-family/${idCategoryFamily}`, {headers});
  }
}
