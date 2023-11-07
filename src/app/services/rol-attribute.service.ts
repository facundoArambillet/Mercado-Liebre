import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolAttribute } from '../models/rol-attribute/rol-attribute';
import { RolAttributeDTO } from '../models/rol-attribute/rol-attribute-dto';

@Injectable({
  providedIn: 'root'
})
export class RolAttributeService {
  private baseUrl = 'http://localhost:8080/rol-attribute';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<RolAttributeDTO[]> {
    return this.http.get<RolAttributeDTO[]>(`${this.baseUrl}`);
  }

  public getById(idAttribute: number): Observable<RolAttribute> {
    return this.http.get<RolAttribute>(`${this.baseUrl}/${idAttribute}`);
  }

  public getByName(attributeName: string): Observable<RolAttribute> {
    return this.http.get<RolAttribute>(`${this.baseUrl}/name/${attributeName}`);
  }

  public createRolAttribute(rolAttribute: RolAttribute): Observable<RolAttribute> {
    return this.http.post<RolAttribute>(`${this.baseUrl}`, rolAttribute);
  }

  public updateRolAttribute(idAttribute: number, rolAttributeDTO: RolAttributeDTO): Observable<RolAttributeDTO> {
    return this.http.put<RolAttributeDTO>(`${this.baseUrl}/${idAttribute}`, rolAttributeDTO);
  }

  public deleteRolAttribute(idAttribute: number): Observable<RolAttributeDTO> {
    return this.http.delete<RolAttributeDTO>(`${this.baseUrl}/${idAttribute}`);
  }
}
