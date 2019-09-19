import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GuestStore } from "../guest-store";
import { Location } from "@angular/common";
import { ViewChild } from "@angular/core";
import { FormComponent } from "../form/form.component";

@Component({
  selector: "app-edit-guest",
  templateUrl: "./edit-guest.component.html",
  styleUrls: ["./edit-guest.component.css"]
})
export class EditGuestComponent implements AfterViewInit {
  guest;
  id: string;
  editedGuest: Object;
  guestToEdit: Object;
  isFormValid: boolean;

  // this broke the child instance varble that brings the child form
  // @ViewChild(FormComponent, { read: true, static: false }) child: FormComponent;
  @ViewChild(FormComponent, { static: true }) child: FormComponent;
  // form: TemplateRef<any> | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.isFormValid = true;
  }

  ngAfterViewInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    const guestStore = new GuestStore();
    this.guestToEdit = guestStore.get(this.id);
    this.child.form.setValue(this.guestToEdit);
  }
  // getFormData(guest: Object) {
  //   this.editedGuest = guest;
  // }

  onSubmit() {
    this.editedGuest = this.child.form.value;
    const guestStore = new GuestStore();
    guestStore.update(this.id, this.editedGuest);
    this.router.navigate([`/guest/${this.id}`]);
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
