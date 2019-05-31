import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { PubnubService } from '../pubnub.service';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements OnInit {
  countryFormGroup: FormGroup;
  private readonly formBuilder: FormBuilder;
  readonly countries = ['USA', 'UK', 'Spain'];

  private readonly pubnubService: PubnubService;

  constructor(formBuilder: FormBuilder, pubnubService: PubnubService) {
     this.formBuilder = formBuilder;
     this.pubnubService = pubnubService;
   }

  ngOnInit() {
    this.countryFormGroup = this.formBuilder.group({
      // The default channel name (country) is USA
      countryFormControl: ['USA']
    });
  }

  onChange(country: string) {
    console.log('Selected country/channel: ' + country);
    this.pubnubService.changeChannel(country);
  }

}
