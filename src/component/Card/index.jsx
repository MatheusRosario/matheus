import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'



function BasicExample(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagem} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, illo laudantium! Dicta tenetur facilis in magnam natus itaque libero id quod ducimus beatae quisquam blanditiis eveniet, impedit cum voluptates laudantium?
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;