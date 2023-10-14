import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';
import { IPerson, persons } from '../Models/IPerson';

let people: IPerson[];

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonService);

    people = persons;
    service.people = [...people];
  });

  afterEach(() => {
    people = [];
    service.people = [];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a person', () => {
    const newPerson: IPerson = {id: 2, vorname: 'Anna', nachname: 'Schmidt', email: 'anna@example.com'};
    service.addPerson(newPerson);
    const retrievedPerson = service.getPerson(2);
    expect(retrievedPerson).toEqual(newPerson);
  });

  it('should delete a person', () => {
    service.deletePerson(1);
    const retrievedPerson = service.getPerson(1);
    expect(retrievedPerson).toBeUndefined();
  });

  it('should update a person', () => {
    const updatedPerson = {id: 1, vorname: 'Maxuell', nachname: 'Mustermann', email: 'maxi@example.com'};
    service.updatePerson(updatedPerson.id, updatedPerson);
    const retrievedPerson = service.getPerson(1);
    expect(retrievedPerson).toEqual(updatedPerson);
  });

  it('should get a person by id', () => {
    const retrievedPerson = service.getPerson(1);
    expect(retrievedPerson).toEqual(people[0]);
  });

});
