import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Image, Grid, Divider, List } from 'semantic-ui-react';

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <Menu borderless className='topmenu'>
            <Container>
              <Menu.Item><Image src='http://luckybelly.com/img/lucky-logo-light.png' /></Menu.Item>
              <Menu.Item position="right">Menus</Menu.Item>
              <Menu.Item>Info</Menu.Item>
              <Menu.Item>Breaking Bread Hospitality</Menu.Item>
            </Container>
          </Menu>


                <Image fluid src='http://luckybelly.com/img/bellybowl.jpg' />

          <div className="footer">
            <Grid columns={3}>
              <Grid.Column>
                <Image centered src='http://luckybelly.com/img/lucky-logo-light.png' />
              </Grid.Column>

              <Grid.Column>
                Links
                <Divider inverted />
                <List>
                  <List.Item>Hours</List.Item>
                  <List.Item>Menus</List.Item>
                  <List.Item>Reservations</List.Item>
                  <List.Item>Corkage</List.Item>
                  <List.Item>Contact</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                Contact
                <Divider  inverted/>
                <List>
                  <List.Item>808-531-1888</List.Item>
                  <List.Item>eat@luckybelly.com</List.Item>
                  <List.Item>50 N. Hotel St. Honolulu, HI 96817</List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));