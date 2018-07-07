import { Component, OnInit } from '@angular/core';
//import { Student } from '../student';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  public Studname;
  public Gender;
  public MobileNo;
  public CollageName;
  public Email;
  public BatchName;
  public Address;

  constructor() { }

  public sendData()
  {
      console.log(this.Studname);
      console.log(this.Gender);
      console.log(this.MobileNo);
      console.log(this.CollageName);
      console.log(this.Email);
      console.log(this.BatchName);
      console.log(this.Address);
  }

  ngOnInit() {
  }

}
