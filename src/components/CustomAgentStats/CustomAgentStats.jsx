import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  AggregatedDataTile,
  StackedBarChart,
  Legend,
  withTheme,
  templates,
  Template,
  LegendLabelPosition as LabelPosition,
} from '@twilio/flex-ui';
import { Marker } from './CustomAgentStats.Styles';
import {
  getCount,
} from "./QueuesState";


class CustomAgentStats extends React.Component  {

  render() {

    const { availableAgents, unavailableAgents, offlineAgents, holdAgents, outboundAgents, inboundAgents , acwAgents, theme } = this.props;

    const mappedProps = [
      {
        value: availableAgents,
        label: templates.AgentStatusAvailable ? templates.AgentStatusAvailable() : "Available",
        color: theme ? theme.colors.agentAvailableColor : '',
        renderMarker: (props) => (
          <Marker
          color={props.color}
          icon="Accept"
          />
        )
      },
      {
        value: holdAgents,
        label: templates.AgentStatusHold ? templates.AgentStatusHold() : "Hold",
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

    const stackedBarChartmappedProps = [
      {
        value: availableAgents,
        label: templates.AgentStatusAvailable ? templates.AgentStatusAvailable() : "Available",
        color: theme ? theme.colors.agentAvailableColor : ''
      },
      {
        value: holdAgents,
        label: templates.AgentStatusHold ? templates.AgentStatusHold() : "Hold",
        color: 'Orange'
      },
      {
        value: outboundAgents,
        label: templates.AgentStatusOutbound ? templates.AgentStatusOutbound() : "Outbound",
        color: 'Orange',
      },
      {
        value: inboundAgents,
        label: templates.AgentStatusInbound ? templates.AgentStatusInbound() : "Inbound",
        color: 'Orange',
      },
      {
        value: acwAgents,
        label: templates.AgentStatusACW ? templates.AgentStatusACW() : "ACW",
        color: 'Orange',
      },
      {
        value: unavailableAgents,
        label: templates.AgentStatusUnavailable ? templates.AgentStatusUnavailable() : "AgentStatusUnavailable",
        color: theme ? theme.colors.agentUnavailableColor : '',
      },
      {
        value: offlineAgents,
        label: templates.AgentStatusOffline ? templates.AgentStatusOffline() : "AgentStatusOffline",
        color: theme ? theme.colors.agentOfflineColor : ''
      }
    ];



    return (
      <AggregatedDataTile title={<Template source={templates.AgentsByActivityTileTitle} />}>
      <StackedBarChart items={stackedBarChartmappedProps} />
      <Legend items={mappedProps} labelPosition='start' showLabels />
      </AggregatedDataTile>
    );
  }

}

const mapStateToProps = state => {
  // isOpen: state['cheryl-test'].CustomAgentStats.isOpen,
  const stats = state.flex.realtimeQueues.workspaceStats;
  const worker = state.flex.worker;

  return {
    availableAgents: getCount(stats,"Available"),
    unavailableAgents: getCount(stats,"Unavailable"),
    offlineAgents: getCount(stats,"Offline"),
    holdAgents: getCount(stats,"Hold"),
    outboundAgents: getCount(stats,"Outbound"),
    inboundAgents: getCount(stats,"Inbound"),
    acwAgents: getCount(stats,"ACW")
  };

};


export default connect(mapStateToProps)(withTheme(CustomAgentStats));
