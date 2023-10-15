import { TestBed } from '@angular/core/testing';
import { PersonService } from './person.service';
import { IPerson, persons } from '../Models/IPerson';
import { BehaviorSubject } from 'rxjs';

describe('PersonService', () => {
  let service: PersonService;
  let people: IPerson[];
  let peopleSubject: BehaviorSubject<IPerson[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonService);

    people = persons;
    peopleSubject = new BehaviorSubject<IPerson[]>(people);
    service['peopleSubject'] = peopleSubject;
  });

  afterEach(() => {
    people = [];
    peopleSubject.complete();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a person', () => {
    const newPerson: IPerson = { id: 2, vorname: 'Anna', nachname: 'Schmidt', email: 'anna@example.com' };
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
    const updatedPerson = { id: 1, vorname: 'Maxuell', nachname: 'Mustermann', email: 'maxi@example.com' };
    service.updatePerson(updatedPerson.id, updatedPerson);
    const retrievedPerson = service.getPerson(1);
    expect(retrievedPerson).toEqual(updatedPerson);
  });

  it('should get a person by id', () => {
    const retrievedPerson = service.getPerson(1);
    expect(retrievedPerson).toEqual(people[0]);
  });

  it('should get all people', (done) => {
    service.people$.subscribe((allPeople) => {
      expect(allPeople).toEqual(people);
      done();
    });
  });
});
