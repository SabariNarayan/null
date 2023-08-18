import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudComponent } from './addstud.component';

describe('AddstudComponent', () => {
  let component: AddstudComponent;
  let fixture: ComponentFixture<AddstudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddstudComponent]
    });
    fixture = TestBed.createComponent(AddstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
