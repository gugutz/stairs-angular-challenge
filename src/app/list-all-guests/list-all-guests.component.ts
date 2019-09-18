import { Component, OnInit } from "@angular/core";
import { GuestStore } from "../guest-store";
import { GuestService } from "../guest.service";

@Component({
  selector: "app-list-all-guests",
  templateUrl: "./list-all-guests.component.html",
  styleUrls: ["./list-all-guests.component.css"]
})
export class ListAllGuestsComponent implements OnInit {
  guests: Object;
  guestService;
  error;

  constructor(guestService: GuestService) {
    const guestStore = new GuestStore();
    this.guests = guestStore.getGuests();
    this.guestService = guestService;
  }

  exportGuests() {
    console.log(JSON.stringify(this.guests));
    this.guestService.sendGuestsToApi(this.guests).subscribe(
      (guests: Object) => (this.guests = { ...guests }), // success path
      error => (this.error = error) // error path
    );
  }
  ngOnInit() {}
}
