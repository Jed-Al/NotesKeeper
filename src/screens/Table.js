import { Card , CardBody, CardText, CardTitle } from 'reactstrap';
import './Table.css';

export default function Table({ title, content, date, onDelete }) {
  return (
    <Card className = "notes-card">
      <CardTitle tag="h5">
        {title}
      </CardTitle>
      <CardText>
        {content}
      </CardText>
      <CardText>
        <small className="text-muted">
          {date}
        </small>
      </CardText>
    </Card>
  );
}

