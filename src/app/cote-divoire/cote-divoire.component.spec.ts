import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoteDivoireComponent } from './cote-divoire.component';

describe('CoteDivoireComponent', () => {
  let component: CoteDivoireComponent;
  let fixture: ComponentFixture<CoteDivoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoteDivoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoteDivoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
