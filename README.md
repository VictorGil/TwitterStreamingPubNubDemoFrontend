# PubNub demo application using Twitter Streaming API - frontend

This is the frontend part of the PubNub demo application which gets live tweets from the
Twitter Streaming API and publishes them using the PubNub Java API.  
This Angular application receives the Tweets via [PubNub](https://www.pubnub.com/) and displays them to the user in real time.  
  
Source code repository for the backend: [TwitterStreamingPubNubDemoBackend](https://github.com/VictorGil/TwitterStreamingPubNubDemoBackend).  
  
Explanatory video on [YouTube](https://youtu.be/A0QXLJFLzm4)  

## Requirements

 - Angular 7+  
 
## Usage

Please note that only the source code files are included in this repository and none of the javascript libraries/dependencies nor the Angular framework configuration files.  
  
Use the same PubNub **Publish key** and **Subscribe key** values used for the backend in the [pubnub.service.ts](https://github.com/VictorGil/TwitterStreamingPubNubDemoFrontend/blob/master/src/app/pubnub.service.ts#L33) file.  
Remember that you can get your keys for free by registering for a developer account on [pubnub.com](https://www.pubnub.com/).  
  
After having started the Java backend, start serving the frontend using the Angular CLI:
```
$ ng serve
```
Then you may access the application by pointing your Web browser to the standard Angular port: `http://localhost:4200/`  
