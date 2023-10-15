import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPerson } from 'src/app/Models/IPerson';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  newPerson: IPerson = {
    id: this.getRandomId(),
    vorname: '',
    nachname: '',
    email: ''
  };

  @Output() formSubmitted = new EventEmitter<void>();
  
  constructor(private personService: PersonService) { }
  
  ngOnInit(): void {
  }
  
  save() {
    this.personService.addPerson(this.newPerson);
    this.formSubmitted.emit();
  }

  getRandomId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
