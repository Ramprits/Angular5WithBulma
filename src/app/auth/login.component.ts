import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "b-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private title: Title
  ) {
    this.title.setTitle("Login");
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
}
