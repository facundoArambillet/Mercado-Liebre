import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';
import { UserCreateDTO } from '../models/user/user-create-dto';
import { UserDTO } from '../models/user/user-dto';
import { UserLoginDTO } from '../models/user/user-login-dto';
import { UserDetailDTO } from '../models/user/user-detail-dto';
import { Token } from '../models/user/token';
import { CategoryFamilyDTO } from '../models/category-family/category-family-dto';
import { environment } from '../enviroments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<UserDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};
    
    return this.http.get<UserDTO[]>(`${environment.apiUrl}/user`, {headers});
  }

  public getById(idUser: number): Observable<UserDetailDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<UserDetailDTO>(`${environment.apiUrl}/user/${idUser}`, {headers});
  }

  public getByEmail(userEmail: string): Observable<UserDetailDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<UserDetailDTO>(`${environment.apiUrl}/user/email/${userEmail}`, {headers});
  }

  public getLatestCategoryFamilyInHistoryById(idUser: number): Observable<CategoryFamilyDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<CategoryFamilyDTO[]>(`${environment.apiUrl}/user/history/${idUser}`, {headers})
  }

  public validateEmail(userEmail: string): Observable<boolean> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<boolean>(`${environment.apiUrl}/user/email/validate/${userEmail}`, {headers});
  }

  public register(userCreateDTO: UserCreateDTO): Observable<UserCreateDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<UserCreateDTO>(`${environment.apiUrl}/user/auth/register`, userCreateDTO, {headers});
  }

  public login(userLoginDTO: UserLoginDTO): Observable<Token> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<Token>(`${environment.apiUrl}/user/auth/login`, userLoginDTO, {headers});
  }

  public updateUser(idUser: number, user: User): Observable<User> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<User>(`${environment.apiUrl}/user/${idUser}`, user, {headers});
  }

  public incrementSalesMade(idUser: number): Observable<UserDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<UserDTO>(`${environment.apiUrl}/user/salesMade/${idUser}`, {headers});
  }

  public deleteUser(idUser: number): Observable<UserDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<UserDTO>(`${environment.apiUrl}/user/${idUser}`, {headers});
  }
}
