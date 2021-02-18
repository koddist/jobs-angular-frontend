import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'j247-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: FormGroup;

  constructor() {
    this.search = new FormGroup({
      position: new FormControl(),
      company: new FormControl()
    });
  }

  ngOnInit(): void {
  }

}
