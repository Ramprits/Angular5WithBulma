import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { RootUrl } from "../../core/root-url";
import { Observable } from "rxjs/Observable";
import { ICategory } from "./ICategory";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { TrackerError } from "../../core/tracker.error";

@Injectable()
export class CotegoryService {
  _ROOTURL = "";

  constructor(private httpClient: HttpClient, private rootUrl: RootUrl) {
    this._ROOTURL = this.rootUrl.getApiURI();
  }

  getCategories(): Observable<ICategory[] | TrackerError> {
    return this.httpClient
      .get<ICategory[]>(`http://localhost:5000/api/Categories`)
      .map((category: ICategory[]) => {
        return category;
      })
      .catch(this.handleError);
  }

  getCategorie(categoryId: ICategory): Observable<ICategory> {
    return this.httpClient
      .get<ICategory>(`http://localhost:5000/api/Categories` + `/${categoryId}`)
      .map((category: ICategory) => {
        return category;
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
