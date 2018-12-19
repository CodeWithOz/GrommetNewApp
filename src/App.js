import React, { Component } from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '100' }}
    {...props}
  />
);

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <AppBar>
          <Heading level="3" margin="none">
            Grommet Starter app
          </Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
      </Grommet>
    );
  }
}

export default App;
