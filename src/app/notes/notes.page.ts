import {Component, OnInit} from '@angular/core';
import {Session} from '../entities/sessions/session';
import {SessionService} from '../services/session.service';
import {ActivatedRoute} from '@angular/router';
import {CameraResultType, Plugins} from '@capacitor/core';
import {InfosSession} from '../entities/sessions/infosSession';
import {Location} from '@angular/common';

const {Camera} = Plugins;

@Component({
    selector: 'app-notes',
    templateUrl: './notes.page.html',
    styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

    listeSessions: Array<Session>;
    session: Session;


    constructor(private sessionService: SessionService, private activatedRoute: ActivatedRoute, private location: Location) {
    }

    goback() {
        this.location.back();
    }

    async takePhoto() {
        const storage = localStorage.getItem('notes_session_'.concat(this.session.id.toString()));
        const photos: Array<string> = [];


        const photo = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Base64
        }).then((resultat) => {
            this.session.infosSession.listePhotos.push(resultat.base64String);
            if (storage === null) {
                photos.push(resultat.base64String);
                localStorage.setItem('photos_session_'.concat(this.session.id.toString()), JSON.stringify(photos));
            } else {
                const stored: Array<string> = JSON.parse(storage);
                stored.push(resultat.base64String);
                localStorage.setItem('photos_session_'.concat(this.session.id.toString()), JSON.stringify(stored));
            }

        });


    }

    enregistrerNote() {

        const storage = localStorage.getItem('notes_session_'.concat(this.session.id.toString()));
        const textArea = (document.getElementById('corps_note') as HTMLInputElement);
        const corps = textArea.value;
        const notes: Array<string> = [];

        this.session.infosSession.listeNotes.push(corps);

        if (storage === null) {
            notes.push(corps);
            localStorage.setItem('notes_session_'.concat(this.session.id.toString()), JSON.stringify(notes));
        } else {
            const stored: Array<string> = JSON.parse(storage);
            stored.push(corps);
            localStorage.setItem('notes_session_'.concat(this.session.id.toString()), JSON.stringify(stored));
        }

    }


    ngOnInit() {

        /**
         * On récupère la liste de toutes les sessions
         */
        this.sessionService.recupererDonneesSessionDeAPI().subscribe((sessions) => {
            this.listeSessions = sessions;
        });

        /**
         * On trie la liste des sessions de façon à avoir la session dont l'id figure dans les paramètres de l'url
         */
        this.activatedRoute.paramMap.subscribe((params) => {
            this.session = this.listeSessions.filter((session) => session.id.toString() === params.get('id').toString())[0];
            if (this.session.infosSession === null || this.session.infosSession === undefined) {
                this.session.infosSession = new InfosSession();
                this.session.infosSession.listeNotes = [];
                this.session.infosSession.listePhotos = [];
            }

            if (localStorage.getItem('notes_session_'.concat(this.session.id.toString()))) {
                const cacheNotes: Array<string> = JSON.parse(localStorage.getItem('notes_session_'.concat(this.session.id.toString())));
                cacheNotes.forEach((note) => this.session.infosSession.listeNotes.push(note));
            }

            if (localStorage.getItem('photos_session_'.concat(this.session.id.toString()))) {
                const cachePhotos: Array<string> = JSON.parse(localStorage.getItem('photos_session_'.concat(this.session.id.toString())));
                cachePhotos.forEach((photo) => this.session.infosSession.listePhotos.push(photo));
            }


        });


    }

}
