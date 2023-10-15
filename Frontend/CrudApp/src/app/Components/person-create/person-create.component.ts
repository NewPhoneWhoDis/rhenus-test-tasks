import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/Models/IPerson';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  newPerson!: IPerson;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  save() {
  }
}
