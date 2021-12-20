import React, { Component } from 'react';
import Navbar from '../core/Navbar/Navbar';
import { Widget } from '../../models/index';
import Card from '../core/Card/Card';
import Grid from '../core/Grid/Grid';
import Chart from '../core/Chart';
import Numeric from '../core/Numeric';
import { mappedWidgets, handleChartOptions } from '../../services/Widget-factory';
import { fetchData } from '../../services/Data-fetch';

class Dashboard extends Component {

  state = {
    widgets: []
  }

  componentDidMount() {
    const data: any[] = mappedWidgets();
    data.forEach((widget: Widget, index: number) => {  
      if(typeof widget.datasource === "string") {
        debugger
        fetchData(widget.datasource).then(res => res.json()).then((res: any) => {
          debugger
          widget.datasource = res;
          data.splice(index, 1, widget);
          this.setState({widgets: data});
        });
      }
    })
    this.setState({widgets: data});
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{padding: '0 1rem'}}>Dashboard</h1>
        <Grid>
          {
            this.state.widgets.map((widget: Widget, index: number) => {
              return (
                <Card widget={widget} key={index}>
                  {
                    (widget.title && widget.title.toLowerCase() !== 'numeric') &&
                    <Chart options={handleChartOptions(widget)} />
                  }
                  {
                    (widget.title && widget.title.toLowerCase() === 'numeric') &&
                    <Numeric data={widget.datasource[0]} />
                  }
                </Card>
              )
            })
          }
        </Grid>
      </div>
    );
  }
}

export default Dashboard;