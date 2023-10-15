  import { persons } from './../Models/IPerson';
  import { Injectable } from '@angular/core';
  import { IPerson } from '../Models/IPerson';
  import { BehaviorSubject } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class PersonService {

    private peopleSubject: BehaviorSubject<IPerson[]> = new BehaviorSubject<IPerson[]>(persons);
    people$ = this.peopleSubject.asObservable();

    constructor() { }

    addPerson(person: IPerson) {
      const currentPeople = this.peopleSubject.getValue();
      this.peopleSubject.next([...currentPeople, person]);
    }
    
    getPerson(id: number) {
      const currentPeople = this.peopleSubject.getValue();
      return currentPeople.find(p => p.id === id);
    }

    updatePerson(id: number, person: IPerson) {
      const currentPeople = this.peopleSubject.getValue();
      const index = currentPeople.findIndex(p => p.id === id);
      if (index !== -1) {
      const updatedPeople = [...currentPeople];
      updatedPeople[index] = person;
      this.peopleSubject.next(updatedPeople);
      }
    }
    
    deletePerson(id: number) {
      const currentPeople = this.peopleSubject.getValue();
      const index = currentPeople.findIndex(p => p.id === id);
      if (index !== -1) {
      const updatedPeople = [...currentPeople];
      updatedPeople.splice(index, 1);
      this.peopleSubject.next(updatedPeople);
      }
    }

    getAllPeople(): IPerson[] {
      return this.peopleSubject.getValue();
    }
  }
