import { Component } from "@angular/core";
import { GuestStore } from "./guest-store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "stairs-frontend";

  constructor() {
    const guestStore = new GuestStore();
    guestStore.list();
  }
}
