import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireTransfusionnelComponent } from './formulaire-transfusionnel.component';

describe('FormulaireTransfusionnelComponent', () => {
  let component: FormulaireTransfusionnelComponent;
  let fixture: ComponentFixture<FormulaireTransfusionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireTransfusionnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireTransfusionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
