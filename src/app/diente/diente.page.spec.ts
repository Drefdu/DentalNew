import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DientePage } from './diente.page';

describe('DientePage', () => {
  let component: DientePage;
  let fixture: ComponentFixture<DientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
