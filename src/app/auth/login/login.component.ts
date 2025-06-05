import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SpinnerComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent {
  form: FormGroup;
  submitForm: boolean = false;
  spinner: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    /**
     * Inicializando forms
     */
    this.form = this.formBuilder.group(this.validatorsForm());
  }

  /**
   * Controles de validacao do formulário.
   */
  validatorsForm() {
    return {
      /**
       * Validadores do form:
       */
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
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

  onSubmit() {
    console.log(this.form);
    console.log(this.form.valid);
    this.submitForm = true;
    if (this.form.valid) {
      this.spinner = true;
      setTimeout(() => {
        this.spinner = false;
      }, 5000);
    }
  }
}
