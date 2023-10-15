import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudApp';

  view: 'list' | 'detail' | 'edit' | 'create' | null = null;

  showDetail() {
    this.view = 'detail';
  }

  showAdd() {
    this.view = 'create';
  }

  hideForm() {
    this.view = null;
  }
}
