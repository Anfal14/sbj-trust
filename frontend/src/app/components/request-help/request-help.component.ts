import { Component } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';

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

  loading = false;
  submitted = false;
  error = '';

  constructor(private strapi: StrapiService) {}

  onSubmit() {
    this.loading = true;
    this.error = '';

    this.strapi.submitHelpRequest({
      name: this.form.name,
      phone: this.form.phone,
      email: this.form.email,
      typeOfHelp: this.form.helpType,
      describeYourSituation: this.form.description
    }).subscribe(
      () => {
        this.loading = false;
        this.submitted = true;
      },
      () => {
        this.loading = false;
        this.error = 'Something went wrong. Please try again or contact us directly.';
      }
    );
  }
}
