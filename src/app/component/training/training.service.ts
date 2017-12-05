import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { GetTraining } from "./training.module";
import "rxjs/add/operator/delay";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { TrackerError } from "../../core/tracker.error";
import { RootUrl } from "../../core/root-url";

@Injectable()
export class TrainingService {
  // private RootUrl = `http://localhost:5000/api/trainings`;
  constructor(private httpClient: HttpClient, private rootUrl: RootUrl) {
    // this.RootUrl = this.rootUrl.getApiURI();
  }
  GetTrainings(): Observable<GetTraining[] | TrackerError> {
    return this.httpClient
      .get<GetTraining[] | TrackerError>(`http://localhost:5000/api/trainings`)
      .delay(1000)
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse): Observable<TrackerError> {
    const dataError = new TrackerError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error occurred retrieving data.";
    return Observable.throw(dataError);
  }
}
