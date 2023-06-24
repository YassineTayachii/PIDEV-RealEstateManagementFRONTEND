import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierbienImmobiliereComponent } from './modifierbien-immobiliere.component';

describe('ModifierbienImmobiliereComponent', () => {
  let component: ModifierbienImmobiliereComponent;
  let fixture: ComponentFixture<ModifierbienImmobiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierbienImmobiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierbienImmobiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
