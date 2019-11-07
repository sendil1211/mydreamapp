import { Component, OnInit } from '@angular/core';
import { StaffDetailsService } from '../service/staff-details.service'

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  private staffArry = [];
  constructor(private stafflist: StaffDetailsService) { }


  ngOnInit() {

    return this.stafflist.getJSONData()
    .subscribe(data => this.staffArry = data);
  }

}
