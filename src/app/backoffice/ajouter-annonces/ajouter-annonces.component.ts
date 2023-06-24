import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../services/annonceService/annonce.service';
import {BienimmoService} from '../services/bienimmoServices/bienimmo.service';

import {Annonce} from '../Annonce';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ajouter-annonces',
  templateUrl: './ajouter-annonces.component.html',
  styleUrls: ['./ajouter-annonces.component.scss']
})
export class AjouterAnnoncesComponent implements OnInit {
  annonce: Annonce = new Annonce();
  bienimmos!: any;
  constructor(private a: AnnonceService, private b: BienimmoService,  private r: Router) { }
  ngOnInit(): void {
    this.b.getBienimmos().subscribe(
      (data) => {
        console.log(data);
        this.bienimmos = data;

      }
    );

  }
  save(){
    this.a.addAnnonce(this.annonce).subscribe(
      () => {
        console.log(this.annonce);
        alert('All Done !');
        this.r.navigate(['admin/mesannonces']);
      }
    );
  }

}
