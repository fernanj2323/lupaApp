import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Phase3KomValidationComponent } from './phase3-kom-validation.component';

describe('Phase3KomValidationComponent', () => {
  let component: Phase3KomValidationComponent;
  let fixture: ComponentFixture<Phase3KomValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Phase3KomValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Phase3KomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
