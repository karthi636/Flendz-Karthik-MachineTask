import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient) { }

  getUser(){
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }
}
