import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { TrackerError } from "../../core/tracker.error";
import { Training } from "./training.module";
import "rxjs/add/operator/delay";

@Injectable()
export class TrainingService {
  RootUrl = "assets/data/training.json";
  constructor(private httpClient: HttpClient) {}
  GetTrainings(): Observable<Training[]> {
    return this.httpClient.get<Training[]>(this.RootUrl).delay(1000);
  }
}
