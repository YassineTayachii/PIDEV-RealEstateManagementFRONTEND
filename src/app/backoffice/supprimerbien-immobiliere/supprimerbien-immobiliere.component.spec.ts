import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerbienImmobiliereComponent } from './supprimerbien-immobiliere.component';

describe('SupprimerbienImmobiliereComponent', () => {
  let component: SupprimerbienImmobiliereComponent;
  let fixture: ComponentFixture<SupprimerbienImmobiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerbienImmobiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerbienImmobiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
