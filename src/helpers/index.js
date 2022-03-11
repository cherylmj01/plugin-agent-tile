import { Manager } from '@twilio/flex-ui';

const manager = Manager.getInstance();

export const isAvailableActivity = (activity) => {
  if (!activity) {
    return false;
  }

  const availableActivities = [
    'Ready For Queue',
    'On a Call',
    'Wrap Up'
  ];

  const activityMap = manager.store.getState().flex.worker.activities;
  const activities = activityMap ? Array.from(activityMap.values()) : [];

  const matchingActivity = activities.find(a => a.sid === activity.sid);

  return matchingActivity
    ? availableActivities.map(a => a.toLowerCase()).includes(matchingActivity.name.toLowerCase())
    : false;
};

export const getAvailableAgentCount = (activityStats) => {
  if (!activityStats) {
    return 0;
  }

  const count = activityStats
    .filter(a => isAvailableActivity(a))
    .reduce(activityWorkersReducer, 0);

  return isNaN(count) ? 0 : count;
};
