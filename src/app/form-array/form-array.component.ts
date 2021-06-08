import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  @Input() formArr;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get data() {
    return this.formArr as FormArray;
  }

  addDefaultFormGroup() {
    this.data.push(this.fb.group({
      id: [Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)],
      keyname: [null, Validators.required],
      type: [null, Validators.required],
    }))
  }


}
