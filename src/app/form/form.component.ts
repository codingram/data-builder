import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataGeneratorService } from '../data-generator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  dataForm: FormGroup;
  generatedJsonData = null;

  constructor(private fb: FormBuilder, private datagen: DataGeneratorService) {
    this.dataForm = this.fb.group({
      data: this.fb.array([]),
      repeatFor: [1]
    })
    this.addDefaultFormGroup()
  }

  get data() {
    return this.dataForm.get('data') as FormArray;
  }

  addDefaultFormGroup() {
    this.data.push(this.fb.group({
      id: [Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)],
      keyname: ['root', Validators.required],
      type: [null, Validators.required],
    }))
  }

  ngOnInit(): void {
  }

  submit() {
    this.generatedJsonData = this.datagen.generateData(this.dataForm.value);
    console.log("generatedJsonData", this.generatedJsonData)
  }
}
