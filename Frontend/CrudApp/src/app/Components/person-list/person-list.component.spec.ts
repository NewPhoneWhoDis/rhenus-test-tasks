import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonListComponent } from './person-list.component';
import { PersonService } from 'src/app/Services/person.service';
import { of } from 'rxjs';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;
  let mockPersonService: jasmine.SpyObj<PersonService>;

  beforeEach(async () => {
    mockPersonService = jasmine.createSpyObj(['']);
    await TestBed.configureTestingModule({
      declarations: [PersonListComponent],
      providers: [{ provide: PersonService, useValue: mockPersonService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;

    const mockPeople = [
      { id: 1, vorname: 'Max', nachname: 'Mustermann', email: 'max@example.com' },
    ];
    const mockObservable = of(mockPeople);

    mockPersonService.people$ = mockObservable;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of persons', () => {
    const compiled = fixture.debugElement.nativeElement;

    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBeGreaterThan(0);

    expect(listItems[0].textContent).toContain('Max Mustermann');
  });
});
