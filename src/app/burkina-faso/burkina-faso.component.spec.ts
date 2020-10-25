import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaFasoComponent } from './burkina-faso.component';

describe('BurkinaFasoComponent', () => {
  let component: BurkinaFasoComponent;
  let fixture: ComponentFixture<BurkinaFasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaFasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaFasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
