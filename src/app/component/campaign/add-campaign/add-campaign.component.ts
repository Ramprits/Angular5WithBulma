import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { CampaignService } from "../campaign.service";

@Component({
  selector: "b-add-campaign",
  templateUrl: "./add-campaign.component.html"
})
export class AddCampaignComponent implements OnInit {
  AddCampaign: FormGroup;
  constructor(
    private fb: FormBuilder,
    private title: Title,
    private campaignService: CampaignService
  ) {
    this.title.setTitle("Add Campaign");
  }
  insertCampaign(campaign) {
    this.campaignService.insertCampaign(campaign).subscribe(camp => {
      return camp;
    });
  }
  ngOnInit() {
    this.AddCampaign = this.fb.group({
      name: ["", []],
      description: ["", []],
      maximumWishes: [0, []],
      isActive: false,
      isClose: false,
      userLock: false,
      managerLock: false
    });
  }
}
