import * as React from 'react';

interface Props {
    textToDisplay: string;
  }
  
const Route1: React.FunctionComponent<Props> = (props) => {
return <h1>{props.textToDisplay}</h1>;
};


export default Route1;