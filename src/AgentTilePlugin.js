import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import * as flex from "@twilio/flex-ui";
import { connect } from "react-redux";
import reducers, { namespace } from './states';
import CustomAgentStats from "./components/CustomAgentStats/CustomAgentStats";
import QueueAgentStats from "./components/QueueAgentStats/QueueAgentStats";
import { ColumnDefinition } from '@twilio/flex-ui';


const PLUGIN_NAME = 'AgentTilePlugin';

export default class AgentTilePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
  * This code is run when your plugin is being started
  * Use this to modify any UI components or attach to the actions framework
  *
  * @param flex { typeof import('@twilio/flex-ui') }
  * @param manager { import('@twilio/flex-ui').Manager }
  */

  async init(flex, manager) {

    flex.QueuesStats.AggregatedQueuesDataTiles.Content.remove("agents-by-activity-chart-tile");
    flex.QueuesStats.AggregatedQueuesDataTiles.Content.add(<CustomAgentStats key="tasks-tile" />);
    flex.QueuesStats.QueuesDataTable.Content.remove("agents");
    flex.QueuesStats.QueuesDataTable.Content.add(
      <ColumnDefinition
      key="my-new-stats"
      name="Custom-Agents"
      header="New Stats"
      content={(queue) => <QueueAgentStats queue={queue} />}
      />, {sortOrder: 999}
    );

  }

  /**
  * Registers the plugin reducers
  *
  * @param manager { Flex.Manager }
  */

}
