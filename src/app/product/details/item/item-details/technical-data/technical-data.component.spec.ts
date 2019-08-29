import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDataComponent } from './technical-data.component';

describe('TechnicalDataComponent', () => {
  let component: TechnicalDataComponent;
  let fixture: ComponentFixture<TechnicalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
