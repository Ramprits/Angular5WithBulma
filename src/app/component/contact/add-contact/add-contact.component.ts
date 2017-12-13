import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Message } from "primeng/components/common/api";
import { Router } from "@angular/router";
import { ContactService } from "../contact.service";
import { LoggerService } from "../../../core/logging.service";
import { Contact } from "../contact.model";
@Component({
  selector: "b-add-contact",
  templateUrl: "./add-contact.component.html"
})
export class AddContactComponent implements OnInit {
  addContact: FormGroup;
  msgs: Message[] = [];
  constructor(
    private contactService: ContactService,
    private logger: LoggerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

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
    this.contactService.Addontact(formData).subscribe((contact: any) => {
      if (contact) {
        this.router.navigate(["/"]);
      }
    });
  }
  Back() {
    this.router.navigate(["/saintGobain/contact"]);
  }
}
