import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./auth/register.component";
import { LoginComponent } from "./auth/login.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home", canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "saintGobain",
    loadChildren: "app/component/saint-gobain.module#SaintGobainModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
