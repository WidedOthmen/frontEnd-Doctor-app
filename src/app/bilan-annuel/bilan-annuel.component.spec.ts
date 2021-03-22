import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanAnnuelComponent } from './bilan-annuel.component';

describe('BilanAnnuelComponent', () => {
  let component: BilanAnnuelComponent;
  let fixture: ComponentFixture<BilanAnnuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanAnnuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanAnnuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
