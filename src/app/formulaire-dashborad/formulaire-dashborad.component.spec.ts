import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDashboradComponent } from './formulaire-dashborad.component';

describe('FormulaireDashboradComponent', () => {
  let component: FormulaireDashboradComponent;
  let fixture: ComponentFixture<FormulaireDashboradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDashboradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
