import { DisplayUserComponent } from 'app/display-user/display-user.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AllInOnePageComponent } from './all-in-one-page.component';

describe('AllInOnePageComponent', () => {
    let component: AllInOnePageComponent;
    let fixture: ComponentFixture<AllInOnePageComponent>;
    let other: DisplayUserComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AllInOnePageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AllInOnePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
