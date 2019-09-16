import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-delete-guest",
  templateUrl: "./delete-guest.component.html",
  styleUrls: ["./delete-guest.component.css"]
})
export class DeleteGuestComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.deleteGuest();
  }

  ngOnInit() {}

  deleteGuest() {
    const data = window.localStorage.getItem("guests");
    const guests = JSON.parse(data);

    const guestId = this.route.snapshot.paramMap.get("id");
    console.log(guestId);
    const guestToDelete = guests.find(guest => {
      console.log("guest found: " + guest.id);
      return guest.id === guestId;
    });
    guests.pop(guestToDelete);
    const updatedGuestList = JSON.stringify(guests);

    window.localStorage.setItem("guests", updatedGuestList);
    console.log(`Deleted ${this.guestToDelete} successfully`);
  }
}
