import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotswanaComponent } from './botswana.component';

describe('BotswanaComponent', () => {
  let component: BotswanaComponent;
  let fixture: ComponentFixture<BotswanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotswanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotswanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
