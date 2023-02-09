import { Card, CardText, CardTitle, Button } from 'reactstrap';
import './Table.css';

export default function Table({ title, content, date, onDelete }) {
  return (
    <Card className="notes-card">
      <CardTitle tag="h5">
        {title}
      </CardTitle>
      <CardText>
        {content}
      </CardText>
      <div className="footer">
        <CardText>
          <small>
            {date}
          </small>
        </CardText>
        <Button onClick={ () => onDelete(title)}>Delete</Button>
      </div>
    </Card>
  );
}

