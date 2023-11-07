import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRol } from '../models/user-rol/user-rol';
import { UserRolDTO } from '../models/user-rol/user-rol-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRolService {
  private baseUrl = 'http://localhost:8080/user-rol';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<UserRolDTO[]> {
    return this.http.get<UserRolDTO[]>(`${this.baseUrl}`);
  }

  public getById(idUserRol: number): Observable<UserRolDTO> {
    return this.http.get<UserRolDTO>(`${this.baseUrl}/${idUserRol}`);
  }

  public getByType(rolType: string): Observable<UserRol> {
    return this.http.get<UserRol>(`${this.baseUrl}/type/${rolType}`);
  }

  public createUserRol(userRolDTO: UserRolDTO): Observable<UserRolDTO> {
    return this.http.post<UserRolDTO>(`${this.baseUrl}`, userRolDTO);
  }

  public updateUserRol(idUserRol: number, userRolDTO: UserRolDTO): Observable<UserRolDTO> {
    return this.http.put<UserRolDTO>(`${this.baseUrl}/${idUserRol}`, userRolDTO);
  }

  public deleteUserRol(idUserRol: number): Observable<UserRolDTO> {
    return this.http.delete<UserRolDTO>(`${this.baseUrl}/${idUserRol}`);
  }
}
