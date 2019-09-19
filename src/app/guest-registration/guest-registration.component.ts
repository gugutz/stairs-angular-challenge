import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GuestStore } from "../guest-store";
import { Location } from "@angular/common";
import { ViewChild } from "@angular/core";
import { FormComponent } from "../form/form.component";

@Component({
  selector: "app-guest-registration",
  templateUrl: "./guest-registration.component.html",
  styleUrls: ["./guest-registration.component.css"]
})
export class GuestRegistrationComponent implements AfterViewInit {
  newGuest;
  isFormValid: boolean;

  // @ViewChild(FormComponent, { read: true, static: false }) child: FormComponent;
  @ViewChild(FormComponent, { static: false }) child: FormComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngAfterViewInit() {
    console.log("after init value" + this.child.form.valid);
    console.log(this.child.form.value);
    this.isFormValid = this.child.form.valid;
  }

  onSubmit() {
    const guestStore = new GuestStore();
    const guests = guestStore.list();
    this.newGuest = this.child.form.value;
    guestStore.add(this.newGuest);
    const id = this.newGuest.id;
    this.router.navigate([`/guest/${this.newGuest.id}`]);
  }

  getFormValidity(event: boolean) {
    console.log("after init value" + this.child.form.valid);
    this.isFormValid = event;
    console.log("form valid dentro do registro " + event);
    console.log(event);
  }

  navigateBack() {
    this.location.back();
  }
}
