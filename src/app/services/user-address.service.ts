import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAddressCreateDTO } from '../models/user-address/user-address-create-dto';
import { UserAddressDetailDTO } from '../models/user-address/user-address-detail-dto';
import { UserAddressDTO } from '../models/user-address/user-address-dto';
import { environment } from '../enviroments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  private authService = inject(AuthService);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<UserAddressDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<UserAddressDTO[]>(`${environment.apiUrl}/user-address`, {headers});
  }

  public getById(idAddress: number): Observable<UserAddressDetailDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<UserAddressDetailDTO>(`${environment.apiUrl}/user-address/${idAddress}`, {headers});
  }
  public getByUser(idUser: number): Observable<UserAddressDetailDTO[]> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.get<UserAddressDetailDTO[]>(`${environment.apiUrl}/user-address/by-user/${idUser}`, {headers});
  }
  public createUserAddress(userAddressCreateDTO: UserAddressCreateDTO): Observable<UserAddressCreateDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.post<UserAddressCreateDTO>(`${environment.apiUrl}/user-address`, userAddressCreateDTO, {headers});
  }

  public updateUserAddress(idAddress: number, userAddressDetailDTO: UserAddressDetailDTO): Observable<UserAddressDetailDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<UserAddressDetailDTO>(`${environment.apiUrl}/user-address/${idAddress}`, userAddressDetailDTO, {headers});
  }

  public toggleAddressPrincipal(userAddressDetailDTO: UserAddressDetailDTO): Observable<UserAddressDetailDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.put<UserAddressDetailDTO>(`${environment.apiUrl}/user-address/principal/change`, userAddressDetailDTO, {headers});
  }

  public deleteUserAddress(idAddress: number): Observable<UserAddressDTO> {
    const token: string | null = this.authService.getToken();
    const headers = { 'Authorization': `Bearer ${token}`};

    return this.http.delete<UserAddressDTO>(`${environment.apiUrl}/user-address/${idAddress}`, {headers});
  }
}
