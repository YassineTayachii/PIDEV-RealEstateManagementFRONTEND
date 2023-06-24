import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnonceService} from '../services/annonceService/annonce.service';
import {Annonce} from '../Annonce';
// @ts-ignore
import { Response } from '../response';

@Component({
  selector: 'app-modifier-annonces',
  templateUrl: './modifier-annonces.component.html',
  styleUrls: ['./modifier-annonces.component.scss']
})
export class ModifierAnnoncesComponent implements OnInit {


  id!: any;
  annonce!: any;
  showAlert = false;

  constructor(private route: ActivatedRoute, private s: AnnonceService,  private r: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.s.getAnnonceByID(this.id).subscribe(
      (data) => {
        console.log(data);
        this.annonce = data;
    });
  }
  updateAnnonce() {

    this.s.updateAnnonce(this.annonce).subscribe((response) => {
      this.showAlert = true;
      console.log(response);
      this.r.navigate(['admin/mesannonces']);
    });
  }
  closeAlert() {
    this.showAlert = false;
  }



}
