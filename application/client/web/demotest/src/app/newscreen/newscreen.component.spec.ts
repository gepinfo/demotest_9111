import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscreenComponent } from './newscreen.component';
import { NewscreenService } from './newscreen.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewscreenComponent } from './newscreen.component';


describe('NewscreenComponent', () => {
  let component: NewscreenComponent;
  let fixture: ComponentFixture<NewscreenComponent>;
  let service: NewscreenService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ NewscreenComponent ],
      providers: [ NewscreenService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscreenComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(NewscreenService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.ticket.created_by).toEqual(mockEmail);

  });
  

  // GpCreate test case file
  it('should call GpCreate and reset  properties', () => {

    // Create a spy for the GpCreate method of the service
    spyOn(service, 'GpCreate').and.returnValue(of({}));
    
    // Set values for ticket properties
    component.ticket.name = 'Test name';
    component.ticket.email = 'Test email';


    // Call the GpCreate method
    component.GpCreate();


    // Expect the GpCreate method to have been called with the tickets object
    expect(service.GpCreate).toHaveBeenCalledWith(component.ticket);

    // Expect the ticket properties to be reset
    expect(component.ticket.name).toBe('');
    expect(component.ticket.email).toBe('');
  });
  it('should log error on update GpCreate failure', () => {
    const error = new Error('GpCreate failed');
    spyOn(service, 'GpCreate').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GpCreate();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });









});