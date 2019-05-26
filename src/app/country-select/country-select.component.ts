import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements OnInit {
  countryFormGroup: FormGroup;
  readonly countries = ['USA', 'UK', 'Spain'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.countryFormGroup = this.formBuilder.group({
      countryControl: ['USA']
    });
  }

}
