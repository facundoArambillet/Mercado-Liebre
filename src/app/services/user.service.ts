import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';
import { UserCreateDTO } from '../models/user/user-create-dto';
import { UserDTO } from '../models/user/user-dto';
import { UserLoginDTO } from '../models/user/user-login-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${this.baseUrl}`);
  }

  public getById(idUser: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${idUser}`);
  }

  public getByEmail(userEmail: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/email/${userEmail}`);
  }

  public createUser(userCreateDTO: UserCreateDTO): Observable<UserCreateDTO> {
    return this.http.post<UserCreateDTO>(`${this.baseUrl}`, userCreateDTO);
  }

  public loginUser(userLoginDTO: UserLoginDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`${this.baseUrl}/login`, userLoginDTO);
  }

  public updateUser(idUser: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${idUser}`, user);
  }

  public incrementSalesMade(idUser: number): Observable<UserDTO> {
    return this.http.put<UserDTO>(`${this.baseUrl}/salesMade/${idUser}`, {});
  }

  public deleteUser(idUser: number): Observable<UserDTO> {
    return this.http.delete<UserDTO>(`${this.baseUrl}/${idUser}`);
  }
}
