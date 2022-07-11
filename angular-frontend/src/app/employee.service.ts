import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseUrl = "http://localhost:8080/employee/list";

  private logUrl = "http:localhost:8080/logout";
  
  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    console.log("test")
    return this.http.get<Employee[]>(this.baseUrl);
  }

  createEmployee(employee: object): Observable<object>{
    return this.http.post(`${this.baseUrl}/`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}

