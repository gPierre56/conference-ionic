import {Component, OnInit} from '@angular/core';
import {Session} from '../entities/sessions/session';
import {SessionService} from '../services/session.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-session',
    templateUrl: './session.page.html',
    styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

    constructor(private sessionService: SessionService, private router: Router) {
    }

    /**
     * La liste de toutes les sessions récupérée depuis le cache ou le réseau
     */
    public listeSessions: Array<Session> = [];

    /**
     * Redirige vers la page d'affichage des détails de la session demandée
     * @param idClick L'id de la session pour laquelle sera affichée les détails
     */
    naviguerDetailsSession(idClick: number): void {
        this.router.navigate(['details-session', idClick]);
    }

    ngOnInit() {
        /**
         * On initialise la liste des sessions ici via la classe service.
         */
        this.sessionService.recupererDonneesSessionDeAPI().subscribe((sessions) => {
            this.listeSessions = sessions;
        }, (error => {
            console.log('Problème lors de la récupération des données des sessions.', error);
        }));
    }

}
