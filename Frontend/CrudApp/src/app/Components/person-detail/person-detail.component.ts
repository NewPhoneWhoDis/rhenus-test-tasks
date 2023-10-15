import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from 'src/app/Models/IPerson';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() person!: IPerson;

  constructor() { }

  ngOnInit(): void {
  }

}
