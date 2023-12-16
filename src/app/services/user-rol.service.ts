import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRol } from '../models/user-rol/user-rol';
import { UserRolDTO } from '../models/user-rol/user-rol-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserRolService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<UserRolDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<UserRolDTO[]>(`${environment.apiUrl}/user-rol`, {headers});
  }

  public getById(idUserRol: number): Observable<UserRolDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<UserRolDTO>(`${environment.apiUrl}/user-rol/${idUserRol}`, {headers});
  }

  public getByType(rolType: string): Observable<UserRol> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<UserRol>(`${environment.apiUrl}/user-rol/type/${rolType}`, {headers});
  }

  public createUserRol(userRolDTO: UserRolDTO): Observable<UserRolDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<UserRolDTO>(`${environment.apiUrl}/user-rol`, userRolDTO, {headers});
  }

  public updateUserRol(idUserRol: number, userRolDTO: UserRolDTO): Observable<UserRolDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<UserRolDTO>(`${environment.apiUrl}/user-rol/${idUserRol}`, userRolDTO, {headers});
  }

  public deleteUserRol(idUserRol: number): Observable<UserRolDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<UserRolDTO>(`${environment.apiUrl}/user-rol/${idUserRol}`, {headers});
  }
}
