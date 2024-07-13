import {Badge, Button} from 'react-bootstrap'

function Bdgmain() {
  return(
    <div className='comp'>
    <h2>This is Bdgmain Component</h2>
    <Badge bg="primary">Primary</Badge>
    </div>
  );
}

function Btnbadge() {
  return(
    <div className='comp'>
    <h2>This is Btnbadge Component</h2>
      <Button variant='primary'>
        Btnbadge <Badge bg='secondary'>8</Badge>
      </Button>
    </div>
  );
}

function Successbadge() {
  return(
    <div className='comp'>
    <h2>This is Successbadge Component</h2>
      <Badge bg='success'>Success Badge</Badge>
    </div>
  );
}

function Pillsuccessbadge() {
  return(
    <div className='comp'>
    <h2>This is Pillsuccessbadge Component</h2>
    <Successbadge/>
    <Badge bg='success' pill>Pill Success Badge</Badge>
    </div>
  );
}

function Passbadge() {
  return(
    <>
    <Badge bg='success'>Pass</Badge>
    </>
  );
}

function Failbadge() {
  return(
    <>
    <Badge bg='danger'>Fail</Badge>
    </>
  );
}

export default Bdgmain;
export {Btnbadge, Pillsuccessbadge, Passbadge, Failbadge};