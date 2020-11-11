import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v4 as uuid} from 'uuid';

const ShoppingList = () => {
    const [items, setItems] = useState([
        {id: uuid(), name: "Eggs"},
        {id: uuid(), name: "Fruits"},
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Steak"},
        {id: uuid(), name: "Water"},
    ]);

    return(
        <Container>
            <Button color="dark" 
            style={{marginBottom: "2rem"}}
            onClick={() => {const name = prompt('Enter Item');
            if(name) {
                setItems([...items, {id: uuid(), name: name}])
            }} }>Add Item</Button>

            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map((item) => (
                        <CSSTransition key={item.id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button className="remove-btn mr-2" color="danger" size="small" onClick={() => setItems(items.filter(itm => itm.id !== item.id))}>&times;</Button>
                                {item.name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    );

}

export default ShoppingList;