import { Component, OnInit } from '@angular/core';
import {Promotion} from '../promotion';
import {PromotionService} from '../services/promotionServices/promotion.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-supprimer-promotion',
  templateUrl: './supprimer-promotion.component.html',
  styleUrls: ['./supprimer-promotion.component.scss']
})
export class SupprimerPromotionComponent implements OnInit {

  id!: any;
  constructor(private service: PromotionService,
              private acr: ActivatedRoute,
              private r: Router) { }

  ngOnInit(): void {
    this.id = this.acr.snapshot.params.id;

    this.service.deletePromotion(this.id).subscribe(
      () => {
        alert('deleted');
        this.r.navigate(['admin/mespromotions']);
      },
      (error) => {
        alert('error');
      }
    );
  }

}
