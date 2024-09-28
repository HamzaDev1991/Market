import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoductDetailsComponent } from './peoduct-details.component';

describe('PeoductDetailsComponent', () => {
  let component: PeoductDetailsComponent;
  let fixture: ComponentFixture<PeoductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoductDetailsComponent]
    });
    fixture = TestBed.createComponent(PeoductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
