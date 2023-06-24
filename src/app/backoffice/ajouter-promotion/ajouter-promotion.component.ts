import { Component, OnInit } from '@angular/core';
import {Promotion} from '../promotion';
import {PromotionService} from '../services/promotionServices/promotion.service';
import {Router} from '@angular/router';
import {AnnonceService} from '../services/annonceService/annonce.service';
@Component({
  selector: 'app-ajouter-promotion',
  templateUrl: './ajouter-promotion.component.html',
  styleUrls: ['./ajouter-promotion.component.scss']
})
export class AjouterPromotionComponent implements OnInit {
  annonces!: any;

  promorion: Promotion = new Promotion();
  constructor(private a: PromotionService, private aa: AnnonceService, private r: Router) { }
  ngOnInit(): void {
      this.aa.getAnnonces().subscribe(
        (data) => {
          console.log(data);
          this.annonces = data;
          console.log(data);
        }
      );
  }
  save(){
    this.a.addPromotion(this.promorion).subscribe(
      () => {
        console.log(this.promorion);
        alert('All Done !');
        this.r.navigate(['admin/mesannonces']);
      }
    );
  }

}
