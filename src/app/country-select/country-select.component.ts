import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder} from '@angular/forms';

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
      countryFormControl: ['USA']
    });
  }

  onChange(country: string) {
    alert(`Selected country: ` + country);
  }

}
