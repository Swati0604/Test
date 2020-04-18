import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './register/login/login.component';


const routes: Routes = [
  { path : 'register', component : RegisterComponent},
  { path : 'login', component: LoginComponent},
  { path: '',redirectTo: '/register', pathMatch: 'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, LoginComponent]