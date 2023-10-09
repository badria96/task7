import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { STORAGE_KEY } from 'src/app/data.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent {
    staffName: string = '';
    staffPosition: string = '';
    doctorSpecialty: string = '';
  patientAge: number = 0;
  
    constructor(private dataservice:DataService) {}
  
    onSubmit() {
      if (this.staffPosition === 'Doctor') {
        const doctor = {
          name: this.staffName,
          position: this.staffPosition,
          specialty: this.doctorSpecialty,
        };
        this.dataservice.addDoctor(doctor);
      } else if (this.staffPosition === 'Patient') {
        const patient = {
          name: this.staffName,
          position: this.staffPosition,
          age: this.patientAge,
        };
        this.dataservice.addPatient(patient);
      }
      const data = {
        doctors: this.dataservice.getDoctors(),
        patients: this.dataservice.getPatients(),
      };

      this.dataservice.saveData(STORAGE_KEY,data);
      this.staffName = '';
      this.staffPosition = '';
      this.doctorSpecialty = '';
      this.patientAge = 0; 
    }
    
  }