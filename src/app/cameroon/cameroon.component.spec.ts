import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameroonComponent } from './cameroon.component';

describe('CameroonComponent', () => {
  let component: CameroonComponent;
  let fixture: ComponentFixture<CameroonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameroonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameroonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
