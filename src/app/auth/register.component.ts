import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "b-register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private title: Title
  ) {
    this.title.setTitle("Register");
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
}

export class Register {
  public email: string;
  public password: string;
}
