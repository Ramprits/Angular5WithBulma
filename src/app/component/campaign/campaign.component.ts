import { Component, OnInit } from "@angular/core";
import { CampaignService } from "./campaign.service";
import { Campaign } from "./Campaign";
import { TrackerError } from "../../core/tracker.error";
import { HttpErrorResponse } from "@angular/common/http";
import { LoggerService } from "../../core/logging.service";
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "b-campaign",
  templateUrl: "./campaign.component.html"
})
export class CampaignComponent implements OnInit {
  camp: Campaign[];
  loading = false;
  AddNewCampaign = false;
  campaignForm: FormGroup;
  constructor(
    private campaignService: CampaignService,
    private logger: LoggerService,
    private router: Router,
    private fb: FormBuilder
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
  BuildForm() {
    this.campaignForm = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      startDate: ["12/12/2017", [Validators.required]],
      maximumWishes: ["", [Validators.required]],
      year: ["12/12/2017", [Validators.required]],
      isActive: [false, [Validators.required]],
      isClose: [false, [Validators.required]],
      userLock: [false, [Validators.required]],
      managerLock: [false, [Validators.required]]
    });
  }
  AddCampaign(campaign: Campaign) {
    this.campaignService
      .insertCampaign(campaign)
      .subscribe((camp: Campaign) => {
        if (camp) {
          this.router.navigate(["/"]);
        }
      });
  }
}
