import { Component, OnInit } from "@angular/core";
import { CampaignService } from "./campaign.service";
import { Campaign } from "./Campaign";
import { TrackerError } from "../../core/tracker.error";

@Component({
  selector: "b-campaign",
  templateUrl: "./campaign.component.html"
})
export class CampaignComponent implements OnInit {
  camp: Campaign[];
  loading = false;
  constructor(private campaignService: CampaignService) {}

  ngOnInit() {}
  GetCampaign() {
    this.campaignService.GetCampaign().subscribe(campaign => {
      this.camp = campaign;
    });
  }
}
