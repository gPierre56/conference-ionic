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

    public listeSessions: Array<Session> = [];

    naviguerDetailsSession(idClick: number): void {
        this.router.navigate(['details-session'], {
            queryParams: {
                id: idClick
            }
        });
    }

    ngOnInit() {
        if (!localStorage.getItem('sessions')) {
            this.sessionService.recupererDonneesSessionDeAPI().subscribe((sessions) => {

                this.listeSessions = Object.values(sessions);
                localStorage.setItem('sessions', JSON.stringify(Object.values(sessions)));
                console.log('réseau');
            });
        } else {
            this.listeSessions = JSON.parse(localStorage.getItem('sessions'));
            console.log('cache');
        }
    }

}
