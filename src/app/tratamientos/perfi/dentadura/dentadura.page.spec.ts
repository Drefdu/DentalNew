import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DentaduraPage } from './dentadura.page';

describe('DentaduraPage', () => {
  let component: DentaduraPage;
  let fixture: ComponentFixture<DentaduraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DentaduraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
