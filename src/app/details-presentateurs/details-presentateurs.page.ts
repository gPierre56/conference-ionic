import {Component, OnInit} from '@angular/core';
import {PresentateurService} from '../services/presentateur.service';
import {SessionService} from '../services/session.service';
import {ActivatedRoute} from '@angular/router';
import {Presentateur} from '../entities/presentateurs/presentateur';
import {Session} from '../entities/sessions/session';
import {Location} from '@angular/common';

import {Contact, ContactFindOptions, ContactName, Contacts} from '@ionic-native/contacts/ngx';

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
    contact: Contact;
    contactPresent: boolean;

    constructor(private presentateurService: PresentateurService, private sessionService: SessionService,
                private activatedRoute: ActivatedRoute, private location: Location, private contacts: Contacts) {
    }

    backClicked() {
        this.location.back();
    }

    ajouterContact(): void {

        if (!this.contactPresent) {
            this.contact.save().then((contact) => {
                console.log('Contact ajouté : ', contact);
            }, (error) => {
                console.log('Error : ', error);
            });
        } else {
            this.contact.remove().then((contact) => {
                console.log('Contact supprimé : ', contact);
            }, (error) => {
                console.log('Error : ', error);
            });
        }

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
            const nom = this.presentateur.name.split(' ');

            /**
             * On vérifie si le contact est présent dans le téléphone
             */
            this.contact = this.contacts.create();
            this.contact.name = new ContactName(null, nom[0], nom[1]);
            this.contact.id = 'CON'.concat(this.presentateur.id.toString());
            const options = new ContactFindOptions();
            options.filter = 'CON'.concat(this.presentateur.id.toString());
            options.multiple = true;
            this.contacts.find(['id'], options).then(() => {
                this.contactPresent = true;
            }, () => this.contactPresent = false);

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
