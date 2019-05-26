import { Component, OnInit } from '@angular/core';
import { PubnubService } from '../pubnub.service';

import DateUtil from '../classes/dateUtil';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})

export class TweetsListComponent implements OnInit {
  readonly messageWrappers: any[];
  readonly pubnubService: PubnubService;
  readonly getTimeStringFromString: Function;

  constructor(pubnubService: PubnubService) {
    this.pubnubService = pubnubService;
    this.messageWrappers = new Array<any>();
    this.getTimeStringFromString = DateUtil.getTimeStringFromString;
  }

  ngOnInit() {
    this.pubnubService.messageReceivedObservable.subscribe(
      // messageWrapper => this.messageWrappers.push(messageWrapper));
      messageWrapper => {
        console.log('Adding new messageWrapper to the list, timetoken: ' +
            messageWrapper.timetoken);

        this.messageWrappers.push(messageWrapper);
      });

    console.log('Going to setup ' + PubnubService.name);
    this.pubnubService.setup();
  }
}
