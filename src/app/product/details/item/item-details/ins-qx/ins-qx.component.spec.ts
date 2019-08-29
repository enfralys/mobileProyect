import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsQxComponent } from './ins-qx.component';

describe('InsQxComponent', () => {
  let component: InsQxComponent;
  let fixture: ComponentFixture<InsQxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsQxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsQxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
