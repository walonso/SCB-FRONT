import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldComponent } from './add-field.component';

describe('AddFieldComponent', () => {
  let component: AddFieldComponent;
  let fixture: ComponentFixture<AddFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
