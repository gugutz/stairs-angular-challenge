import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { v4 as uuid } from "uuid";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  // @Input() guest: string;
  @Output() formData = new EventEmitter<Object>();
  guest: Object;
  isEditing = false;
  isAdding = false;
  // private _guest;
  // @Input()
  // set guest(guest: string) {
  //   this._guest = guest;
  // }

  constructor(private route: ActivatedRoute) {
    const data = window.localStorage.getItem("guests");
    console.log(data);
    const guests = JSON.parse(data);
    console.log(guests);
    const guestId = this.route.snapshot.paramMap.get("id");
    console.log(guestId);
    this.guest = guests.find(guest => {
      return guest.id === guestId;
    });

    console.log(this.guest);
    console.log("formcontroller guest: " + this.guest);
    if (this.guest != null) {
      console.log("dentro do if: " + this.guest);
      this.fillFormData();
    }
  }

  ngOnInit() {}

  form = new FormGroup({
    id: new FormControl(uuid()),
    name: new FormControl(""),
    email: new FormControl(""),
    address: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    countryOfOrigin: new FormControl(""),
    zipcode: new FormControl(""),
    document: new FormControl(""),
    creditCard: new FormControl(""),
    cvc: new FormControl(""),
    phone: new FormControl(""),
    valueChargedAtCheckIn: new FormControl("")
  });

  fillFormData() {
    this.form.setValue({
      id: this.guest.id,
      name: this.guest.name,
      email: this.guest.email,
      address: this.guest.address,
      city: this.guest.city,
      state: this.guest.state,
      countryOfOrigin: this.guest.countryOfOrigin,
      zipcode: this.guest.zipcode,
      document: this.guest.document,
      creditCard: this.guest.creditCard,
      cvc: "",
      phone: this.guest.phone,
      valueChargedAtCheckIn: this.guest.valueChargedAtCheckIn
    });
  }
  onKey(event: KeyboardEvent) {
    this.formData.emit(this.form.value);
    console.log(this.form.value);
    console.log(event);
  }
  onSubmit() {}

  // }
}
