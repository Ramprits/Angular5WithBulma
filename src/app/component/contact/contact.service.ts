import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { RootUrl } from "../../core/root-url";
import { Contact, IContactResponse } from "./contact.model";
import "rxjs/add/operator/delay";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import { TrackerError } from "../../core/tracker.error";

@Injectable()
export class ContactService {
  _rootUrl = "";
  constructor(private httpClient: HttpClient, private rootUrl: RootUrl) {
    this._rootUrl = this.rootUrl.getApiURI();
  }

  GetContact(): Observable<Contact[] | TrackerError> {
    return this.httpClient
      .get<Contact[]>(`http://localhost:5000/api/contact`)
      .delay(1000)
      .catch(this.handleError);
  }
  Addontact(contact: Contact): Observable<any> {
    return this.httpClient
      .post<IContactResponse>(`http://localhost:5000/api/contact`, contact)
      .map(data => {
        return data.contact;
      });
  }
  private handleError(error: HttpErrorResponse): Observable<TrackerError> {
    const dataError = new TrackerError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error occurred retrieving data.";
    return Observable.throw(dataError);
  }
}
