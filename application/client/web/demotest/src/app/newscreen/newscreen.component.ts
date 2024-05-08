import { Component, OnInit, ViewChild } from '@angular/core';
import { NewscreenService } from './newscreen.service';





@Component({
  selector: 'app-newscreen',
  templateUrl: './newscreen.component.html',
  styleUrls: ['./newscreen.component.scss'],
})

export class NewscreenComponent implements OnInit {
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }




    constructor (
        private newscreenService: NewscreenService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.newscreenService.GpCreate(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.email = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}