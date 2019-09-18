import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { GuestStore } from "../guest-store";
import { v4 as uuid } from "uuid";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  // @Input() guest: string;
  @Input() context;
  @Input() isDetailing: boolean;
  @Input() guest: Object;
  @Output() formData = new EventEmitter<Object>();

  formGroup: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.formGroup = new FormGroup({
      id: new FormControl(uuid()),
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      countryOfOrigin: new FormControl("", Validators.required),
      zipcode: new FormControl("", Validators.required),
      document: new FormControl("", Validators.required),
      creditCard: new FormControl("", Validators.required),
      // cvc: new FormControl(""),
      phone: new FormControl(""),
      valueChargedAtCheckIn: new FormControl("", Validators.required)
    });

    // save state once when loads
    // this.formData.emit(his.formGroup.value);

    console.log("form controller guests: " + this.guest);
  }

  ngOnInit() {
    // disable form if user is on guest details page
    if (this.isDetailing) {
      console.log("isDetaling value: " + this.isDetailing);
      this.formGroup.disable();
    }

    // if there is a guest in current state, then fill the form with its data
    console.log("dentro do if: " + this.guest);
    if (this.guest != null) {
      console.log("dentro do if: " + this.guest);
      this.fillFormData();
    }
  }

  onChange(event: any) {
    this.formData.emit(this.formGroup.value);
    console.log(this.formGroup.value);
    console.log(event);
  }

  onSubmit() {
    // this.formData.emit(this.formGroup.value);
    // console.log(this.formGroup.value);
    // console.log(event);
  }
  fillFormData() {
    this.formGroup.setValue(this.guest);

    // save form state once when filling it
    this.formData.emit(this.formGroup.value);
  }
}
