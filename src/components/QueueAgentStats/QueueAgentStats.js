import React from 'react';
import {
  Legend,
  templates,
  withTheme
} from '@twilio/flex-ui';

import { Container, Marker } from './QueueAgentsColumnCell.Components2.js'
import {
  getCount,
} from "./QueuesState";
import { connect } from 'react-redux';


class QueueAgentStats extends React.PureComponent {

  constructor(props) {
    super(props);
    const style = document.createElement('style');
    style.innerHTML = `.Twilio-DataTable-Header-Custom-Agents {
        width: 149px !important;
    }`;
    document.head.appendChild(style);
  }

  render() {
    const { queue, theme } = this.props;
    const { activity_statistics } = queue;

    const availableAgents = getCount(activity_statistics,"Available");
    const unavailableAgents = getCount(activity_statistics,"Unavailable");
    const offlineAgents = getCount(activity_statistics,"Offline");
    const holdAgents = getCount(activity_statistics,"Hold");
    const outboundAgents = getCount(activity_statistics,"Outbound");
    const inboundAgents = getCount(activity_statistics,"Inbound");
    const acwAgents = getCount(activity_statistics,"ACW");


    const items = [
      {
        value: availableAgents,
        label: templates.AgentStatusAvailable ? templates.AgentStatusAvailable() : "",
        color: theme ? theme.colors.agentAvailableColor : "",
        renderMarker: (props) => (
          <Marker
          color={props.color}
          icon="Accept"
          aria-label={
            templates.AgentStatusAvailable ? templates.AgentStatusAvailable() : "Available"
          }
          />
        )
      },
      {
        value: holdAgents,
        label: templates.AgentStatusHold ? templates.AgentStatusHold() : "Hold",
        color: theme ? theme.colors.agentAvailableColor : '',
        renderMarker: (props) => (
          <Marker
          color='Orange'
          icon="Hold"
          />
        )
      },

      {
        value: outboundAgents,
        label: templates.AgentStatusOutbound ? templates.AgentStatusOutbound() : "Outbound",
        color: theme ? theme.colors.agentAvailableColor : '',
        renderMarker: (props) => (
          <Marker
          color='Orange'
          icon="ArrowUp"
          />
        )
      },

      {
        value: inboundAgents,
        label: templates.AgentStatusInbound ? templates.AgentStatusInbound() : "Inbound",
        color: theme ? theme.colors.agentAvailableColor : '',
        renderMarker: (props) => (
          <Marker
          color='Orange'
          icon="ArrowDown"
          />
        )
      },

      {
        value: acwAgents,
        label: templates.AgentStatusACW ? templates.AgentStatusACW() : "ACW",
        color: theme ? theme.colors.agentAvailableColor : '',
        renderMarker: (props) => (
          <Marker
          color='Orange'
          icon="Directory"
          />
        )
      },
      {
        value: unavailableAgents,
        label: templates.AgentStatusUnavailable ? templates.AgentStatusUnavailable() : "AgentStatusUnavailable",
        color: theme ? theme.colors.agentUnavailableColor : '',
        renderMarker: (props) => (
          <Marker
          color={props.color}
          icon="Close"
          />
        )
      },
      {
        value: offlineAgents,
        label: templates.AgentStatusOffline ? templates.AgentStatusOffline() : "AgentStatusOffline",
        color: theme ? theme.colors.agentOfflineColor : '',
        renderMarker: (props) => (
          <Marker
          color={props.color}
          icon="Minus"
          />
        )
      }
    ];

    return (
      <Container>
      <Legend items={items} showLabels={false} />
      </Container>
    );

  }
}



export default withTheme(QueueAgentStats);
