import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonDetailComponent } from './person-detail.component';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonDetailComponent);
    component = fixture.componentInstance;

    component.person = { id: 1, vorname: 'Max', nachname: 'Mustermann', email: 'max@example.com' };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display details of a person', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Max Mustermann');
    expect(compiled.querySelector('p').textContent).toContain('max@example.com');
  });
});
