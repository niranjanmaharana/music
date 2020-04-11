import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validation-service.service';
import { ContactService } from '../services/contact.service';
import { Feedback } from '../model/feedback.model';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, ValidationService.email]],
    mobile: ['', [Validators.required, ValidationService.mobile]],
    message: ['', Validators.required]
  });
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private toaster: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      let feedback: Feedback = null;
      feedback = JSON.parse(JSON.stringify(this.contactForm.value));
      this.contactService.saveFeedback(feedback).subscribe(data => {
        this.formSubmitted = false;
        this.contactForm.reset();
        if (data.id) {
          this.toaster.success('Thank you for your valuable feedback.', 'Success');
        } else {
          this.toaster.error('Failed to submit the feedback. Try again!', 'Error');
        }
      }, error => {
        this.formSubmitted = false;
        this.toaster.error('Failed to submit the feedback. Try again!\n' + error.statusText, 'Error');
        console.log(error);
      });
    } else {
      this.toaster.error('Invalid form details!', 'Error');
    }
  }
}
