import { NgModule } from "@angular/core";
import {
  InputTextModule,
  DataTableModule,
  PanelModule,
  GrowlModule,
  ButtonModule,
  CheckboxModule,
  DataGridModule
} from "primeng/primeng";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
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
import { RootUrl } from "../core/root-url";
import { AddTrainingComponent } from "./training/add-training/add-training.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    PanelModule,
    CheckboxModule,
    GrowlModule,
    DataGridModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
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
    AddTrainingComponent,
    EmployeeComponent
  ],
  providers: [
    CotegoryService,
    TrainingService,
    LoggerService,
    CampaignService,
    ContactService,
    RootUrl
  ]
})
export class SaintGobainModule {}
