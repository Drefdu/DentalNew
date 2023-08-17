import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDientePage } from './form-diente.page';

describe('FormDientePage', () => {
  let component: FormDientePage;
  let fixture: ComponentFixture<FormDientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormDientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
