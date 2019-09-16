import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-guest",
  templateUrl: "./edit-guest.component.html",
  styleUrls: ["./edit-guest.component.css"],
  template: `
    <app-form (formData)="getFormData($event)"> </app-form>

    <div class="container">
      <button (click)="editGuest()" type="submit" class="btn btn-primary">
        Editar
      </button>
    </div>
  `
})
export class EditGuestComponent implements OnInit {
  // getting the guest id from the URL paramss
  guest = "testando guest passing values";
  guestToEdit: Object;
  editedGuest: Object;

  getFormData(guest: Object) {
    this.editedGuest = guest;
  }

  editGuest() {
    const data = window.localStorage.getItem("guests");
    const guests = JSON.parse(data);
    // const updatedGuests = guests.map(guest => {
    //   if (guest.id === this.editedGuest.id) {
    //     console.log("found the guest inside the map: " + guest.name);
    //     console.log("editedguest inside map: " + this.editedGuest.name);
    //     guest = this.editedGuest;
    //     console.log("found the guest inside the map: " + guest.name);
    //   }
    // });
    // console.log(updatedGuests);

    console.log(this.editedGuest.id);
    const guestId = this.route.snapshot.paramMap.get("id");
    console.log(guestId);
    const guestToEdit = guests.find(guest => {
      return guest.id === this.editedGuest.id;
      console.log("guest found: " + guest.id);
    });
    guests.pop(guestToEdit);
    guests.push(this.editedGuest);
    const stringifiedGuests = JSON.stringify(guests);

    window.localStorage.setItem("guests", stringifiedGuests);
  }

  constructor(private route: ActivatedRoute) {
    // this.fillFormData();
  }

  ngOnInit() {}
}
