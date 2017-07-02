import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = (data) => {
  return _.round(_.sum(data)/data.length);
}

export const Chart = (props) => {
  return(
    <div>
      <Sparklines data={ props.data } width={180} height={120}>
        <SparklinesLine color={ props.color } />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: { average(props.data) } { props.unit }</div>
    </div>
  );
}
