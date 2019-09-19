import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GuestStore } from "../guest-store";
import { GuestService } from "../guest.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-list-all-guests",
  templateUrl: "./list-all-guests.component.html",
  styleUrls: ["./list-all-guests.component.css"]
})
export class ListAllGuestsComponent {
  guests: Object;
  error;

  constructor(
    guestService: GuestService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    const guestStore = new GuestStore();
    this.guests = guestStore.list();
    this.guestService = guestService;
  }

  onDelete(id: string) {
    const guestStore = new GuestStore();
    console.log("inside delete guest id " + id);
    guestStore.delete(id);
    this.guests = guestStore.list();
  }

  exportGuests() {
    console.log(JSON.stringify(this.guests));
    this.guestService.sendGuestsToApi(this.guests).subscribe(
      (guests: Object) => (this.guests = { ...guests }), // success path
      error => (this.error = error) // error path
    );
  }
}
