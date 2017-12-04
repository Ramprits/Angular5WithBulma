import * as Raven from "raven-js";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PanelModule } from "primeng/primeng";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { RootUrl } from "./core/root-url";
import { Error404Component } from "./core/404.component";
import { HomeComponent } from "./home/home.component";
import { FielderrorsComponent } from "./core/fielderrors/fielderrors.component";
import { AuthGuard } from "./auth/auth.guard";
import { AuthService } from "./auth/auth.service";
import { AngularFireAuthModule } from "angularfire2/auth";
// Fature module
import { SaintGobainModule } from "./component/saint-gobain.module";

// Raven error checking start here ...
Raven.config(
  "https://f88b3d205a9042d5b1a069be1baf9c31@sentry.io/241753"
).install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err.originalError);
  }
}
export function provideErrorHandler() {
  if (environment.production) {
    return new RavenErrorHandler();
  } else {
    return new ErrorHandler();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
    FielderrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PanelModule,
    ReactiveFormsModule,
    SaintGobainModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    environment.production
      ? ServiceWorkerModule.register("/ngsw-worker.js")
      : []
  ],
  providers: [RootUrl, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
