import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

// Services
import { ToastrFeedbackService } from '../../shared/services/toastr/toastr-feedback.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SpinnerComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent {
  form: FormGroup;
  spinner: boolean = false;
  usernameFocus: boolean = false;
  passwordFocused: boolean = false;
  passwordVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrFeedbackService: ToastrFeedbackService
  ) {
    /**
     * Init forms.
     */
    this.form = this.formBuilder.group(this.validatorsForm());
  }

  /**
   * Validators form:
   */
  validatorsForm() {
    return {
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),

          /**
           * If the username was only possible with a valid email, I would use this validator.
           */
          // Validators.email
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          (control) => {
            const value = control.value || '';
            const errors: any = {};
            if (value.length < 10) {
              errors.minLength = true;
            }
            if (!/[a-zA-Z]/.test(value)) {
              errors.letter = true;
            }
            if (!/[0-9]/.test(value)) {
              errors.number = true;
            }
            if (!/[^a-zA-Z0-9]/.test(value)) {
              errors.symbol = true;
            }
            if (!/[a-zA-Z]/.test(value)) {
              errors.missingLetter = true;
            }
            return Object.keys(errors).length ? errors : null;
          },
        ]),
      ],
    };
  }

  /**
   * Controls do formulário.
   */
  get f() {
    return this.form.controls;
  }

  showPassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  /**
   * Submit Form Login.
   */
  onSubmit() {
    if (this.form.valid) {
      // Block where the http request would be to log in and get the token...

      // Mock for Spinner
      this.spinner = true;
      setTimeout(() => {
        this.form.reset();
        this.spinner = false;
        this.redirectLogin();
      }, 5000);
    } else {
      this.toastrFeedbackService.toast(
        '',
        'Mandatory field(s) not filled in correctly!',
        'error'
      );
    }
  }

  redirectLogin() {
    //Block where it would redirect to the protected route with login completed...

    this.toastrFeedbackService.toast('', 'Login successful!', 'success');
  }
}
