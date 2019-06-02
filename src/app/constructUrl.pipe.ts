import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'constructUrl'
  })
  export class ConstructUrlPipe implements PipeTransform {
    transform(twitterUserScreenName: string, tweetId: string): string {
      return 'https://twitter.com/' + twitterUserScreenName + '/status/' + tweetId ;
    }
  }
