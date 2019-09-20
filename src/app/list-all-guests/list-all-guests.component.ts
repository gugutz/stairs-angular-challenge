import { Component } from "@angular/core";
import { GuestStore } from "../guest-store";
import { GuestService } from "../guest.service";

@Component({
  selector: "app-list-all-guests",
  templateUrl: "./list-all-guests.component.html",
  styleUrls: ["./list-all-guests.component.css"]
})
export class ListAllGuestsComponent {
  guests: Object;
  guestService;
  error;

  constructor(guestService: GuestService) {
    const guestStore = new GuestStore();
    this.guests = guestStore.list();
    this.guestService = guestService;
  }

  onDelete(id: string) {
    const guestStore = new GuestStore();
    guestStore.delete(id);
    this.guests = guestStore.list();
  }

  exportGuests() {
    console.log(JSON.stringify(this.guests));
    this.guestService
      .sendGuestsToApi(this.guests)
      .subscribe(
        (guests: Object) => (this.guests = { ...guests }),
        error => (this.error = error)
      );
  }
}
