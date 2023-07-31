import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaUserPage } from './ficha-user.page';

describe('FichaUserPage', () => {
  let component: FichaUserPage;
  let fixture: ComponentFixture<FichaUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FichaUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
