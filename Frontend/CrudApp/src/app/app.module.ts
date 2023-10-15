import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './Components/person-list/person-list.component';
import { PersonDetailComponent } from './Components/person-detail/person-detail.component';
import { PersonEditComponent } from './Components/person-edit/person-edit.component';
import { PersonCreateComponent } from './Components/person-create/person-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonEditComponent,
    PersonCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
