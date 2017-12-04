import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Campaign, ICampaignResponse } from "./Campaign";
import { RootUrl } from "../../core/root-url";
import { Observable } from "rxjs/Observable";
import { TrackerError } from "../../core/tracker.error";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/catch";

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

  insertCampaign(campaign: Campaign): Observable<Campaign | TrackerError> {
    return this.httpClient
      .post<ICampaignResponse>(this._ROOT, campaign)
      .map(data => {
        console.log("insert Campaign status: " + data.status);
        return data.campaign;
      })
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
