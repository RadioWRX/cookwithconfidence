import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurundiComponent } from './burundi.component';

describe('BurundiComponent', () => {
  let component: BurundiComponent;
  let fixture: ComponentFixture<BurundiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurundiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurundiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
