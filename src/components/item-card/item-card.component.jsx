import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


/**
 * 
 * @param {{
 * item:{
 * name: string,
 * price: number,
 * description: string,
 * category: string,
 * ingredients: string[],
 * image: string
 * };
 * }} props 
 * @returns 
 */
function ItemCard(props) {
  return (
    <Card style={{ width: '18rem', border: '1px solid black', margin: '10px', padding: '8px' }}>

      <Card.Img variant="top" src={props.item.image} />
      <Card.Body>
        <Card.Title><h3>{props.item.name}</h3></Card.Title>
        <Card.Text>
          {props.item.description}
          {
            props.item.ingredients.map(item => {
              return <span> {item} </span>;
            })
          }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;