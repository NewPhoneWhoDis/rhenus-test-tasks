import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './Components/person-list/person-list.component';
import { PersonDetailComponent } from './Components/person-detail/person-detail.component';
import { PersonEditComponent } from './Components/person-edit/person-edit.component';
import { PersonCreateComponent } from './Components/person-create/person-create.component';
import { FormsModule } from '@angular/forms';
import { PersonDeleteComponent } from './Components/person-delete/person-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonEditComponent,
    PersonCreateComponent,
    PersonDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
