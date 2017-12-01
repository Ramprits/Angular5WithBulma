import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { TrackerError } from "../../core/tracker.error";
import { Training } from "./training.module";

@Injectable()
export class TrainingService {
  RootUrl = "assets/data/training.json";
  constructor(private httpClient: HttpClient) {}
  GetTrainings(): Observable<Training[] | TrackerError> {
    return this.httpClient.get<Training[]>(this.RootUrl);
  }
  private handleError(error: HttpErrorResponse): Observable<TrackerError> {
    const dataError = new TrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error occurred retrieving data.";
    return Observable.throw(dataError);
  }
}
