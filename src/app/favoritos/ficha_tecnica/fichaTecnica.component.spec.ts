import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { fichaTecnicaComponent } from './fichaTecnica.component';


describe('fichaTecnica',() =>{
    let component: fichaTecnicaComponent;
    let fixture: ComponentFixture<fichaTecnicaComponent>;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[ fichaTecnicaComponent]
        })
        .compileComponents();
    }));

    beforeEach(()=>{
        fixture = TestBed.createComponent(fichaTecnicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create',()=>{
        expect(component).toBeTruthy();
    })
});