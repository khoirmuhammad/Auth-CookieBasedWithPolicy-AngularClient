import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-policy',
  templateUrl: './delete-policy.component.html',
  styleUrls: ['./delete-policy.component.css']
})
export class DeletePolicyComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }

}
