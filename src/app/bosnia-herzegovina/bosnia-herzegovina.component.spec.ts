import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BosniaHerzegovinaComponent } from './bosnia-herzegovina.component';

describe('BosniaHerzegovinaComponent', () => {
  let component: BosniaHerzegovinaComponent;
  let fixture: ComponentFixture<BosniaHerzegovinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BosniaHerzegovinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BosniaHerzegovinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
