import { PersonService } from './../../Services/person.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from 'src/app/Models/IPerson';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  @Output() submitted = new EventEmitter<void>();
  @Input() currentPerson!: IPerson;
  
  constructor(private personService: PersonService) { }
  
  ngOnInit(): void {
  }
  
  save() {
    this.personService.updatePerson(this.currentPerson.id, this.currentPerson);
    this.submitted.emit()
  }
}
