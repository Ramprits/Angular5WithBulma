import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  get isAuthenticated() {
    return !!localStorage.getItem("token");
  }
  register(credentials) {
    return this.httpClient
      .post<any>(`http://localhost:5000/api/Account`, credentials)
      .subscribe(
        res => {
          this.authenticated(res);
        },
        err => {
          console.log(
            "Unable to register. You may be already registered user.",
            err
          );
        }
      );
  }
  login(credentials) {
    return this.httpClient
      .post<any>(`http://localhost:5000/api/Account/login`, credentials)
      .subscribe(
        res => {
          this.authenticated(res);
        },
        err => {
          console.log("Unable to login. You may be not registered user.", err);
        }
      );
  }
  authenticated(res) {
    localStorage.setItem("token", res);
    this.router.navigate(["/"]);
  }
  logout() {
    localStorage.removeItem("token");
  }
}
