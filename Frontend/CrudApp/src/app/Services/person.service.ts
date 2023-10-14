import { persons } from './../Models/IPerson';
import { Injectable } from '@angular/core';
import { IPerson } from '../Models/IPerson';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  people: IPerson[] = persons

  constructor() { }

  addPerson(person: IPerson) {
    this.people.push(person);
  }

  updatePerson(id: number, person: IPerson) {
    const index = this.people.findIndex(p => p.id === id);
    if (index !== -1) {
      this.people[index] = person;
    }
  }
  
  getPerson(id: number) {
    return this.people.find(p => p.id === id);
  }

  deletePerson(id: number) {
    const index = this.people.findIndex(p => p.id === id);
    if (index !== -1) {
      this.people.splice(index, 1);
    }
  }

  getAllPeople(): IPerson[] {
    return this.people;
  }
}
