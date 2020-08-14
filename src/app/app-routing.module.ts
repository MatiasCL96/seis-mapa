import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Rutas Componentes
import { LoginComponent } from './components/shared/login/login.component';
import { RecoveryComponent } from './components/shared/recovery/recovery.component';
import { HomeComponent } from './components/shared/home/home.component';
import { RegisterComponent } from './components/shared/register/register.component';

const routes: Routes = [
  { path: 'login'   , component: LoginComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: 'home'    , component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
