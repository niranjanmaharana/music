import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ErrorResponseHandler } from '../util/response.message';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  showModal: boolean;
  submitted = false;
  resetForm: FormGroup;
  loading: boolean;
  error = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService,
    private toaster: ToastrService) { }

  get f() { return this.resetForm.controls; }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
    }
    this.error = '';
    this.loading = true;
    this.authService.resetPassword(this.f.email.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.toaster.success('Password reset link is shared to your email. Please check your email.', 'Success');
        },
        error => {
          this.error = ErrorResponseHandler.getResponseMessage(error.status, error.statusText);
          this.toaster.error(this.error, 'Error');
          this.loading = false;
        }
      );
  }
}