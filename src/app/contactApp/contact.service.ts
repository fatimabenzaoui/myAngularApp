import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from './../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private personnes: Personne[];
  link = 'http://localhost:3000/api/contacts';
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'pikachu.png', 'tom', 'dupuis', 'pikachu', 'tomdupuis@gmail.com', '0665453521'),
      new Personne(2, 'sabelette.png', 'charlotte', 'blanc', 'sabelette', 'charlotteblanc@gmail.com', '0677899098')
    ];
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(this.link + `/${id}`);
  }
  addContact(personne: Personne): Observable<any> {
    return this.http.post(this.link, personne);
  }
  deleteContact(id: number) {
    return this.http.delete(this.link + `/${id}`);
  }
  updateContact(personne: Personne) {
    return this.http.put(this.link, personne);
  }
}

// OLD VERSION (FRONT)
// getPersonnes(): Personne[] {
//   return this.personnes;
// }
// getPersonneById(id: number): Personne {
//   const personne = this.personnes.find((personne) => {
//     return personne.id == id;
//   });
//   return personne;
// }
// addContact(personne: Personne): void {
//   personne.id = this.personnes[this.personnes.length - 1].id + 1;
//   this.personnes.push(personne);
// }