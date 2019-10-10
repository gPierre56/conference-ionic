import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Presentateur} from '../entities/presentateurs/presentateur';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PresentateurService {

    constructor(private http: HttpClient) {
    }

    /**
     * Récupération de toutes les données sur les présentateurs
     */
    recupererDonneesPresentateur(): Observable<Array<Presentateur>> {

        if (!localStorage.getItem('presentateurs')) {

            return this.http.get<Array<Presentateur>>('https://devfest-nantes-2018-api.cleverapps.io/speakers')
                .pipe(map((value) => Object.values(value)))
                .pipe(tap((value) => localStorage.setItem('presentateurs', JSON.stringify(value))));
        } else {
            return of (JSON.parse(localStorage.getItem('presentateurs')));
        }
    }
}
