import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingCartComponent } from './renting-cart.component';

describe('RentingCartComponent', () => {
  let component: RentingCartComponent;
  let fixture: ComponentFixture<RentingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
