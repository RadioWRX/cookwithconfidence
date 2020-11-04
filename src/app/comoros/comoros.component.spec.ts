import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComorosComponent } from './comoros.component';

describe('ComorosComponent', () => {
  let component: ComorosComponent;
  let fixture: ComponentFixture<ComorosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComorosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComorosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
