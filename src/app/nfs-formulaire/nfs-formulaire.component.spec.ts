import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfsFormulaireComponent } from './nfs-formulaire.component';

describe('NfsFormulaireComponent', () => {
  let component: NfsFormulaireComponent;
  let fixture: ComponentFixture<NfsFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfsFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfsFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
