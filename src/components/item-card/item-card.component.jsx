import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ItemCard(props) {
  return (
    <Card style={{ width: '18rem', border: '1px solid black', margin: '10px', padding: '8px' }}>

      <Card.Img variant="top" src={props.item.image} />
      <Card.Body>
        <Card.Title><h3>{props.item.name}</h3></Card.Title>
        <Card.Text>
          {props.item.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;