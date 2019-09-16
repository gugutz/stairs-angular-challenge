import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuestComponentComponent } from './edit-guest-component.component';

describe('EditGuestComponentComponent', () => {
  let component: EditGuestComponentComponent;
  let fixture: ComponentFixture<EditGuestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGuestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGuestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
