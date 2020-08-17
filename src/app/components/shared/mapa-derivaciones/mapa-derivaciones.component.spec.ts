import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDerivacionesComponent } from './mapa-derivaciones.component';

describe('MapaDerivacionesComponent', () => {
  let component: MapaDerivacionesComponent;
  let fixture: ComponentFixture<MapaDerivacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDerivacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDerivacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
