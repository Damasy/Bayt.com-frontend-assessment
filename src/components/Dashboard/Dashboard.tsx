import React, { Component } from 'react';
import Navbar from '../core/Navbar/Navbar';
import { widgets } from '../../init';
import { Widget } from '../../models/index';
import Card from '../core/Card/Card';
import Grid from '../core/Grid/Grid';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <h1>Dashboard</h1>
        <Grid>
          {
            widgets && widgets.map((widget: Widget) => (
              <Card widget={widget} key={widget.priority} />
            ))
          }
        </Grid>
      </div>
    );
  }
}

export default Dashboard;