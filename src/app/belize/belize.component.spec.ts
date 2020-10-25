import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelizeComponent } from './belize.component';

describe('BelizeComponent', () => {
  let component: BelizeComponent;
  let fixture: ComponentFixture<BelizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
