import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-version2',
  templateUrl: './version2.component.html',
  styleUrls: ['./version2.component.css']
})
export class Version2Component implements OnInit {
  familyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.familyForm = this.fb.group({
      familyName: ['', Validators.required],
      motherEmail: ['', [Validators.required, Validators.email]],
      fatherEmail: ['', [Validators.required, Validators.email]],
      familyMembers: [0, [Validators.required, Validators.min(0)]],
      appliedBefore: ['N', Validators.required],
      studentFirstName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gradeApplyingFor: ['', Validators.required],
      applicantCheckboxes: this.selectedCheckboxes,
      childFullName: ['', Validators.required],
      childDateOfBirth: ['', Validators.required],
      childHomeTelephone: [''],
      childHomeAddress: [''],
      dateOfAdmissionChild: [''],
      dateOfWithdrawalChild: [''],
      parentGuardianNameChild: [''],
      addressDifferentChild: [''],
      motherTelephoneNoChild: [''],
      fatherTelephoneNoChild: [''],
      guardianTelephoneNoChild: [''],
      cellPhoneNoChild: [''],
      emergencyContactNameChild: [''],
      emergencyContactRelationshipChild: [''],
      fatherFirstName: ['', Validators.required],
      fatherMiddleName: [''],
      fatherLastName: ['', Validators.required],
      FTHRHomeTelephoneNo: [''],
      FTHRBusinessTelephoneNo: [''],
      FTHRMobileTelephoneNo: [''],
      MTHRHomeTelephoneNo: [''],
      MTHRBusinessTelephoneNo: [''],
      MTHRMobileTelephoneNo: [''],
      fathersAddress: [''],
      fathersEmail: [''],
      fathersoccupation: [''],
      fathersEmployer: [''],
      motherFirstName: ['', Validators.required],
      motherMiddleName: [''],
      motherLastName: ['', Validators.required],
      motherEmailPI: [''],
      mothersoccupation: [''],
      mothersEmployer: [''],
      mothersAddress: [''],
    });
  }

  selectedCheckboxes: number[] = [];

  updateSelectedCheckboxes(checkboxId: number): void {
    const index = this.selectedCheckboxes.indexOf(checkboxId);

    if (index === -1) {
      // Checkbox was checked, add to the array
      this.selectedCheckboxes.push(checkboxId);
    } else {
      // Checkbox was unchecked, remove from the array
      this.selectedCheckboxes.splice(index, 1);
    }

    console.log(this.selectedCheckboxes); // You can remove this line, it's for debugging purposes
  }

  onSubmit(): void {
    this.familyForm.value.applicantCheckboxes = this.selectedCheckboxes;
    if (this.familyForm.valid) {
      // Handle form submission logic here
      console.log(this.familyForm.value);
    }
  }
}
