import { Component, OnInit } from "@angular/core";
import { CampaignService } from "./campaign.service";
import { Campaign } from "./Campaign";
import { TrackerError } from "../../core/tracker.error";
import { HttpErrorResponse } from "@angular/common/http";
import { LoggerService } from "../../core/logging.service";

@Component({
  selector: "b-campaign",
  templateUrl: "./campaign.component.html"
})
export class CampaignComponent implements OnInit {
  camp: Campaign[];
  loading = false;
  constructor(
    private campaignService: CampaignService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.GetCampaign();
  }
  GetCampaign() {
    this.loading = true;
    this.campaignService.GetCampaign().subscribe(
      campaign => {
        this.camp = campaign;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.logger.log("Client-side error occured.");
        } else {
          this.logger.error("Server-side error occured.");
        }
      },
      () => {
        this.loading = false;
      }
    );
  }
}
