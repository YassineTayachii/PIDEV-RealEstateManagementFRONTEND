import { Component, OnInit } from '@angular/core';
import {Bienimmo} from '../Bienimmo';
import {BienimmoService} from '../services/bienimmoServices/bienimmo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouterbien-immobiliere',
  templateUrl: './ajouterbien-immobiliere.component.html',
  styleUrls: ['./ajouterbien-immobiliere.component.scss']
})
export class AjouterbienImmobiliereComponent implements OnInit {

  bienimmo: Bienimmo = new Bienimmo();
  constructor(private a: BienimmoService, private r: Router) { }
  ngOnInit(): void {
  }
  save(){
    this.a.addBienimmo(this.bienimmo).subscribe(
      () => {
        console.log(this.bienimmo);
        alert('All Done !');
        this.r.navigate(['admin/mesbienimmo']);
      }
    );
  }

}
