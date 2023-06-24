import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbienImmobiliereComponent } from './ajouterbien-immobiliere.component';

describe('AjouterbienImmobiliereComponent', () => {
  let component: AjouterbienImmobiliereComponent;
  let fixture: ComponentFixture<AjouterbienImmobiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterbienImmobiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbienImmobiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
