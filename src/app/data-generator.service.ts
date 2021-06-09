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

  data = {
    "data": [
      {
        "id": "moifu",
        "keyname": "name",
        "type": "object",
        "dataArr": [
          {
            "id": "olzeo",
            "keyname": "f_name",
            "type": "string",
            "valueType": "first_name"
          },
          {
            "id": "eltkb",
            "keyname": "l_name",
            "type": "string",
            "valueType": "last_name"
          }
        ]
      },
      {
        "id": "durtw",
        "keyname": "avatar",
        "type": "string",
        "valueType": "avatar"
      },
      {
        "id": "blpch",
        "keyname": "address",
        "type": "array of object",
        "repeatFor": 2,
        "dataArr": [
          {
            "id": "gswyw",
            "keyname": "city",
            "type": "string",
            "valueType": "city"
          },
          {
            "id": "matsa",
            "keyname": "country",
            "type": "string",
            "valueType": "country"
          },
          {
            "id": "wujsa",
            "keyname": "street",
            "type": "string",
            "valueType": "street"
          }
        ]
      },
      {
        "id": "sacax",
        "keyname": "friends",
        "type": "array of object",
        "repeatFor": 5,
        "dataArr": [
          {
            "id": "bwmnv",
            "keyname": "name",
            "type": "string",
            "valueType": "first_name"
          },
          {
            "id": "urezc",
            "keyname": "address",
            "type": "string",
            "valueType": "address"
          },
          {
            "id": "stkch",
            "keyname": "hobbies",
            "type": "array of string",
            "strArrType": "month",
            "repeatFor": 5
          },
          {
            "id": "pckvo",
            "keyname": "contact",
            "type": "array of object",
            "repeatFor": 2,
            "dataArr": [
              {
                "id": "npwod",
                "keyname": "mobile",
                "type": "number",
                "valueType": "mobile_no"
              },
              {
                "id": "imfni",
                "keyname": "home",
                "type": "number",
                "valueType": "number"
              }
            ]
          },
          {
            "id": "dblvv",
            "keyname": "birthdate",
            "type": "date",
            "valueType": "date"
          }
        ]
      },
      {
        "id": "jeran",
        "keyname": "contact",
        "type": "array of object",
        "repeatFor": 2,
        "dataArr": [
          {
            "id": "gxxbp",
            "keyname": "mobile",
            "type": "number",
            "valueType": "mobile_no"
          },
          {
            "id": "psxhh",
            "keyname": "home",
            "type": "number",
            "valueType": "number"
          }
        ]
      },
      {
        "id": "zpwco",
        "keyname": "birthdate",
        "type": "date",
        "valueType": "date"
      },
      {
        "id": "hawem",
        "keyname": "hobbies",
        "type": "array of string",
        "strArrType": "month",
        "repeatFor": 5
      },
      {
        "id": "dqgda",
        "keyname": "id",
        "type": "id",
        "valueType": "uuid"
      },
      {
        "id": "kuunt",
        "keyname": "roll_id",
        "type": "id",
        "valueType": "random_number"
      }
    ],
    "repeatFor": 10
  }
  constructor() { }


  finalData = [];

  generateData() {
    for (let i = 0; i < this.data.repeatFor; i++) {
      let a = {};
      for (const obj of this.data.data) {
        a = { ...a, ...this.generateObject(obj) };
      }
      this.finalData.push(a);
    }
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
          for (const iterator of obj.dataArr) {
            final[obj.keyname].push(this.generateObject(iterator))
          }
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
