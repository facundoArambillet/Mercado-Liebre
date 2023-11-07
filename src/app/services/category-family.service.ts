import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryFamilyDTO } from '../models/category-family/category-family-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryFamilyService {
  private baseUrl = 'http://localhost:8080/category-family';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<CategoryFamilyDTO[]> {
    return this.http.get<CategoryFamilyDTO[]>(`${this.baseUrl}`);
  }

  public getById(idCategoryFamily: number): Observable<CategoryFamilyDTO> {
    return this.http.get<CategoryFamilyDTO>(`${this.baseUrl}/${idCategoryFamily}`);
  }

  public getByType(categoryFamilyType: string): Observable<CategoryFamilyDTO> {
    return this.http.get<CategoryFamilyDTO>(`${this.baseUrl}/type/${categoryFamilyType}`);
  }

  public createCategoryFamily(categoryFamily: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, categoryFamily);
  }

  public updateCategoryFamily(idCategoryFamily: number, categoryFamilyDTO: CategoryFamilyDTO): Observable<CategoryFamilyDTO> {
    return this.http.put<CategoryFamilyDTO>(`${this.baseUrl}/${idCategoryFamily}`, categoryFamilyDTO);
  }

  public deleteCategoryFamily(idCategoryFamily: number): Observable<CategoryFamilyDTO> {
    return this.http.delete<CategoryFamilyDTO>(`${this.baseUrl}/${idCategoryFamily}`);
  }
}
