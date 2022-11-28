import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read-policy',
  templateUrl: './read-policy.component.html',
  styleUrls: ['./read-policy.component.css']
})
export class ReadPolicyComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

  }

}
