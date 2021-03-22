import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAnnuelComponent } from './formulaire-annuel.component';

describe('FormulaireAnnuelComponent', () => {
  let component: FormulaireAnnuelComponent;
  let fixture: ComponentFixture<FormulaireAnnuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAnnuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAnnuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
