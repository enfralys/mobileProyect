import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { viewVideoComponent } from './viewVideo.compoent';


describe('viewVideoComponent',() => {
    let component: viewVideoComponent;
    let fixture: ComponentFixture<viewVideoComponent>;



    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ viewVideoComponent ]
        })
        .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(viewVideoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('sould create',  () =>{
        expect(component).toBeTruthy();
    });
});
