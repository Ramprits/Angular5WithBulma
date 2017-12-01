import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { RootUrl } from "../../core/root-url";

@Injectable()
export class CotegoryService {
  _ROOTURL = "";

  constructor(private httpClient: HttpClient, private rootUrl: RootUrl) {
    this._ROOTURL = this.rootUrl.getApiURI();
  }

  getCategories() {}
}
