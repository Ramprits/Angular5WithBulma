import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Training } from "./training.module";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { delay } from "rxjs/operators";

import { TrackerError } from "../../core/tracker.error";

@Injectable()
export class TrainingService {
  RootUrl = "assets/data/training.json";
  constructor(private httpClient: HttpClient) {}
  GetTrainings(): Observable<Training[] | TrackerError> {
    return this.httpClient
      .get<Training[] | TrackerError>(this.RootUrl)
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
