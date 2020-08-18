import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { RecoveryComponent } from './components/shared/recovery/recovery.component';
import { HomeComponent } from './components/shared/home/home.component';
import { MapaDerivacionesComponent } from './components/shared/mapa-derivaciones/mapa-derivaciones.component';

// Import PrimeNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {PanelModule} from 'primeng/panel';
import {FieldsetModule} from 'primeng/fieldset';
import {MultiSelectModule} from 'primeng/multiselect';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    HomeComponent,
    MapaDerivacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    PanelModule,
    FieldsetModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
