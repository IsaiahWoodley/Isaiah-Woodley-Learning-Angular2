import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';




@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.css'
})
export class ModifyComponent implements OnInit {
  modifyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.modifyForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      headCoach: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.modifyForm.valid) {
      console.log(this.modifyForm.value);
    }
  }

}
