import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Feedback,Tel } from '../objects/Feedback';
import { FeedbackServices } from '../services/feedback.services';
@Component({
  selector: 'my-contact',
  templateUrl: 'app/views/contact.component.html',
  providers: [FeedbackServices]
})

export class ContactComponent implements OnInit{
	feedback: Feedback;
	tel : Tel;
    channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
   	invalidChannelSelection = false;

   	constructor(private feedbackService : FeedbackServices){

   	}

   	ngOnInit(){
   		this.tel = {areaCode: '', number: ''};
		this.feedback = {
			id : null,
			mychannel : '',
			firstName : '',
			lastName : '',
			agree : false,
			email : '',
			myChannel : '',
			comments : '',
			tel : this.tel
		}

   	}

   	sendFeedback(){
   		this.feedbackService.save(this.feedback).then(
   			feedback => {
		   		this.tel = {areaCode: '', number: ''};
				this.feedback = {
					id : null,
					mychannel : '',
					firstName : '',
					lastName : '',
					agree : false,
					email : '',
					myChannel : '',
					comments : '',
					tel : this.tel
				}

   			}	
		);
   	}


}