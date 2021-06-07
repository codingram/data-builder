import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  dataForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      data: this.fb.array([])
    })
    this.addDefaultFormGroup()
  }

  get data() {
    return this.dataForm.get('data') as FormArray;
  }

  addDefaultFormGroup() {
    this.data.push(this.fb.group({
      id:[Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)],
      keyname: [null, Validators.required],
      type: [null, Validators.required],
    }))
  }

  ngOnInit(): void {
  }

}
