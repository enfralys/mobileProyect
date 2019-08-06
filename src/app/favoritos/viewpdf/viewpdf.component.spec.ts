import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { viewPDFComponent } from './viewpdf.components';

describe('FavoritosComponent', () => {
  let component: viewPDFComponent;
  let fixture: ComponentFixture<viewPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ viewPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(viewPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
