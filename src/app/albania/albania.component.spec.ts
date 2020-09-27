import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaniaComponent } from './albania.component';

describe('AlbaniaComponent', () => {
  let component: AlbaniaComponent;
  let fixture: ComponentFixture<AlbaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
