import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireTrimestrielComponent } from './formulaire-trimestriel.component';

describe('FormulaireTrimestrielComponent', () => {
  let component: FormulaireTrimestrielComponent;
  let fixture: ComponentFixture<FormulaireTrimestrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireTrimestrielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireTrimestrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
