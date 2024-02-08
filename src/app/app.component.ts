import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms';
  form!: FormGroup; // non-null assertion

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.initializeForm();
  }



  initializeForm(): void {
    this.form = this.fb.group({
      family_last_name: ['', Validators.required],
      fathers_email: ['', [Validators.required, Validators.email]],
      mothers_email: ['', [Validators.required, Validators.email]],
    
        fathers_name: ['', Validators.required],
        mothers_name: ['', Validators.required],
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
        telephone_home: [''],
        telephone_business: [''],
        telephone_mobile: [''],
        occupation: [''],
        employer: [''],
  
        totalNumberofFamily: [''],
   
        has_any_family_member_applied: [''],
        applied_student_name: [''],
        applied_student_dob: [''],
        applied_student_grade: [''],
        transportation: [''],
        transportation_value: [''],
        field_trips: [''],
        field_trips_value: [''],
        water_activities: [''],
        water_activities_value: [''],
        receipt_operating_policies: [''],
        child_served_meals: [''],
        child_care_days_times: [''],
        mea_name_of_physician: [''],
        mea_name_of_address: [''],
        mea_name_of_phone: [''],
        mea_name_of_emergency_medical_facility: [''],
        mea_name_of_emergency_address: [''],
        mea_name_of_emergency_phone: [''],
        child_permission: [''],
        current_immunization_record: [''],
  
      checklist: this.fb.array([]), // You may need to handle this differently based on dynamic checkbox creation
   
        full_name: [''],
        dob: [''],
        home_telephone_no: [''],
        home_address: [''],
        date_of_admission: [''],
        date_of_withdrawal: [''],
        parent_guardian_name: [''],
        parent_guardian_address: [''],
        child_care_mothers_telephone_no: [''],
        child_care_fathers_telephone_no: [''],
        child_care_gaurdians_telephone_no: [''],
        child_care_cell_no: [''],
        child_care_extra_name: [''],
        child_care_extra_address: [''],
        child_care_extra_phone: [''],
        child_care_extra_relation: [''],
        child_care_release_name_1: [''],
        child_care_release_telephone_1: [''],
        child_care_release_name_2: [''],
        child_care_release_telephone_2: [''],
        child_care_release_name_3: [''],
        child_care_release_telephone_3: [''],
        school_attended_name: [''],
        school_attended_address: [''],
        school_attended_phone: [''],
        immunization_record_at_school_attended: [''],
  
   
        health_care_statement: [''],
        health_care_professional_name: [''],
        health_care_professional_date: [''],
        signed_detailed_copy_attached: [''],
        medical_affidavit: [''],
        within_12_month_certificate: [''],
        health_care_professional_address: [''],
        vission_r: [''],
        vission_l: [''],
        vission_pass_fail: [''],
        vission_date: [''],
        hearing_r: [''],
        hearing_l: [''],
        hearing_pass_fail: [''],
        hearing_date: [''],
        tb_test: [''],
        tb_test_date: [''],
        checkenpox_date: [''],
        exclude_immunization_requirements: [''],
        health_req_pg_name: [''],
        health_req_pg_date: [''],
        applicant_dosage: this.fb.array([
          this.fb.group({ disease: '', dosage: [] })
        ]) ,
   
      created_at: [''],
      created_by_ip: ['']
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission

    // Handle form submission logic here
    console.log(this.form.value);

    console.log("On submit" ,this.selectedCheckboxes);
  }


  selectedCheckboxes: number[] = [];

  updateSelectedCheckboxes(checkboxId: number) {
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

  updateFamilyApplied(value: boolean): void {
    this.form.get('has_any_family_member_applied')?.setValue(value);
  }


  updatetotalNumberofFamily(data: any ){
   
    this.form.get('totalNumberofFamily')?.setValue(data);
    console.log(this.form.value);

  }

  
}
