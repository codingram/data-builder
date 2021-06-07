import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input() group: FormGroup | any;
  @Input() rowIndex: any;

  dataTypes = ['string', 'number', 'id', 'date', 'array of string', 'array of object', 'object',]
  valueTypes = ['first_name', 'last_name', 'mobile_no', 'number', 'uuid', 'avatar', 'city', 'country', 'street', 'address', 'date', 'month', 'year']



  constructor() { }

  ngOnInit(): void {
  }

  get id() {
    return this.group?.get('id')?.value;
  }

}
