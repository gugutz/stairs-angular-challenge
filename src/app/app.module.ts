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

import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  // { path: "guest/add", component: GuestRegistrationComponent },
  { path: "guest/add", component: GuestRegistrationComponent },
  { path: "guest/:id", component: GuestDetailsComponent },
  { path: "guest/:id/edit", component: EditGuestComponent },
  { path: "guest/:id/delete", component: DeleteGuestComponent },
  { path: "guests/all", component: ListAllGuestsComponent },
  { path: "", redirectTo: "/guests/all", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
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
    DeleteGuestComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- disabled angular routing event logs
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
