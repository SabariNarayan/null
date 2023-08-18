import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddstudComponent } from './components/studentdata/addstud/addstud.component';
import { EditstudComponent } from './components/studentdata/editstud/editstud.component';
import { AuthGuard } from './gaurd/auth.guard';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'list',component:ListComponent,canActivate: [AuthGuard], data: { roles: ['admin', 'user'] }},
{path:'register',component:RegisterComponent},
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: 'admin' } },
{path:'addstud',component:AddstudComponent , canActivate: [AuthGuard], data: { roles: 'admin' }},
{ path: 'editstud/:id', component: EditstudComponent ,canActivate: [AuthGuard], data: { roles: 'admin' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
