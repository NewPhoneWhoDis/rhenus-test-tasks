import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {

  @Input() personId!: number;
  @Output() personDeleted = new EventEmitter<void>();

  constructor(private personService: PersonService) { }

  deletePerson() {
    this.personService.deletePerson(this.personId);
    this.personDeleted.emit();
  }

  confirmDelete(): void {
    if (confirm('Are you sure you want to delete this person?')) {
      this.deletePerson();
    }
  }

  ngOnInit(): void {
  }

}
