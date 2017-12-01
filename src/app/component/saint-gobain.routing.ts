import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import {
  TrainingComponent,
  CategoryComponent,
  HistoryComponent,
  NeedComponent,
  CampaignComponent
} from "./index";

export const SaintGobaonRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "category" },
  { path: "category", component: CategoryComponent, canActivate: [AuthGuard] },
  { path: "training", component: TrainingComponent, canActivate: [AuthGuard] },
  { path: "history", component: HistoryComponent, canActivate: [AuthGuard] },
  { path: "need", component: NeedComponent, canActivate: [AuthGuard] },
  { path: "campaign", component: CampaignComponent, canActivate: [AuthGuard] }
];
