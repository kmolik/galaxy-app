import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pilots} from '../models/pilots';

@Injectable({
  providedIn: 'root'
})
export class PilotsService {

  private url = 'http://localhost:8080/api/squadrons/all';

  constructor(
    private http: HttpClient
  ) { }

  getPilots(): Observable<Pilots[]> {
    return this.http.get<Pilots[]>(this.url);
  }
}
