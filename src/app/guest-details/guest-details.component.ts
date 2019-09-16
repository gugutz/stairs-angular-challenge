import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-guest-details",
  templateUrl: "./guest-details.component.html",
  styleUrls: ["./guest-details.component.css"],
  template: `
    <app-form (formData)="getFormData($event)"> </app-form>

    <div class="container">
      <a
        class="nav-link float-left"
        href="#"
        routerLink="/guest/{{guestId}}/edit"
        routerLinkActive="active"
      >
        <button>Editar</button>
      </a>
      <a
        class="nav-link float-left"
        href="#"
        routerLink="/guest/{{guestId}}/delete"
        routerLinkActive="active"
      >
        <button>Excluir</button>
      </a>
    </div>
  `
})
export class GuestDetailsComponent implements OnInit {
  guestId: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.guestId = this.route.snapshot.paramMap.get("id");
    console.log("guestdetails page guestId: " + this.guestiD);
  }
}
