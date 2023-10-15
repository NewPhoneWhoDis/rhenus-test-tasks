import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/Models/IPerson';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  
  currentPerson!: IPerson;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  save() {
  }
}
