import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerAnnoncesComponent } from './supprimer-annonces.component';

describe('SupprimerAnnoncesComponent', () => {
  let component: SupprimerAnnoncesComponent;
  let fixture: ComponentFixture<SupprimerAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
