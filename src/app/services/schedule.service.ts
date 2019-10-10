import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Schedule} from '../entities/schedules/schedule';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  /**
   * Récupère les données provenant de l'API sous la forme d'un observable de liste des schedules
   */
  recupererDonneesApiSchedule(): Observable<Array<Schedule>> {

    if (!localStorage.getItem('schedules')) {
      return this.http.get<Array<Schedule>>('https://devfest-nantes-2018-api.cleverapps.io/schedule')
          .pipe(map((value) => Object.values(value)))
          .pipe(tap((value) => localStorage.setItem('schedules', JSON.stringify(value))));
    } else {
      return JSON.parse(localStorage.getItem('schedules'));
    }

  }




}
