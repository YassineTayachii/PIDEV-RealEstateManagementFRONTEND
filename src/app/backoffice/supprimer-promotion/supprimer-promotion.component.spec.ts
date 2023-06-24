import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPromotionComponent } from './supprimer-promotion.component';

describe('SupprimerPromotionComponent', () => {
  let component: SupprimerPromotionComponent;
  let fixture: ComponentFixture<SupprimerPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
