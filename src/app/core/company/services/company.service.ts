import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../models/company.model';

const API_URL = 'api/companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${API_URL}/${id}`);
  }
}
