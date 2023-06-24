import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllTemplateAdminComponent} from './backoffice/all-template-admin/all-template-admin.component';
import {BodyAdminComponent} from './backoffice/body-admin/body-admin.component';
import {AllTemplateUserComponent} from './frontoffice/all-template-user/all-template-user.component';
import {BodyUserComponent} from './frontoffice/body-user/body-user.component';

import { AfficherMesAnnoncesComponent } from './backoffice/afficher-mes-annonces/afficher-mes-annonces.component';
import { AjouterAnnoncesComponent } from './backoffice/ajouter-annonces/ajouter-annonces.component';
import { ModifierAnnoncesComponent } from './backoffice/modifier-annonces/modifier-annonces.component';
import { SupprimerAnnoncesComponent } from './backoffice/supprimer-annonces/supprimer-annonces.component';
import {AfficherbienImmobiliereComponent} from './backoffice/afficherbien-immobiliere/afficherbien-immobiliere.component';
import {AjouterbienImmobiliereComponent} from './backoffice/ajouterbien-immobiliere/ajouterbien-immobiliere.component';
import {ModifierbienImmobiliereComponent} from './backoffice/modifierbien-immobiliere/modifierbien-immobiliere.component';
import {SupprimerbienImmobiliereComponent} from './backoffice/supprimerbien-immobiliere/supprimerbien-immobiliere.component';
import {AfficherPromotionComponent} from './backoffice/afficher-promotion/afficher-promotion.component';
import {SupprimerPromotionComponent} from './backoffice/supprimer-promotion/supprimer-promotion.component';
import {AjouterPromotionComponent} from './backoffice/ajouter-promotion/ajouter-promotion.component';




const routes: Routes = [
  {
    path: 'admin', component: AllTemplateAdminComponent,
    children: [
      {
        path: 'home', component: BodyAdminComponent,
      },
      {path: 'mesannonces', component: AfficherMesAnnoncesComponent },
      {path: 'ajouterannonce', component: AjouterAnnoncesComponent },
      {path: 'modifierannonce/:id', component: ModifierAnnoncesComponent },
      {path: 'supprimerannonce/:id', component: SupprimerAnnoncesComponent },
      {path: 'afficherannonce/:id', component: AfficherMesAnnoncesComponent },

      {path: 'mesbienimmo', component: AfficherbienImmobiliereComponent },
      {path: 'ajouterbienimmo', component: AjouterbienImmobiliereComponent },
      {path: 'modifierbienimmo/:id', component: ModifierbienImmobiliereComponent },
      {path: 'supprimerbienimmo/:id', component: SupprimerbienImmobiliereComponent },

      {path: 'mespromotions', component: AfficherPromotionComponent },
      {path: 'ajouterpromotion', component: AjouterPromotionComponent },
      {path: 'supprimerpromotion/:id', component: SupprimerPromotionComponent }
    ]
  },
  {
    path: '', component: AllTemplateUserComponent,
    children: [
      {
        path: '', component: BodyUserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
