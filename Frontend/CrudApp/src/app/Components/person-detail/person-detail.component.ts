import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from 'src/app/Models/IPerson';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Output() detailClosed = new EventEmitter<void>();
  @Output() personDeleted = new EventEmitter<void>();
  @Input() person!: IPerson;
  editMode = false;
  showDelete = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  handlePersonDeleted() {
    this.showDelete = false; 
    this.personDeleted.emit();
  }
}
