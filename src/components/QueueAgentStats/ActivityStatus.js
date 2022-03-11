import { Manager, TaskHelper } from '@twilio/flex-ui';

class FlexState {
  manager = Manager.getInstance();

  accountSid;

  get flexState() { return this.manager.store.getState().flex; }

  get workerActivities() {
   return this.flexState?.worker?.activities || new Map();
 }

 getActivityBySid = (activitySid) => {
   return this.workerActivities.get(activitySid);
 }

 isAnAvailableActivityBySid = (activitySid) => {
    return this.getActivityBySid(activitySid)?.available;
  }

}

const FlexStateSingleton = new FlexState();

export default FlexStateSingleton;
