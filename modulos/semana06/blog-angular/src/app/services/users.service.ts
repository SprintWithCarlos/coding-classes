import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  URI: string = "http://localhost:3000/api";
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(this.URI + "/users");
  }
}
