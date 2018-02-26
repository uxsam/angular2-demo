import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map,tap } from 'rxjs/Operators'

export interface Character {
  id: number,
  name: string,
  side: string
} 

@Injectable()
export class BaseDataService {

  constructor(private http:HttpClient) {    

  }
  characterUrl = './api/characters.json';
  getConfig() : Observable<Character[]>  {
    return this.http.get<Character>(this.characterUrl).pipe(
      tap( // Log the result or error
        data => console.log( data),
        error => console.log(error)
      ),
      map((data: any) => {
        return data.data.map(entry=>entry as Character)
      })     
    );
  }
}