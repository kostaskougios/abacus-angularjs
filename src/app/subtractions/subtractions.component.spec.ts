import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractionsComponent } from './subtractions.component';

describe('SubtractionsComponent', () => {
  let component: SubtractionsComponent;
  let fixture: ComponentFixture<SubtractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
