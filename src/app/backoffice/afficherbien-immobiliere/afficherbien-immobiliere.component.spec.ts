import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherbienImmobiliereComponent } from './afficherbien-immobiliere.component';

describe('AfficherbienImmobiliereComponent', () => {
  let component: AfficherbienImmobiliereComponent;
  let fixture: ComponentFixture<AfficherbienImmobiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherbienImmobiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherbienImmobiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
