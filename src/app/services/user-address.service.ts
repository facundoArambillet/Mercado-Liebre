import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAddressCreateDTO } from '../models/user-address/user-address-create-dto';
import { UserAddressDetailDTO } from '../models/user-address/user-address-detail-dto';
import { UserAddressDTO } from '../models/user-address/user-address-dto';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  private baseUrl = 'http://localhost:8080/user-address';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<UserAddressDTO[]> {
    return this.http.get<UserAddressDTO[]>(`${this.baseUrl}`);
  }

  public getById(idAddress: number): Observable<UserAddressDetailDTO> {
    return this.http.get<UserAddressDetailDTO>(`${this.baseUrl}/${idAddress}`);
  }

  createUserAddress(userAddressCreateDTO: UserAddressCreateDTO): Observable<UserAddressCreateDTO> {
    return this.http.post<UserAddressCreateDTO>(`${this.baseUrl}`, userAddressCreateDTO);
  }

  updateUserAddress(idAddress: number, userAddressDetailDTO: UserAddressDetailDTO): Observable<UserAddressDetailDTO> {
    return this.http.put<UserAddressDetailDTO>(`${this.baseUrl}/${idAddress}`, userAddressDetailDTO);
  }

  toggleAddressPrincipal(userAddressDetailDTO: UserAddressDetailDTO): Observable<UserAddressDetailDTO> {
    return this.http.put<UserAddressDetailDTO>(`${this.baseUrl}/principal/change`, userAddressDetailDTO);
  }

  deleteUserAddress(idAddress: number): Observable<UserAddressDTO> {
    return this.http.delete<UserAddressDTO>(`${this.baseUrl}/${idAddress}`);
  }
}
