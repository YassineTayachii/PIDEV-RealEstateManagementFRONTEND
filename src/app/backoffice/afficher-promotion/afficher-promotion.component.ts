import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../services/promotionServices/promotion.service';

@Component({
  selector: 'app-afficher-promotion',
  templateUrl: './afficher-promotion.component.html',
  styleUrls: ['./afficher-promotion.component.scss']
})
export class AfficherPromotionComponent implements OnInit {

  promorion!: any;
  constructor(private s: PromotionService) { }

  ngOnInit(): void {
    this.s.getPromotions().subscribe(
      (data) => {
        console.log(data);
        this.promorion = data;
        console.log(data);
      }
    );
  }

}
