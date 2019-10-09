import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Session} from '../entities/sessions/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  /**
   * Récupère toutes les données concernant les sessions provenant de l'API
   */
  recupererDonneesSessionDeAPI(): Observable<Array<Session>> {
    return this.http.get<Array<Session>>('https://devfest-nantes-2018-api.cleverapps.io/sessions');
  }

}
