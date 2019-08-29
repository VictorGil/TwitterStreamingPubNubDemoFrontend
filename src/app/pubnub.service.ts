import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { Observable, Observer} from 'rxjs';

import DateUtil from './classes/dateUtil';

@Injectable({
  providedIn: 'root'
})

export class PubnubService {
  private readonly pubnub: PubNubAngular;

  public readonly messageReceivedObservable: Observable<any>;
  private messageReceivedObserver: Observer<any>;
  private currentChannel: string;

  constructor() {
    console.log('Starting PubnumService constructor method');

    // we need the "self" constant because we cannot use "this" inside the function below
    const self = this;
    this.messageReceivedObservable = Observable.create(function(observer: Observer<any>) {
        self.messageReceivedObserver = observer;
      });

    this.pubnub = new PubNubAngular();
  }

  public setup(channelName: string): void {
    this.pubnub.init({
      // Key values are masked
      publishKey: 'pub-c-********************************',
      subscribeKey: 'sub-c-********************************'
    });

    this.subscribe(channelName);
  }

  private subscribe(channelName: string) {
    console.log('Going to subscribe to ' + channelName + ' channel');
    this.pubnub.subscribe({
      channels  : [channelName],
      withPresence: true,
      triggerEvents: ['message', 'presence', 'status']
    });

    // we need the "self" constant because we cannot use "this" inside the function below
    const self = this;
    this.pubnub.getMessage(channelName, (messageWrapper) => {
      const messageWrapperString: string = JSON.stringify(messageWrapper, null, 4);
      const currentTime: string = DateUtil.getCurrentTimeString();

      console.log('Message Received:' + '\n' +  messageWrapperString + '\n' +
          'on channel ' + channelName + ' at ' + currentTime);

      // We are adding this property to the messageWrapper object
      messageWrapper.timeReceived = Date.now();

      // The use of "self" is required
      self.messageReceivedObserver.next(messageWrapper);
    });

    this.pubnub.getError(channelName, (err) => {
      console.log(err);
    });

    this.pubnub.getPresence(channelName, (pse) => {
      console.log(pse);
    });

    this.pubnub.getStatus(channelName, (st) => {
      console.log(st);
    });

    this.currentChannel = channelName;
  }

  public changeChannel(channelName: string): void {
    console.log('Going to unsubscribe from ' + this.currentChannel + ' channel');
    this.pubnub.unsubscribeAll();

    this.subscribe(channelName);
  }

  public stop() {
    console.log('Service PubnubService is being destroyed, stopping PubNub client instance');
    this.pubnub.stop();
  }
}
