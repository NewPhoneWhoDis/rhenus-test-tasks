import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PersonDeleteComponent } from './person-delete.component';
import { PersonService } from 'src/app/Services/person.service';

describe('PersonDeleteComponent', () => {
  let component: PersonDeleteComponent;
  let fixture: ComponentFixture<PersonDeleteComponent>;
  let mockPersonService: PersonService;

  beforeEach(async () => {
    mockPersonService = jasmine.createSpyObj(['deletePerson']);
    await TestBed.configureTestingModule({
      declarations: [ PersonDeleteComponent ],
      providers: [
        { provide: PersonService, useValue: mockPersonService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deletePerson when deletePerson method is called', () => {
    component.personId = 1; 
    component.deletePerson();
    expect(mockPersonService.deletePerson).toHaveBeenCalledWith(1);
  });

  it('should emit personDeleted when deletePerson method is called', () => {
    spyOn(component.personDeleted, 'emit'); 
    component.personId = 1; 
    component.deletePerson();
    expect(component.personDeleted.emit).toHaveBeenCalled();
  });

  it('should call deletePerson when confirmDelete method is called and user confirms', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(true); 
    component.personId = 1; 
    component.confirmDelete(); 
    expect(mockPersonService.deletePerson).toHaveBeenCalledWith(1); 
  }));

  it('should not call deletePerson when confirmDelete method is called and user cancels', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(false); 
    component.personId = 1; 
    component.confirmDelete(); 
    tick(); 
    expect(mockPersonService.deletePerson).not.toHaveBeenCalled(); 
  }));
});
