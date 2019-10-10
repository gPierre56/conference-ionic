import { Component, OnInit } from '@angular/core';
import {PresentateurService} from '../services/presentateur.service';
import {Router} from '@angular/router';
import {Presentateur} from '../entities/presentateurs/presentateur';

@Component({
  selector: 'app-presentateur',
  templateUrl: './presentateur.page.html',
  styleUrls: ['./presentateur.page.scss'],
})
export class PresentateurPage implements OnInit {

  listePresentateurs: Array<Presentateur>;

  constructor(private presentateurService: PresentateurService, private router: Router) { }

  naviguerDetailsPresentateurs(idClick: string): void {
    this.router.navigate(['details-presentateur', idClick]);
  }

  ngOnInit() {

    /**
     * On récupère la liste des présentateurs depuis la classe de service associée
     */
    this.presentateurService.recupererDonneesPresentateur().subscribe((presentateurs) => {
      this.listePresentateurs = presentateurs;
    });

  }

}
