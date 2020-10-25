import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahamasComponent } from './bahamas.component';

describe('BahamasComponent', () => {
  let component: BahamasComponent;
  let fixture: ComponentFixture<BahamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BahamasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BahamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
