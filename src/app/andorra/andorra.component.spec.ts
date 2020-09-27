import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndorraComponent } from './andorra.component';

describe('AndorraComponent', () => {
  let component: AndorraComponent;
  let fixture: ComponentFixture<AndorraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndorraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndorraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
