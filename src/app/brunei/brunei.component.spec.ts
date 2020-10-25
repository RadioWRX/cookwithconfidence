import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BruneiComponent } from './brunei.component';

describe('BruneiComponent', () => {
  let component: BruneiComponent;
  let fixture: ComponentFixture<BruneiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BruneiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BruneiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
