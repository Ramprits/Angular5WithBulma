import { Component, OnInit } from "@angular/core";
import { ContactService } from "./contact.service";
import { LoggerService } from "../../core/logging.service";
import { Contact } from "./contact.model";
import { Observable } from "rxjs/Observable";
import { TrackerError } from "../../core/tracker.error";
import { Router } from "@angular/router";

@Component({
  selector: "b-contact",
  templateUrl: "./contact.component.html"
})
export class ContactComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private loggerL: LoggerService,
    private router: Router
  ) {}
  contacts: Contact[] | TrackerError;
  ngOnInit() {}

  GetContacts() {
    this.contactService.GetContact().subscribe(
      contact => (this.contacts = contact),
      (err: TrackerError) => {
        console.log(err.errorNumber);
      },
      () => {
        console.log("Loaded sucessfully");
      }
    );
  }

  addContact() {
    this.router.navigate(["/saintGobain/addContact"]);
  }
}
