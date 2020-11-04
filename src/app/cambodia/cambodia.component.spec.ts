import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambodiaComponent } from './cambodia.component';

describe('CambodiaComponent', () => {
  let component: CambodiaComponent;
  let fixture: ComponentFixture<CambodiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambodiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambodiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
