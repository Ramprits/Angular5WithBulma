import { NgModule } from "@angular/core";
import {
  InputTextModule,
  DataTableModule,
  PanelModule,
  GrowlModule,
  ButtonModule
} from "primeng/primeng";
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
import { ContactComponent } from "./contact/contact.component";
import { ContactService } from "./contact/contact.service";
import { AddContactComponent } from "./contact/add-contact/add-contact.component";
import { EmployeeComponent } from "./employee/employee.component";

@NgModule({
  imports: [
    InputTextModule,
    PanelModule,
    GrowlModule,
    ButtonModule,
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
    NeedComponent,
    ContactComponent,
    AddContactComponent,
    EmployeeComponent
  ],
  providers: [
    CotegoryService,
    TrainingService,
    LoggerService,
    CampaignService,
    ContactService
  ]
})
export class SaintGobainModule {}
