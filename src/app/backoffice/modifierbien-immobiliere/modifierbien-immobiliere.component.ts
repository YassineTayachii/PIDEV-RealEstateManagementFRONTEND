import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Bienimmo} from '../Bienimmo';
import {BienimmoService} from '../services/bienimmoServices/bienimmo.service';
// @ts-ignore
import { Response } from '../response';

@Component({
  selector: 'app-modifierbien-immobiliere',
  templateUrl: './modifierbien-immobiliere.component.html',
  styleUrls: ['./modifierbien-immobiliere.component.scss']
})
export class ModifierbienImmobiliereComponent implements OnInit {

  // tslint:disable-next-line:ban-types
 // bienimmo: Object = new Bienimmo();
 id!: any;
bienimmo!: any;
  showAlert = false;

  constructor(private route: ActivatedRoute, private s: BienimmoService,  private r: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.s.getBienimmoByID(this.id).subscribe(
      (data) => {
        console.log(data);
        this.bienimmo = data;
      });
  }
  updateBienimmo() {
    this.s.updateBienimmo(this.bienimmo).subscribe((response) => {
      this.showAlert = true;
      console.log(response);
      this.r.navigate(['admin/mesbienimmo']);
    });
  }
  closeAlert() {
    this.showAlert = false;
  }

}
