import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../services/annonceService/annonce.service';

import {Annonce} from '../Annonce';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-supprimer-annonces',
  templateUrl: './supprimer-annonces.component.html',
  styleUrls: ['./supprimer-annonces.component.scss']
})
export class SupprimerAnnoncesComponent implements OnInit {
/*
  annonce: Annonce = new Annonce();
  constructor(private a: AnnonceService) { }

  ngOnInit(): void {
  }
  delete(id: number){
    this.a.deleteAnnonce(id).subscribe(
      () => {
        console.log(id);
        alert('All Done !');
      }
    );
  }*/
  id!: any;
  constructor(private service: AnnonceService,
              private acr: ActivatedRoute,
              private r: Router) { }

  ngOnInit(): void {
    this.id = this.acr.snapshot.params.id;

    this.service.deleteAnnonce(this.id).subscribe(
      () => {
         alert('deleted');
         this.r.navigate(['admin/mesannonces']);
      },
      (error) => {
        alert('error');
      }
    );
  }

}
