import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonCreateComponent } from './person-create.component';
import { PersonService } from 'src/app/Services/person.service';
import { IPerson } from 'src/app/Models/IPerson';

describe('PersonCreateComponent', () => {
  let component: PersonCreateComponent;
  let fixture: ComponentFixture<PersonCreateComponent>;
  let mockPersonService: jasmine.SpyObj<PersonService>;

  beforeEach(async () => {
    mockPersonService = jasmine.createSpyObj(['addPerson']);
    await TestBed.configureTestingModule({
      declarations: [PersonCreateComponent],
      providers: [{ provide: PersonService, useValue: mockPersonService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addPerson when a new person is added', () => {
    const newPerson: IPerson = {
      id: 9,
      vorname: 'Tester',
      nachname: 'Testing',
      email: 'test@example.com',
    };

    component.newPerson = newPerson;
    component.save();

    expect(mockPersonService.addPerson).toHaveBeenCalledWith(newPerson);
  });

});
