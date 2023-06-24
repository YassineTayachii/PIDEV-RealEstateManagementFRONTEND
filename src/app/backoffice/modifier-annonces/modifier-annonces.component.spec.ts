import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAnnoncesComponent } from './modifier-annonces.component';

describe('ModifierAnnoncesComponent', () => {
  let component: ModifierAnnoncesComponent;
  let fixture: ComponentFixture<ModifierAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
