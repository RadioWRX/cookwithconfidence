import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzechiaComponent } from './czechia.component';

describe('CzechiaComponent', () => {
  let component: CzechiaComponent;
  let fixture: ComponentFixture<CzechiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzechiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CzechiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
