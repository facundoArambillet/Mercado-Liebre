import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryAttributeDTO } from '../models/category-attribute/category-attribute-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryAttributeService {
  private baseUrl = 'http://localhost:8080/category-attribute';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<CategoryAttributeDTO[]> {
    return this.http.get<CategoryAttributeDTO[]>(`${this.baseUrl}`);
  }

  public getById(idCategoryAttribute: number): Observable<CategoryAttributeDTO> {
    return this.http.get<CategoryAttributeDTO>(`${this.baseUrl}/${idCategoryAttribute}`);
  }

  public getByName(categoryAttributeName: string): Observable<CategoryAttributeDTO> {
    return this.http.get<CategoryAttributeDTO>(`${this.baseUrl}/name/${categoryAttributeName}`);
  }

  public createCategoryAttribute(categoryAttribute: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, categoryAttribute);
  }

  public updateCategoryAttribute(idCategoryAttribute: number, categoryAttributeDTO: CategoryAttributeDTO): Observable<CategoryAttributeDTO> {
    return this.http.put<CategoryAttributeDTO>(`${this.baseUrl}/${idCategoryAttribute}`, categoryAttributeDTO);
  }

  public deleteCategoryAttribute(idCategoryAttribute: number): Observable<CategoryAttributeDTO> {
    return this.http.delete<CategoryAttributeDTO>(`${this.baseUrl}/${idCategoryAttribute}`);
  }
}
