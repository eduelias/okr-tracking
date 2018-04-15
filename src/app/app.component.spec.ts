/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AuthService } from "app/shared/auth.service";
import { AuthServiceStub } from "app/shared/auth.service.stub";
import { AlertModule } from "ngx-bootstrap";
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(() => {
        let authServiceStub = new AuthServiceStub(true);

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                RouterTestingModule.withRoutes(
                    []
                ),
                AlertModule.forRoot()
            ],
            providers: [
                { provide: AuthService, useValue: authServiceStub }
            ]
        });;
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app works!'`, async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app works! - okr');
    }));
});
