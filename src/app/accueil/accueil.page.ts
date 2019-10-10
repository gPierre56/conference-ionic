import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../services/schedule.service';
import {Schedule} from '../entities/schedules/schedule';
import {Router} from '@angular/router';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.page.html',
    styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {


    constructor(private sessionService: ScheduleService, private router: Router) {
    }

    public listeConferences: Array<Schedule>;
    public dateDebut: Date;
    public dateFin: Date;

    naviguerSessions() {
        this.router.navigate(['/session']);
    }

    naviguerPresentateurs() {
        this.router.navigate(['/presentateur']);
    }


    ngOnInit(): void {

        if (!localStorage.getItem('schedules')) {
            this.sessionService.recupererDonneesApiSchedule().subscribe((conferences) => {
                this.listeConferences = conferences;
                localStorage.setItem('schedules', JSON.stringify(conferences));

            }, () => {
                console.log('Impossible de récupérer les données de l\'API');
            });
        } else {

            this.listeConferences = JSON.parse(localStorage.getItem('schedules'));
        }
        this.dateDebut = this.listeConferences[0].date;
        this.dateFin = this.listeConferences[this.listeConferences.length - 1].date;
    }


}
