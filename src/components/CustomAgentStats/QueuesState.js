import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import * as flex from "@twilio/flex-ui";
import { Manager } from '@twilio/flex-ui';
import { FlexModule } from '@twilio/flex-ui';
import FlexState from './activityStatus';


export function getCount(stats,name) {
  let count = 0 ;
  if(!stats) return 0;
  const activity_stats = stats.activity_statistics;
  //is a valid activity variable
  activity_stats.forEach((value) => {
    //For available :  get the count if  friendly name “Available”
    if(name == "Available" && FlexState.getActivityBySid(value.sid)) {
      if (value?.friendly_name === name && FlexState.getActivityBySid(value.sid) ) {
        count = value.workers;
      }
    }

    else if(name == "Hold") {
      if (value?.friendly_name === name && FlexState.getActivityBySid(value.sid) ) {
        count = value.workers;
        console.log('Peter',value);
      }
    }

    else if (name == "Unavailable") {
      if(FlexState.isAnAvailableActivityBySid(value.sid) === false && value?.friendly_name != "Offline"){
        count += value.workers;
      }
    }

    else if (name == "Offline" && FlexState.getActivityBySid(value.sid)){
      if (value?.friendly_name === name ) {
        count = value.workers;
      }
    }

    else if (name == "Outbound" && FlexState.getActivityBySid(value.sid)){

      if (value?.friendly_name === name ) {
        count += value.workers;

      }
    }

    else if (name == "Inbound" && FlexState.getActivityBySid(value.sid) ){
      if (value?.friendly_name === name ) {
        count += value.workers;
      }
    }

    else if (name == "ACW" && FlexState.getActivityBySid(value.sid) ){
      if (value?.friendly_name === name ) {
        count += value.workers;
      }
    }

  });
  return count;

}
