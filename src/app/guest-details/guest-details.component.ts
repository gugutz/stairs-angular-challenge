import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GuestStore } from "../guest-store";
import { Location } from "@angular/common";
import { ViewChild } from "@angular/core";
import { FormComponent } from "../form/form.component";

@Component({
  selector: "app-guest-details",
  templateUrl: "./guest-details.component.html",
  styleUrls: ["./guest-details.component.css"]
})
export class GuestDetailsComponent {
  id: string;
  guestToDetail: Object;

  // @ViewChild(FormComponent, { read: true, static: false }) child: FormComponent;
  @ViewChild(FormComponent, { static: false }) child: FormComponent;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngAfterViewInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    const guestStore = new GuestStore();
    this.guestToDetail = guestStore.get(this.id);
    this.child.form.setValue(this.guestToDetail);
    this.child.form.disable();
  }

  onDelete(id: string) {
    const guestStore = new GuestStore();
    console.log("inside delete guest id " + id);
    guestStore.delete(id);
    this.navigateBack();
  }

  navigateBack() {
    this.location.back();
  }
}
