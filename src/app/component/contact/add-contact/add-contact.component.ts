import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Message } from "primeng/components/common/api";
@Component({
  selector: "b-add-contact",
  templateUrl: "./add-contact.component.html"
})
export class AddContactComponent implements OnInit {
  addContact: FormGroup;
  msgs: Message[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addContact = this.fb.group({
      name: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      email: ["", [Validators.required]],
      comment: ["", [Validators.required]]
    });
  }

  onSubmit(formData) {
    console.log(formData);
  }
}
