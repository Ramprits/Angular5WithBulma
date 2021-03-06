import { Component, ViewEncapsulation } from "@angular/core";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";
import { Title } from "@angular/platform-browser";
import { AuthService } from "./auth/auth.service";
@Component({
  selector: "b-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  loading: boolean;
  constructor(
    private router: Router,
    public title: Title,
    public auth: AuthService
  ) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
    this.title.setTitle("Home");
  }
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
}
