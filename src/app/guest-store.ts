import data from "../../data/db.json";

export class GuestStore {
  data: string;
  guestList: Object;

  constructor() {
    if (window.localStorage.getItem("guests") === null) {
      this.seedGuests();
    } else {
      this.getGuests();
    }
  }

  seedGuests() {
    this.guestList = data.guests;
    window.localStorage.setItem("guests", JSON.stringify(this.guestList));
  }

  getGuests() {
    this.data = localStorage.getItem("guests");
    this.guestList = JSON.parse(this.data);
    console.log("inside getGuests() : " + this.guestList);
    return this.guestList;
  }

  saveGuestList(guests: Object) {
    window.localStorage.setItem("guests", JSON.stringify(guests));
  }

  findGuest(id: string) {
    console.log("inside findGuests() : " + this.guestList[id]);
    return this.guestList[id];
  }
}
