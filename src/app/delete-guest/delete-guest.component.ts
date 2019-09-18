import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GuestStore } from "../guest-store";

@Component({
  selector: "app-delete-guest",
  templateUrl: "./delete-guest.component.html",
  styleUrls: ["./delete-guest.component.css"]
})
export class DeleteGuestComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.deleteGuest();
    this.router.navigate(["/guests/all"]);
  }

  deleteGuest() {
    const guestStore = new GuestStore();
    const guests = guestStore.getGuests();

    const guestId = this.route.snapshot.paramMap.get("id");
    console.log(guestId);
    const guestToDelete = guestStore.findGuest(guestId);

    if (delete guests[guestToDelete.id]) {
      guestStore.saveGuestList(guests);
    }
  }
}
