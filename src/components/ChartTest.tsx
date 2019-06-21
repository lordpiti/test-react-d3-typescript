import * as React from 'react';
import * as d3 from 'd3';

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
}
  
class ChartTest extends React.Component<Props, ThisState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            data: this.getData()
        };
    }
    
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
                                                fill={colours[d.colour]} />)

        return <div>
            <svg width={this.props.width} height={this.props.height}>{points}</svg>
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