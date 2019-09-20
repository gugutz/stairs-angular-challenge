import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { CurrencyPipe } from "@angular/common";
registerLocaleData(localePt);

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent {
  @Input() context;
  @Input() isDetailing: boolean;
  @Output() formStatus = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(
    private currencyPipe: CurrencyPipe,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      countryOfOrigin: new FormControl("", Validators.required),
      zipcode: new FormControl("", Validators.required),
      document: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      creditCard: new FormControl("", Validators.required),
      valueChargedAtCheckIn: new FormControl("", Validators.required)
    });
  }

  onChange(event: any): void {
    this.formStatus.emit(this.form.valid);
  }

  get name() {
    return this.form.get("name");
  }
  get email() {
    return this.form.get("email");
  }
  get address() {
    return this.form.get("address");
  }
  get city() {
    return this.form.get("city");
  }
  get state() {
    return this.form.get("state");
  }
  get countryOfOrigin() {
    return this.form.get("countryOfOrigin");
  }
  get zipcode() {
    return this.form.get("zipcode");
  }
  get document() {
    return this.form.get("document");
  }
  get phone() {
    return this.form.get("phone");
  }
  get creditCard() {
    return this.form.get("creditCard");
  }
  get valueChargedAtCheckIn() {
    return this.form.get("valueChargedAtCheckIn");
  }
}
