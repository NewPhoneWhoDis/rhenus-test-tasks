import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditComponent } from './person-edit.component';
import { PersonService } from 'src/app/Services/person.service';

describe('PersonEditComponent', () => {
  let component: PersonEditComponent;
  let fixture: ComponentFixture<PersonEditComponent>;
  let mockPersonService: PersonService;

  beforeEach(async () => {
    mockPersonService = jasmine.createSpyObj(['updatePerson']);
    await TestBed.configureTestingModule({
      declarations: [ PersonEditComponent ],
      providers: [
        { provide: PersonService, useValue: mockPersonService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updatePerson when an existing person is edited', () => {
      component.currentPerson = {id: 1, vorname: 'Max', nachname: 'Mustermann', email: 'max@example.com'};
      component.save();
      expect(mockPersonService.updatePerson).toHaveBeenCalled();
  });
});
