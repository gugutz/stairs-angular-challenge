import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GuestStore } from "../guest-store";
import { Location } from "@angular/common";

@Component({
  selector: "app-guest-details",
  templateUrl: "./guest-details.component.html",
  styleUrls: ["./guest-details.component.css"]
})
export class GuestDetailsComponent {
  guestId: string;
  isDetailing = true;
  guestToDetail: Object;

  constructor(private route: ActivatedRoute, private location: Location) {
    const guestStore = new GuestStore();
    const guests = guestStore.getGuests();
    this.guestId = this.route.snapshot.paramMap.get("id");
    this.guestToDetail = guestStore.findGuest(this.guestId);
  }

  navigateBack() {
    this.location.back();
  }
}
