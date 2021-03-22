import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauTransfusionnelComponent } from './tableau-transfusionnel.component';

describe('TableauTransfusionnelComponent', () => {
  let component: TableauTransfusionnelComponent;
  let fixture: ComponentFixture<TableauTransfusionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauTransfusionnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauTransfusionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
