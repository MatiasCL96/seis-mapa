import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Rutas Componentes
import { RecoveryComponent } from './components/recovery/recovery.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
