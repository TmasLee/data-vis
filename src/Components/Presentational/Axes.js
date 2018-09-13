import React, {Component} from 'react';
import { axisBottom, axisRight } from 'd3-axis';
import { scaleBand, ScaleBand, scaleLinear, ScaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { Transition, transition as d3Transition } from 'd3-transition';

class Axes extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.drawAxes();
  }

  componentDidUpdate(){

  }

  getXScale = () => {
    this.xScale = scaleBand()
      .domain(sampleData)
      .rangeRound([0, 500])
      .padding(0.1);
    return this.xScale;
  }

  getYScale = () => {
    this.yScale = scaleBand()
      .domain(sampleData)
      .rangeRound([0,500])
      .padding(0.1);
    return this.yScale;
  }

  drawXAxis = () => {
    select(this.xAxisRef)
      .call(axisBottom(this.getXScale()));
  }

  drawYAxis = (initialDraw) => {
    if (initialDraw){
      select(this.yAxisRef).call(axisRight(this.getYScale()));
    } else {
      select(this.yAxisRef).call(axisRight(this.getYScale()));
    }
  }

  drawAxes = () => {
    this.drawXAxis();
    this.drawYAxis(true);

    // const svg = select(this.ref);
    // console.log(svg);
    // let x = scaleTime().range([0,this.props.x]);
    // let y = scaleLinear().range([this.props.y, 0]);
    // svg.append('g').attr('class', 'grid')
    //   .attr('transform', translate)
    // svg.append('g')
    //   .attr('transform', 'translate(0,'+this.props.y+')')
    //   .call(axisBottom(x));
  }

  render(){
    const {x,y} = this.props;
    return (
      <svg width={x} height={y}>
        <g ref={ref=>(this.xAxisRef = ref)}/>
        <g ref={ref=>(this.yAxisRef = ref)}/>
      </svg>
    )
  }
}

export default Axes;

let sampleData = [10,20,30,40,60,150];
