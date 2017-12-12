import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { AddContactComponent } from "./contact/add-contact/add-contact.component";
import { AddTrainingComponent } from "./training/add-training/add-training.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AuthGuard } from "../auth/auth.guard";
import {
  TrainingComponent,
  CategoryComponent,
  HistoryComponent,
  NeedComponent,
  CampaignComponent
} from "./index";

export const SaintGobaonRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "category",
    canActivate: [AuthGuard]
  },
  {
    path: "category",
    component: CategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addTraining",
    component: AddTrainingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "training",
    component: TrainingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "need",
    component: NeedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "campaign",
    component: CampaignComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addContact",
    component: AddContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employees",
    component: EmployeeComponent,
    canActivate: [AuthGuard]
  }
];
