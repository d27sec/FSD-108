import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoLIstComponent } from './components/to-do-list/to-do-list.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';
import { AboutComponent } from './components/about/about.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

//the list of vali routes for your page
const routes: Routes = [
  { path: 'todo', component: ToDoLIstComponent },
  {path:"convertor", component: TempConverterComponent},
  {path:'about', component: AboutComponent},
  {path: 'user/create', component: UserRegisterComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'user/login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
