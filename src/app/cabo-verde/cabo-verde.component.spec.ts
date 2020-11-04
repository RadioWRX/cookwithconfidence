import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboVerdeComponent } from './cabo-verde.component';

describe('CaboVerdeComponent', () => {
  let component: CaboVerdeComponent;
  let fixture: ComponentFixture<CaboVerdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaboVerdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaboVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
