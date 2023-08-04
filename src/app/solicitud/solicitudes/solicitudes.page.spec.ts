import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesPage } from './solicitudes.page';

describe('SolicitudesPage', () => {
  let component: SolicitudesPage;
  let fixture: ComponentFixture<SolicitudesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
