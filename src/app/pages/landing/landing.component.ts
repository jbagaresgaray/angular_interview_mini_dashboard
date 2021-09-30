import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  title = 'angular-interview-mini-dashboard';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoDashboard() {
    this.router.navigateByUrl('/main');
  }
}
