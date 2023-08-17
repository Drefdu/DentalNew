import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDientePage } from './edit-diente.page';

describe('EditDientePage', () => {
  let component: EditDientePage;
  let fixture: ComponentFixture<EditDientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditDientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
