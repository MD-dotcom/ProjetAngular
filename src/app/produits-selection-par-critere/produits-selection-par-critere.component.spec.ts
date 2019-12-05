import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsSelectionParCritereComponent } from './produits-selection-par-critere.component';

describe('ProduitsSelectionParCritereComponent', () => {
  let component: ProduitsSelectionParCritereComponent;
  let fixture: ComponentFixture<ProduitsSelectionParCritereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsSelectionParCritereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsSelectionParCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
