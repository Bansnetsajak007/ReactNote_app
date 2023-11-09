//dummy component

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NoteCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Note</Card.Title>
        <Card.Text>
          Some quick example text of Note.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default NoteCard;