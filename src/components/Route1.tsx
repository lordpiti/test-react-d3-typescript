import * as React from 'react';
import ReactTooltip from 'react-tooltip';

interface Props {
    textToDisplay: string;
  }
  
const Route1: React.FunctionComponent<Props> = (props) => {
return <>
    <h1>{props.textToDisplay}</h1>
    <a data-tip='custom show' data-event='click focus bu'>hhhhhhh</a>
    <ReactTooltip globalEventOff='click' />
  </>;
};


export default Route1;