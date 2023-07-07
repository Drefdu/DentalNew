import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfiPage } from './perfi.page';

describe('PerfiPage', () => {
  let component: PerfiPage;
  let fixture: ComponentFixture<PerfiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
