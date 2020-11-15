import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import {v4 as uuid} from 'uuid';
import { connect } from "react-redux";
import { getItems, deleteItem, addItem } from "../redux/actions/items";
import PropTypes from "prop-types";
import ItemModal from "./itemModal";

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.getItems();
  }

  handleDelete(id) {
    this.props.deleteItem(id);
  }

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <ItemModal addItem={this.props.addItem} />
        {/* <Main /> */}
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map((item) => (
              <CSSTransition key={item._id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn mr-2"
                    color="danger"
                    size="small"
                    onClick={() => this.handleDelete(item._id)}
                  >
                    &times;
                  </Button>
                  {item.name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem, addItem })(
  ShoppingList
);
