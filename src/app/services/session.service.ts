import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Schedule} from '../entities/schedule';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  /**
   * Récupère les données provenant de l'API sous la forme d'un observable de liste des schedules
   */
  recupererDonneesApiSchedule(): Observable<Array<Schedule>> {
    return this.http.get<Array<Schedule>>('https://devfest-nantes-2018-api.cleverapps.io/schedule');
  }




}
