import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLearningComponent } from './general-learning.component';

describe('GeneralLearningComponent', () => {
  let component: GeneralLearningComponent;
  let fixture: ComponentFixture<GeneralLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when username is not null', () => {
    component.username = 'userName';
    expect(component.useNameIsNull()).toBe(false);
  });

  it('should return true when username is null', () => {
    component.username = '';
    expect(component.useNameIsNull()).toBe(true);
  });
});
