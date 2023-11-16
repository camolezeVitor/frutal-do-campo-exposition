import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolfactsComponent } from './coolfacts.component';

describe('CoolfactsComponent', () => {
  let component: CoolfactsComponent;
  let fixture: ComponentFixture<CoolfactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolfactsComponent]
    });
    fixture = TestBed.createComponent(CoolfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
