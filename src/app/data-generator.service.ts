import { Injectable } from '@angular/core';

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
}
