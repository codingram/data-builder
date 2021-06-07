import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input() group;
  @Input() rowIndex: any;

  dataTypes = ['string', 'number', 'id', 'date', 'array of string', 'array of object', 'object',]
  valueTypes = {
    string: ['first_name', 'last_name', 'avatar', 'city', 'country', 'street', 'address', 'month', 'year'],
    'array of string': ['first_name', 'last_name', 'avatar', 'city', 'country', 'street', 'address', 'month', 'year'],
    number: ['mobile_no', 'number'],
    id: ['uuid', 'random_number', 'random_string'],
    date: ['date'],
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get id() {
    return this.form?.get('id')?.value;
  }
  get form() {
    return this.group as FormGroup;
  }

  typeChanged() {
    switch (this.form.get('type').value) {
      case 'string':
        this.form.contains('strArrType') && this.form.removeControl('strArrType');
        this.form.contains('repeatFor') && this.form.removeControl('repeatFor');
        this.form.addControl('valueType', this.fb.control(null, Validators.required));
        break;

      case 'number':
        this.form.contains('strArrType') && this.form.removeControl('strArrType');
        this.form.contains('repeatFor') && this.form.removeControl('repeatFor');
        this.form.addControl('valueType', this.fb.control(null, Validators.required));

        break;

      case 'id':
        this.form.contains('strArrType') && this.form.removeControl('strArrType');
        this.form.contains('repeatFor') && this.form.removeControl('repeatFor');
        this.form.addControl('valueType', this.fb.control(null, Validators.required));

        break;

      case 'date':
        this.form.contains('strArrType') && this.form.removeControl('strArrType');
        this.form.contains('repeatFor') && this.form.removeControl('repeatFor');
        this.form.addControl('valueType', this.fb.control(null, Validators.required));

        break;

      case 'array of string':
        this.form.contains('valueType') && this.form.removeControl('valueType');
        this.form.addControl('strArrType', this.fb.control(null, Validators.required));
        this.form.addControl('repeatFor', this.fb.control(null, Validators.required));
        break;

      case 'array of object':
        this.form.contains('strArrType') && this.form.removeControl('strArrType');
        this.form.contains('valueType') && this.form.removeControl('valueType');
        this.form.addControl('repeatFor', this.fb.control(null, Validators.required));
        break;

      case 'object':
        this.form.contains('strArrType') && this.form.removeControl('strArrType');
        this.form.contains('repeatFor') && this.form.removeControl('repeatFor');
        this.form.contains('valueType') && this.form.removeControl('valueType');
        break;


      default:
        break;
    }
  }

}
