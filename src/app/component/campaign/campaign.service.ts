import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Campaign } from "./Campaign";
import { RootUrl } from "../../core/root-url";
import { Observable } from "rxjs/Observable";
import { TrackerError } from "../../core/tracker.error";
import "rxjs/add/operator/delay";

@Injectable()
export class CampaignService {
  _ROOT = "";
  constructor(private httpClient: HttpClient, private rootUrl: RootUrl) {
    this._ROOT = this.rootUrl.getApiURI();
  }
  GetCampaign(): Observable<Campaign[]> {
    return this.httpClient
      .get<Campaign[]>(this._ROOT + `/campaign`)
      .delay(1000);
  }
}
