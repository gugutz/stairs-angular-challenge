import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GuestStore } from "../guest-store";
import { Location } from "@angular/common";

@Component({
  selector: "app-edit-guest",
  templateUrl: "./edit-guest.component.html",
  styleUrls: ["./edit-guest.component.css"]
})
export class EditGuestComponent {
  // getting the guest id from the URL paramss
  guestId: string;
  guests: Object;
  guestToEdit: Object;
  editedGuest: Object;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    const guestStore = new GuestStore();
    this.guests = guestStore.getGuests();
    this.guestId = this.route.snapshot.paramMap.get("id");
    this.guestToEdit = guestStore.findGuest(this.guestId);
  }

  getFormData(guest: Object) {
    this.editedGuest = guest;
  }

  editGuest() {
    this.guests[this.guestId] = this.editedGuest;
    const guestStore = new GuestStore();
    guestStore.saveGuestList(this.guests);
    this.router.navigate([`/guest/${this.guestId}`]);
  }

  navigateBack() {
    this.location.back();
  }
}
