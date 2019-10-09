import {Component, OnInit} from '@angular/core';
import {SessionService} from '../services/session.service';
import {Schedule} from '../entities/schedule';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.page.html',
    styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {


    constructor(private sessionService: SessionService) {
    }

    public listeConferences: Array<Schedule>;
    public dateDebut: Date;
    public dateFin: Date;


    ngOnInit(): void {
        this.sessionService.recupererDonneesApiSchedule().subscribe((conferences) => {
            this.listeConferences = conferences;
            this.dateDebut = this.listeConferences[0].date;
            this.dateFin = this.listeConferences[this.listeConferences.length - 1].date;
            console.log(this.listeConferences);
        }, () => {
            console.log('Impossible de récupérer les données de l\'API');
        });
    }


}
