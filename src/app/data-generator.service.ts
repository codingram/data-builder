import { Injectable } from '@angular/core';


export interface DataArr2 {
  id: string;
  keyname: string;
  type: string;
  valueType: string;
}

export interface DataArr {
  id: string;
  keyname: string;
  type: string;
  valueType: string;
  strArrType: string;
  repeatFor?: number;
  dataArr: DataArr2[];
}

export interface Datum {
  id: string;
  keyname: string;
  type: string;
  dataArr: DataArr[];
  valueType: string;
  repeatFor?: number;
  strArrType: string;
}

export interface RootObject {
  data: Datum[];
  repeatFor: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {

  constructor() { }


  finalData = [];

  generateData(data) {
    this.finalData = [];
    for (let i = 0; i < data.repeatFor; i++) {
      let a = {};
      for (const obj of data.data) {
        a = { ...a, ...this.generateObject(obj) };
      }
      this.finalData.push(a);
    }
    return this.finalData;
  }

  generateObject(obj) {
    const final = {}
    switch (obj.type) {
      case 'string':
        final[obj.keyname] = this.generateStr(obj.valueType)
        break
      case 'number':
        final[obj.keyname] = this.generateStr(obj.valueType)
        break
      case 'id':
        final[obj.keyname] = this.generateStr(obj.valueType)
        break
      case 'date':
        final[obj.keyname] = this.generateStr(obj.valueType)
        break
      case 'array of string':
        final[obj.keyname] = []
        for (let i = 0; i < obj.repeatFor; i++) {
          final[obj.keyname].push(this.generateStr(obj.valueType))
        }
        break
      case 'array of object':
        final[obj.keyname] = [];
        for (let i = 0; i < obj.repeatFor; i++) {
          let innerObj = {}
          for (const iterator of obj.dataArr) {
            innerObj = { ...innerObj, ...this.generateObject(iterator) }
          }
          final[obj.keyname].push(innerObj)
        }
        break
      case 'object':
        final[obj.keyname] = {};
        for (const iterator of obj.dataArr) {
          final[obj.keyname] = { ...final[obj.keyname], ...this.generateObject(iterator) }
        }
        break
      default:
        break;
    }
    return final;
  }

  generateStr(type) {
    let finalstr = '';
    switch (type) {
      case 'first_name':
        finalstr = 'first_name'
        break

      case 'last_name':
        finalstr = 'last_name'
        break

      case 'avatar':
        finalstr = 'avatar'
        break

      case 'city':
        finalstr = 'city'
        break

      case 'country':
        finalstr = 'country'
        break

      case 'street':
        finalstr = 'street'
        break

      case 'address':
        finalstr = 'address'
        break

      case 'month':
        finalstr = 'month'
        break

      case 'year':
        finalstr = 'year'
        break

      default:
        finalstr = 'default'
        break
    }
    return finalstr
  }

  generateNumber(type) {
    switch (type) {
      case 'mobile_no':
        return 'mobile_no'

      case 'number':
        return 'number'

      default:
        return 'default'
    }
  }

  generateId(type) {
    switch (type) {
      case 'uuid':
        return 'uuid'

      case 'random_number':
        return 'random_number'

      case 'random_string':
        return 'random_string'

      default:
        return 'default'
    }
  }

  generatedate(type) {
    switch (type) {
      case 'date':
        return 'date'

      default:
        return 'default'
    }
  }

}
