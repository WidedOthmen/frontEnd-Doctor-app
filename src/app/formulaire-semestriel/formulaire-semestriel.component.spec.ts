import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSemestrielComponent } from './formulaire-semestriel.component';

describe('FormulaireSemestrielComponent', () => {
  let component: FormulaireSemestrielComponent;
  let fixture: ComponentFixture<FormulaireSemestrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireSemestrielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireSemestrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
