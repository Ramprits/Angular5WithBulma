import { NgModule } from "@angular/core";
import { InputTextModule, DataTableModule, PanelModule } from "primeng/primeng";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { SaintGobaonRoutes } from "./saint-gobain.routing";
import { LoggerService } from "../core/logging.service";
import { CampaignService } from "./campaign/campaign.service";
import {
  TrainingComponent,
  CampaignComponent,
  CategoryComponent,
  HistoryComponent,
  NeedComponent,
  CotegoryService,
  TrainingService
} from "./index";

@NgModule({
  imports: [
    InputTextModule,
    PanelModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule,
    RouterModule.forChild(SaintGobaonRoutes)
  ],
  exports: [],
  declarations: [
    TrainingComponent,
    CampaignComponent,
    CategoryComponent,
    HistoryComponent,
    NeedComponent
  ],
  providers: [CotegoryService, TrainingService, LoggerService, CampaignService]
})
export class SaintGobainModule {}
