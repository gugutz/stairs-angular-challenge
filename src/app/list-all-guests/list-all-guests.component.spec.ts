import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListAllGuestsComponent } from "./list-all-guests.component";

describe("ListAllGuestsComponent", () => {
  let component: ListAllGuestsComponent;
  let fixture: ComponentFixture<ListAllGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllGuestsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
