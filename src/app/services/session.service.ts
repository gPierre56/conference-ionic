import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Session} from '../entities/sessions/session';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    constructor(private http: HttpClient) {
    }

    /**
     * Récupère toutes les données concernant les sessions provenant de l'API
     */
    recupererDonneesSessionDeAPI(): Observable<Array<Session>> {
        if (!localStorage.getItem('sessions')) {

            return this.http.get<Array<Session>>('https://devfest-nantes-2018-api.cleverapps.io/sessions')
                .pipe(map((value) => Object.values(value)))
                .pipe(tap((value) => localStorage.setItem('sessions', JSON.stringify(value))));
        } else {
            return of(JSON.parse(localStorage.getItem('sessions')));
        }
    }

}
