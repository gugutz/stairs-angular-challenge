import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GuestStore } from "../guest-store";
import { Location } from "@angular/common";

@Component({
  selector: "app-guest-registration",
  templateUrl: "./guest-registration.component.html",
  styleUrls: ["./guest-registration.component.css"]
})
export class GuestRegistrationComponent {
  guests: Object;
  newGuest: Object;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    const guestStore = new GuestStore();
    this.guests = guestStore.getGuests();
  }

  getFormData(guest: Object) {
    this.newGuest = guest;
  }

  registerGuest() {
    this.guests[this.newGuest.id] = this.newGuest;
    const guestStore = new GuestStore();
    guestStore.saveGuestList(this.guests);
    this.router.navigate([`/guest/${this.newGuest.id}`]);
  }

  navigateBack() {
    this.location.back();
  }
}
