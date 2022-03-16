import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any>{

    return this.http.get("https://reqres.in/api/users?page=2");

  }

  getResources(): Observable<any>{

    return this.http.get("https://reqres.in/api/unknown");

  }
}
