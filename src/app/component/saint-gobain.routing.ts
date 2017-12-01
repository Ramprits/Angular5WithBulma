import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  TrainingComponent,
  CategoryComponent,
  HistoryComponent,
  NeedComponent,
  CampaignComponent
} from "./index";

export const SaintGobaonRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "category" },
  { path: "category", component: CategoryComponent },
  { path: "training", component: TrainingComponent },
  { path: "history", component: HistoryComponent },
  { path: "need", component: NeedComponent },
  { path: "campaign", component: CampaignComponent }
];
