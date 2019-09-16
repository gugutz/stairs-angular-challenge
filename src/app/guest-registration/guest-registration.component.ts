import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-guest-registration",
  templateUrl: "./guest-registration.component.html",
  styleUrls: ["./guest-registration.component.css"],
  template: `
    <app-form (formData)="getFormData($event)"> </app-form>

    <div class="container">
      <button (click)="registerGuest()" type="submit" class="btn btn-primary">
        Cadastrar
      </button>
    </div>
  `
})
export class GuestRegistrationComponent implements OnInit {
  newGuest: Object;
  onSubmit() {}

  constructor() {}

  ngOnInit() {}

  getFormData(guest: Object) {
    this.newGuest = guest;
  }
  registerGuest() {
    const data = window.localStorage.getItem("guests");
    console.log(data);
    const guests = JSON.parse(data);
    console.log(guests);
    guests.push(this.newGuest);
    console.log(guests);
    const updatedGuests = JSON.stringify(guests);

    window.localStorage.setItem("guests", updatedGuests);
    // this.form.reset(); // reset form to empty
  }
}
