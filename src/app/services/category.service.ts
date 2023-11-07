import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../models/category/category-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/category';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(`${this.baseUrl}`);
  }

  public getById(idCategory: number): Observable<CategoryDTO> {
    return this.http.get<CategoryDTO>(`${this.baseUrl}/${idCategory}`);
  }

  public getByName(categoryName: string): Observable<CategoryDTO> {
    return this.http.get<CategoryDTO>(`${this.baseUrl}/type/${categoryName}`);
  }

  public createCategory(category: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, category);
  }

  public updateCategory(idCategory: number, categoryDTO: CategoryDTO): Observable<CategoryDTO> {
    return this.http.put<CategoryDTO>(`${this.baseUrl}/${idCategory}`, categoryDTO);
  }

  public deleteCategory(idCategory: number): Observable<CategoryDTO> {
    return this.http.delete<CategoryDTO>(`${this.baseUrl}/${idCategory}`);
  }
}
