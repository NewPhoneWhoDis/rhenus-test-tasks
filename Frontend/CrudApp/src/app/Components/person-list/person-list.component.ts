  import { PersonService } from './../../Services/person.service';
  import { IPerson, persons } from './../../Models/IPerson';
  import { Component, OnInit, OnDestroy } from '@angular/core';
  import { Subscription } from 'rxjs';

  @Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.css']
  })
  export class PersonListComponent implements OnInit, OnDestroy {

    people: IPerson[] = [];
    private sub!: Subscription;
    selectedPerson?: IPerson;

    constructor(private personService: PersonService) { }

    ngOnInit(): void {
      this.sub = this.personService.people$.subscribe(people => {
        this.people = people;
        console.log(this.people);
      });
    }

    ngOnDestroy(): void {
      if (this.sub) {
        this.sub.unsubscribe();
      }
    }

    selectPerson(person: IPerson) {
      this.selectedPerson = person;
    }

    onPersonDeleted() {
      this.selectedPerson = undefined;
    }

  }
