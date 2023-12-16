import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RolAttribute } from '../models/rol-attribute/rol-attribute';
import { RolAttributeDTO } from '../models/rol-attribute/rol-attribute-dto';
import { environment } from '../enviroments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolAttributeService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<RolAttributeDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<RolAttributeDTO[]>(`${environment.apiUrl}/rol-attribute`, {headers});
  }

  public getById(idAttribute: number): Observable<RolAttribute> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<RolAttribute>(`${environment.apiUrl}/rol-attribute/${idAttribute}`, {headers});
  }

  public getByName(attributeName: string): Observable<RolAttribute> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<RolAttribute>(`${environment.apiUrl}/rol-attribute/name/${attributeName}`, {headers});
  }

  public createRolAttribute(rolAttribute: RolAttribute): Observable<RolAttribute> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<RolAttribute>(`${environment.apiUrl}/rol-attribute`, rolAttribute, {headers});
  }

  public updateRolAttribute(idAttribute: number, rolAttributeDTO: RolAttributeDTO): Observable<RolAttributeDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<RolAttributeDTO>(`${environment.apiUrl}/rol-attribute/${idAttribute}`, rolAttributeDTO, {headers});
  }

  public deleteRolAttribute(idAttribute: number): Observable<RolAttributeDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<RolAttributeDTO>(`${environment.apiUrl}/rol-attribute/${idAttribute}`, {headers});
  }
}
