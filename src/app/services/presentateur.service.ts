import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Presentateur} from '../entities/presentateurs/presentateur';

@Injectable({
  providedIn: 'root'
})
export class PresentateurService {

  constructor(private http: HttpClient) { }

  /**
   * Récupération de toutes les données sur les présentateurs
   */
  recupererDonneesPresentateur(): Observable<Array<Presentateur>> {
    return this.http.get<Array<Presentateur>>('https://devfest-nantes-2018-api.cleverapps.io/speakers');
  }
}
