import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LinkService } from './services/link.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AddstudComponent } from './components/studentdata/addstud/addstud.component';
import { EditstudComponent } from './components/studentdata/editstud/editstud.component';
import { StudentdataService } from './services/studentdata.service';
import { AuthGuard } from './gaurd/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ListComponent,
    RegisterComponent,
    AdminComponent,
    AddstudComponent,
    EditstudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,LinkService, StudentdataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
