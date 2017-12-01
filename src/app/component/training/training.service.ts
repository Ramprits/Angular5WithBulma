import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { ITraining } from "./ITraining";

@Injectable()
export class TrainingService {
  RootUrl = "assets/data/training.json";
  constructor(private httpClient: HttpClient) {}
  GetTrainings(): Observable<ITraining[]> {
    return this.httpClient.get<ITraining[]>(this.RootUrl);
  }
}
