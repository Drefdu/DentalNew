import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosPage } from './datos.page';

describe('DatosPage', () => {
  let component: DatosPage;
  let fixture: ComponentFixture<DatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
