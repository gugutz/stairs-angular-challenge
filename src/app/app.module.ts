import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { GuestRegistrationComponent } from "./guest-registration/guest-registration.component";
import { FormComponent } from "./form/form.component";
import { GuestDetailsComponent } from "./guest-details/guest-details.component";
import { ListAllGuestsComponent } from "./list-all-guests/list-all-guests.component";
import { EditGuestComponent } from "./edit-guest/edit-guest.component";
import { DeleteGuestComponent } from "./delete-guest/delete-guest.component";

const appRoutes: Routes = [
  // { path: "guest/add", component: GuestRegistrationComponent },
  { path: "guest/add", component: GuestRegistrationComponent },
  { path: "guest/:id", component: GuestDetailsComponent },
  { path: "guest/:id/edit", component: EditGuestComponent },
  { path: "guest/:id/delete", component: DeleteGuestComponent },
  { path: "guests/all", component: ListAllGuestsComponent }

  // {
  //   path: "heroes",
  //   component: HeroListComponent,
  //   data: { title: "Heroes List" }
  // },
  // { path: "", redirectTo: "/heroes", pathMatch: "full" }
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GuestRegistrationComponent,
    GuestDetailsComponent,
    NavbarComponent,
    ListAllGuestsComponent,
    EditGuestComponent,
    DeleteGuestComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- disabled angular routing event logs
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
