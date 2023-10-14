export interface IPerson {
  id: number,
  vorname: string,
  nachname: string,
  email: string
}

export const persons: IPerson[] = [
  { id: 1, vorname: 'Max', nachname: 'Mustermann', email: 'max@example.com' },
];  