import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.scss']
})
export class EmicalculatorComponent implements OnInit {
  rating1 = 3200;
  constructor() { }

  ngOnInit(): void {
  }

}
