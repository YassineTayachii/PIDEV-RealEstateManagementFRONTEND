import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMesAnnoncesComponent } from './afficher-mes-annonces.component';

describe('AfficherMesAnnoncesComponent', () => {
  let component: AfficherMesAnnoncesComponent;
  let fixture: ComponentFixture<AfficherMesAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherMesAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherMesAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
