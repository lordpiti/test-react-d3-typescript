import * as React from 'react';
import * as d3 from 'd3';
import ReactTooltip from 'react-tooltip';

interface Props {
    textToDisplay: string;
    width: number;
    height: number;
  }

interface DataItem {
    x: number;
    y: number;
    r: number;
    colour: number;
}

interface ThisState {
    data: DataItem[];
    name?: string;
}
  
class ChartTest extends React.Component<Props, ThisState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            data: this.getData(),
            name: undefined
        };
    }

    private fooRef = React.createRef<HTMLDivElement>();
    
    render() {

        let colours = ['#2176ae', '#57b8ff', '#b66d0d', '#fbb13c', '#fe6847']

        let maxRadius = 40;
        let xScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.width])
        let yScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.height])
        let rScale = d3.scaleLinear().domain([0, 1]).range([0, maxRadius])
      
        let points = this.state.data.map(d => <circle
                                                cx={xScale(d.x)}
                                                cy={yScale(d.y)}
                                                r={rScale(d.r)}
                                                fill={colours[d.colour]} />);

        const checkValidation = () => {
            if (this.state.name && this.state.name.length === 1) {
                ReactTooltip.show(this.fooRef.current as Element);
            }
            else {
                ReactTooltip.hide(this.fooRef.current as Element)
            }
        }

        return <div>
            <div>{this.state.name}</div>
            <input onChange={(event) => {
                this.setState({
                    name: event.target.value
                })
             }} />
            <div ref={this.fooRef} data-tip='tooltip' data-event='jh'>hahaha</div>
            <button onClick={() => checkValidation() }>CLICK</button>
            <ReactTooltip />
        </div>

    }

    getData() {
        let numItems = 20 + Math.floor(20 * Math.random())
        let data = []
        for(let i=0; i<numItems; i++) {
          data.push({
            x: Math.random(),
            y: Math.random(),
            r: Math.random(),
            colour: i % 5
          } as DataItem)
        }
        return data
      }
}


export default ChartTest;