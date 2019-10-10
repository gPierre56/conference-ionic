import {Component, OnInit} from '@angular/core';
import {PresentateurService} from '../services/presentateur.service';
import {SessionService} from '../services/session.service';
import {ActivatedRoute} from '@angular/router';
import {Presentateur} from '../entities/presentateurs/presentateur';
import {Session} from '../entities/sessions/session';

@Component({
    selector: 'app-details-presentateurs',
    templateUrl: './details-presentateurs.page.html',
    styleUrls: ['./details-presentateurs.page.scss'],
})
export class DetailsPresentateursPage implements OnInit {

    presentateur: Presentateur;
    sessions: Array<Session>;
    listePresentateurs: Array<Presentateur>;
    listeSessions: Array<Session> = [];

    constructor(private presentateurService: PresentateurService, private sessionService: SessionService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

        /**
         * On récupère la liste des présentateurs depuis la classe de service
         */
        this.presentateurService.recupererDonneesPresentateur().subscribe((presentateurs) => {
            this.listePresentateurs = presentateurs;
        });

        /**
         * On récupère la session dont l'id est renseignée dans la paramMap
         */
        this.activatedRoute.paramMap.subscribe((param) => {
            this.presentateur = this.listePresentateurs
                .filter((presentateurTri => presentateurTri.id.toString() === param.get('id')))[0];
        });

        /**
         * On récupère la liste de toutes les sessions
         */
        this.sessionService.recupererDonneesSessionDeAPI().subscribe((sessions) => {
            this.listeSessions = sessions;
        });

        /**
         * On trie la liste des sessions selon l'id du présentateur
         */
        this.sessions = this.listeSessions.filter((sessionTri) => {
          return (sessionTri.speakers && sessionTri.speakers.toString() === this.presentateur.id.toString());
            }
        );

    }

}
