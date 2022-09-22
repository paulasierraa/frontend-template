import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  /**
   * Este método permite obtener todos los personajes;
   */
  getCharacters():Observable<Character>
  {
    return this.http.get<Character>(`${environment.apiUrl}character`);
  }
}
