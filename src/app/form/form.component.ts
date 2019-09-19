import {
  Component,
  EventEmitter,
  OnInit,
  AfterViewInit,
  Input,
  Output
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
// import { GuestStore } from "../guest-store";
// import { ViewChild } from "@angular/core";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { CurrencyPipe } from "@angular/common";
registerLocaleData(localePt);

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  @Input() context;
  @Input() isDetailing: boolean;
  @Output() formStatus = new EventEmitter<boolean>();

  // @ViewChild(NgForm, { static: false }) formGroup;

  form: FormGroup;

  constructor(
    private currencyPipe: CurrencyPipe,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // save state once when loads
    // this.formData.emit(this.form.value);
    // // console.log("form controller guests: " + this.guest);
    // if (this.isDetailing) {
    //   console.log("isDetaling value: " + this.isDetailing);
    //   this.form.disable();
    // }
    // console.log("dentro do if: " + this.guest);
    // if (this.guest != null) {
    //   // this.fillFormData();
    // }
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
    // this.form = this.formBuilder.group({
    //   id: new FormControl(""),
    //   name: new FormControl(null, [
    //     Validators.required,
    //     Validators.maxLength(15)
    //   ]),
    //   email: new FormControl(null, Validators.required),
    //   address: new FormControl(null, Validators.required),
    //   city: new FormControl(null, Validators.required),
    //   state: new FormControl("", Validators.required),
    //   countryOfOrigin: new FormControl("", Validators.required),
    //   zipcode: new FormControl("", Validators.required),
    //   document: new FormControl("", Validators.required),
    //   creditCard: new FormControl("", Validators.required),
    //   phone: new FormControl(""),
    //   valueChargedAtCheckIn: new FormControl("", Validators.required)
    // });
    this.onChanges();
  }

  onChanges(): void {
    // const currentValue = this.form.controls["valueChargedAtCheckIn"].value;
    // const currentValue = 1000;
    // console.log("currentvalue: " + currentValue);
    // const formatedCurrency = this.currencyPipe.transform(currentValue);
    // this.form.controls["valueChargedAtCheckIn"].setValue(formatedCurrency);
    // const currentCPF = this.form.controls["document"];
    // console.log(currentCPF);
    // const formatedCPF = this.format("###.###.###-##", currentCPF);
    // this.form.controls["document"].setValue(formatedCPF);
  }

  onChange(event: any): void {
    console.log("status do form = " + this.form.valid);
    this.formStatus.emit(this.form.valid);
  }

  onSubmit() {
    // console.log(this.form.value);
    // console.log(event);
  }
  // fillFormData() {
  //   this.form.setValue(this.guest);

  //   // save form state once when filling it
  //   this.formData.emit(this.form.value);
  // }

  // maskCPF(i) {
  //   const value = i;

  //   console.log(i);
  //   console.log(value);
  //   if (isNaN(value[value.length - 1])) {
  //     // impede entrar outro caractere que não seja número
  //     i.value = value.substring(0, value.length - 1);
  //     return;
  //   }

  //   if (value.length == 3 || value.length == 7) i.value += ".";
  //   if (value.length == 11) i.value += "-";
  // }
  format(mask, field) {
    console.log("add format logic");
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
