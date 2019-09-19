import data from "../../data/db.json";
import { v4 as uuid } from "uuid";

export class GuestStore {
  constructor() {
    if (window.localStorage.getItem("guests") === null) {
      this.seed();
    }
  }

  seed() {
    const guests = data.guests;
    window.localStorage.setItem("guests", JSON.stringify(guests));
  }

  add(guest) {
    const guestStore = new GuestStore();
    const guests = this.list();
    const id = uuid();
    guest.id = id;
    guests[id] = guest;
    window.localStorage.setItem("guests", JSON.stringify(guests));
  }

  list() {
    const data = localStorage.getItem("guests");
    const guests = JSON.parse(data);
    return guests;
  }

  get(id: string) {
    const data = localStorage.getItem("guests");
    const guests = JSON.parse(data);
    return guests[id];
  }

  update(id: string, guest: Object) {
    const guestStore = new GuestStore();
    const guests = this.list();
    guests[id] = guest;
    console.log("dentrodoadd guest . id: " + guests);
    window.localStorage.setItem("guests", JSON.stringify(guests));
  }

  delete(id: string) {
    const guestStore = new GuestStore();
    const guests = this.list();
    if (delete guests[id]) {
      delete guests[id];
      window.localStorage.setItem("guests", JSON.stringify(guests));
    }
  }
}
