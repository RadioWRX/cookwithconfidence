import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralAfricanRepublicComponent } from './central-african-republic.component';

describe('CentralAfricanRepublicComponent', () => {
  let component: CentralAfricanRepublicComponent;
  let fixture: ComponentFixture<CentralAfricanRepublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralAfricanRepublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralAfricanRepublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
