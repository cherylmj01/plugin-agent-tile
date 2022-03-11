import React from 'react';
import styled from 'react-emotion';
import { Icon } from '@twilio/flex-ui';

export const Container = styled("div")`
  font-weight: bold;
`

export const TableContainer = styled("div")`
    .Twilio-DataTable-Header-Custom-Agents {
        width: 1px !important;
        background-color: black !important;
    }
    ${(props) => props.theme.QueuesStats.TableContainer}
`;


const Disc = styled("dt")`
    height: 25px;
    width: 25px;
    line-height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.color || props.theme.calculated.textColor};
    margin-right: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    color: white;
`;

export const Marker = (props) => {
  const { icon, ref, ...rest } = props;
  return (
      <Disc {...rest}>
          <Icon icon={icon} sizeMultiplier={1} />
      </Disc>
  );
};
