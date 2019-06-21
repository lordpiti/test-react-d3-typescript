import * as React from 'react';

interface Props {
    textToDisplay: string;
  }
  
  const Route2 = (props: Props) => {
    return <h1>{props.textToDisplay}</h1>;
}

export default Route2;