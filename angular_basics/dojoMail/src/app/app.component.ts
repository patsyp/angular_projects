import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	//Create a variable emails that is an array of emails.
  emails = [
	  {email:'patsy@gmail.com', important: true, subject: 'nothing', content: 'This is nothing.'},
	  {email: 'email@email.com', important:true, subject: 'something',content:'This is something'},
	  {email: 'hello@mail.com', important: false, subject: 'hi', content:'hello, whats up'},
	  {email: 'bye@email.com', important:false, subject:'goodbye', content:'yo, peace out'}
	  ]
}
