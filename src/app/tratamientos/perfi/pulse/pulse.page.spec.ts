import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PulsePage } from './pulse.page';

describe('PulsePage', () => {
  let component: PulsePage;
  let fixture: ComponentFixture<PulsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PulsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
