import { Component } from "@angular/core";
import data from "../../data/db.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "stairs-frontend";

  constructor() {
    const guests = data.guests;
    if (window.localStorage.getItem("guests") === null) {
      window.localStorage.setItem("guests", JSON.stringify(guests));
    }
  }
}
