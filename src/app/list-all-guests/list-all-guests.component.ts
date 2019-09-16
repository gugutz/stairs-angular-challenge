import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-all-guests",
  templateUrl: "./list-all-guests.component.html",
  styleUrls: ["./list-all-guests.component.css"],
  template: `
    <div class="container">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Endereço</th>
            <th scope="col">Telefone</th>
            <th scope="col">Detalhar | Editar | Excluir</th>
          </tr>
        </thead>
        <tbody>
          <ng-container>
            <tr *ngFor="let guest of guests">
              <td>{{ guest.name }}</td>
              <td>{{ guest.email }}</td>
              <td>{{ guest.address }}</td>
              <td>{{ guest.phone }}</td>
              <td>
                <a
                  class="nav-link float-left"
                  href="#"
                  routerLink="/guest/{{guest.id}}"
                  routerLinkActive="active"
                >
                  <button (click)="guestDetails(guest.id)">Detalhes</button>
                </a>
                <a
                  class="nav-link float-left"
                  href="#"
                  routerLink="/guest/{{guest.id}}/edit"
                  routerLinkActive="active"
                >
                  <button>Editar</button>
                </a>
                <a
                  class="nav-link"
                  href="#"
                  routerLink="/guest/{{guest.id}}/delete"
                  routerLinkActive="active"
                >
                  <button>Excluir</button>
                </a>
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>
    </div>
  `
})
export class ListAllGuestsComponent implements OnInit {
  titulo = "teste";
  data: string;
  guests: Array<Object>;
  constructor() {
    this.data = localStorage.getItem("guests");
    this.guests = JSON.parse(this.data);
    console.log(this.guests);
  }

  ngOnInit() {}
}
