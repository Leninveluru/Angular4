import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ValidationService } from './services/validation.service';
import { FormControlMessagesComponent } from './form-control-messages/form-control-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailsComponent,
    FormControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ValidationService
  ],
  exports: [
    FormControlMessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
