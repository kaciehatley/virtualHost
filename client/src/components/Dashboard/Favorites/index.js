import React, { Component } from "react";
import { Header, Table, Icon } from "semantic-ui-react";
import { StyledHeader } from "./styledComponent";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFavs: [],
    };
  }
  removeFav = (id) => {
    console.log(id);
    // let newSet = this.props.favs.map((fav) => {
    //   if (fav.vendor_id === id) {
    //     console.log("found your favorite");
    //   } else {
    //     console.log("this is not your favorite");
    //     return fav;
    //   }
    // });
    // console.log(typeof newSet);
    // this.props.update({ notes: newSet });
  };
  render() {
    console.log("rendering favs", this.props.favs);
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <StyledHeader>Booth</StyledHeader>
            <StyledHeader>Favorites</StyledHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.favs !== undefined
            ? this.props.favs.map((favorite) => (
                <Table.Row className="hover">
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        {favorite.vendor_name}
                        <Header.Subheader>
                          {favorite.event_name}
                        </Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  {/* <Table.Cell>
                    {favorite.favorites}
                </Table.Cell> */}
                  <Table.Cell
                    onClick={() => this.removeFav(favorite.vendor_id)}
                  >
                    <Icon name="star" />
                  </Table.Cell>
                </Table.Row>
              ))
            : ""}
        </Table.Body>
      </Table>
    );
  }
}

export default Favorites;
