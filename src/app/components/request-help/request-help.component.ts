import { Component } from '@angular/core';

@Component({
  selector: 'app-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.css']
})
export class RequestHelpComponent {
  form = {
    name: '',
    phone: '',
    email: '',
    helpType: '',
    description: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Help request submitted:', this.form);
  }
}
