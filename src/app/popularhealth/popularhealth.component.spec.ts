import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularhealthComponent } from './popularhealth.component';

describe('PopularhealthComponent', () => {
  let component: PopularhealthComponent;
  let fixture: ComponentFixture<PopularhealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularhealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
