import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {

  constructor(private policyService: PolicyService,
              private router: Router) { }

  ngOnInit() {

    this.policyService.updatePolicy().subscribe(res => {
      var result = res;
    })

  }

}
