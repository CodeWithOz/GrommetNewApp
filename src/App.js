import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext
} from 'grommet';
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
    },
    breakpoints: {
      small: {
        value: 576
      }
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
  state = { showSidebar: false };

  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  Grommet Starter app
                </Heading>
                <Button
                  icon={<Notification />}
                  onClick={() =>
                    this.setState({ showSidebar: !this.state.showSidebar })
                  }
                />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align="center" justify="center">
                  app body
                </Box>
                {size !== 'small' && (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
