import {Component, OnInit} from '@angular/core';
import {Session} from '../entities/sessions/session';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionService} from '../services/session.service';
import {PresentateurService} from '../services/presentateur.service';
import {Presentateur} from '../entities/presentateurs/presentateur';
import {Location} from '@angular/common';

@Component({
    selector: 'app-details-session',
    templateUrl: './details-session.page.html',
    styleUrls: ['./details-session.page.scss'],
})
export class DetailsSessionPage implements OnInit {

    session: Session;
    listeSessions: Array<Session>;
    listePresentateurs: Array<Presentateur>;
    presentateursSession: Array<Presentateur> = [];

    constructor(private activatedRoute: ActivatedRoute, private sessionService: SessionService,
                private presentateurService: PresentateurService, private location: Location,
                private router: Router) {
    }

    /**
     * Renvoie vers la page précédente
     */
    backClicked() {
        this.location.back();
    }

    /**
     * Redirige vers la page d'ajout d'une note
     * @param idClick Id de la session pour laquelle ajouter une note
     */
    ajouterNotes(idClick) {
        this.router.navigate(['/notes', idClick]);
    }



    ngOnInit() {
        /**
         * On récupère la liste des sessions depuis la classe de service
         */
        this.sessionService.recupererDonneesSessionDeAPI().subscribe((sessions) => {
            this.listeSessions = sessions;
        });

        /**
         * On trie selon l'id choisie dans la page précédente
         */
        this.activatedRoute.paramMap.subscribe((param) => {
            this.session = this.listeSessions.filter(sessionTri => sessionTri.id === parseInt(param.get('id'), 10))[0];
        });

        /**
         * On récupère la liste des présentateurs depuis la classe de service associée
         */
        this.presentateurService.recupererDonneesPresentateur().subscribe((presentateurs) => {
            this.listePresentateurs = presentateurs;
        });

        /**
         * On trie les présentateurs selon si leur id correspond à celle de la session
         */
        this.listePresentateurs.filter((presentateursTri) => {
            const sessionSpeakers = [];
            this.session.speakers.forEach((speaker => sessionSpeakers.push(speaker.toString())));
            return sessionSpeakers.includes(presentateursTri.id.toString());

        }).forEach((element) => {
            this.presentateursSession.push(element);
        });


    }

}
