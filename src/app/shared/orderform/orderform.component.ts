import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { contact } from '../../classes/contact';
import { order } from '../../classes/order';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.scss'],
})
export class OrderformComponent implements OnInit {
  devArea: string = '';
  isCovid: boolean = true;
  requiresFurtherDetails: boolean = false;
  selectedProd: any;
  contacts: any[] = [];
  orders: any[] = [];
  newContact: contact = new contact();
  ContactDetailsFormGroup!: FormGroup;
  contactsJSON: string = 'empty';
  beingEdited: boolean = false;

  selectedSuites: order = new order();

  productsTypes: any[] = [
    { id: 1, name: 'Covid-19' },
    { id: 2, name: 'Wellness' },
  ];

  covidItems: any[] = [
    { id: 1, name: '2 day', price: 25, additionalText: ' 2 day text' },
    { id: 2, name: '8 day', price: 43, additionalText: ' 8 day text' },
  ];

  wellnessItems: any[] = [
    {
      suites: [
        { id: 1, name: 'basic', price: 100, additionalText: ' suite text' },
        { id: 2, name: 'advanced', price: 200, additionalText: 'suite text' },
      ],
      individual: [
        { id: 1, name: 'iron', price: 25, additionalText: ' iron text' },
        { id: 1, name: 'kidney', price: 35, additionalText: 'kidney text' },
      ],
    },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ContactDetailsFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required],
      genderCtrl: ['', Validators.required],
      dobCtrl: ['', Validators.required],
      ethnicityCtrl: ['', Validators.required],
      passportCtrl: ['', Validators.required],
      nhsCtrl: ['', Validators.required],
      hAddress1Ctrl: ['', Validators.required],
      hAddress2Ctrl: ['', Validators.required],
      hCityCtrl: ['', Validators.required],
      hPostcodeCtrl: ['', Validators.required],
      qAddress1Ctrl: ['', Validators.required],
      qAddress2Ctrl: ['', Validators.required],
      qCityCtrl: ['', Validators.required],
      qPostcodeCtrl: ['', Validators.required],
      vaccCtrl: ['', Validators.required],
      dodCtrl: ['', Validators.required],
      doeCtrl: ['', Validators.required],
      dodoCtrl: ['', Validators.required],
      cTravelCtrl: ['', Validators.required],
      travelDetailsCtrl: ['', Validators.required],
    });
  }

  //step 2
  addContact = (typeAdded: number) => {
    this.newContact = JSON.parse(JSON.stringify(this.newContact)); // breaks connection of objects
    this.contacts.push(this.newContact);
    this.newContact = new contact();
    this.ContactDetailsFormGroup.reset();
  };

  editContact = (selectedContact: contact) => {
    this.ContactDetailsFormGroup.reset();
    this.beingEdited = true;
    this.newContact = selectedContact;
  };

  updateContact = () => {
    this.beingEdited = false;
    this.contacts = JSON.parse(JSON.stringify(this.contacts)); // breaks connection of objects
    this.ContactDetailsFormGroup.reset();
    this.newContact = new contact();
  };

  deleteContact = (contactIndex: number) => {
    this.contacts.splice(contactIndex, 1);
  };

  selectedProduct = (Id: number) => {
    this.isCovid = Id == 1 ? true : false;

    if (this.isCovid) {
      this.ContactDetailsFormGroup.get('passportCtrl')?.enable();
      this.ContactDetailsFormGroup.get('nhsCtrl')?.enable();
      this.ContactDetailsFormGroup.controls['qAddress1Ctrl'].enable();
      this.ContactDetailsFormGroup.controls['qAddress2Ctrl'].enable();
      this.ContactDetailsFormGroup.controls['qCityCtrl'].enable();
      this.ContactDetailsFormGroup.controls['qPostcodeCtrl'].enable();
      this.ContactDetailsFormGroup.controls['vaccCtrl'].enable();
      this.ContactDetailsFormGroup.controls['dodCtrl'].enable();
      this.ContactDetailsFormGroup.controls['doeCtrl'].enable();
      this.ContactDetailsFormGroup.controls['dodoCtrl'].enable();
      this.ContactDetailsFormGroup.controls['cTravelCtrl'].enable();
      this.ContactDetailsFormGroup.controls['travelDetailsCtrl'].enable();
    } else {
      this.ContactDetailsFormGroup.get('passportCtrl')?.disable();
      this.ContactDetailsFormGroup.get('nhsCtrl')?.disable();
      this.ContactDetailsFormGroup.get('qAddress1Ctrl')?.disable();
      this.ContactDetailsFormGroup.get('qAddress2Ctrl')?.disable();
      this.ContactDetailsFormGroup.get('qCityCtrl')?.disable();
      this.ContactDetailsFormGroup.get('qPostcodeCtrl')?.disable();
      this.ContactDetailsFormGroup.get('vaccCtrl')?.disable();
      this.ContactDetailsFormGroup.get('dodCtrl')?.disable();
      this.ContactDetailsFormGroup.get('doeCtrl')?.disable();
      this.ContactDetailsFormGroup.get('dodoCtrl')?.disable();
      this.ContactDetailsFormGroup.get('cTravelCtrl')?.disable();
      this.ContactDetailsFormGroup.get('travelDetailsCtrl')?.disable();
    }
  };

  duplicateAddress(ob: MatCheckboxChange) {
    if (ob.checked) {
      this.ContactDetailsFormGroup.controls['qAddress1Ctrl'].setValue(
        this.ContactDetailsFormGroup.get('hAddress1Ctrl')?.value
      );
      this.ContactDetailsFormGroup.controls['qAddress2Ctrl'].setValue(
        this.ContactDetailsFormGroup.get('hAddress2Ctrl')?.value
      );
      this.ContactDetailsFormGroup.controls['qCityCtrl'].setValue(
        this.ContactDetailsFormGroup.get('hCityCtrl')?.value
      );
      this.ContactDetailsFormGroup.controls['qPostcodeCtrl'].setValue(
        this.ContactDetailsFormGroup.get('hPostcodeCtrl')?.value
      );
      //delete quarantine address
    } else {
      this.ContactDetailsFormGroup.controls['qAddress1Ctrl'].setValue('');
      this.ContactDetailsFormGroup.controls['qAddress2Ctrl'].setValue('');
      this.ContactDetailsFormGroup.controls['qCityCtrl'].setValue('');
      this.ContactDetailsFormGroup.controls['qPostcodeCtrl'].setValue('');
    }
  }

  //step 3

  backToContacts = () => {};

  selectSuites = (tester: any) => {
    this.orders = [];
    console.log('length ', tester.length);
  };

  selectIndividual = (tester: any) => {
    this.orders = [];
    console.log('length ', tester.length);
  };

  gotoConfirmAndSave=()=>{}
}
