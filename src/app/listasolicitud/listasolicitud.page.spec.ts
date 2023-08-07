import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListasolicitudPage } from './listasolicitud.page';

describe('ListasolicitudPage', () => {
  let component: ListasolicitudPage;
  let fixture: ComponentFixture<ListasolicitudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListasolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
