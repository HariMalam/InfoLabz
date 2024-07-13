import { Table } from "react-bootstrap";
import { Failbadge, Passbadge } from "./Navbar";

function Resulttable() {
  return (
    <>
      <h2>This is Resulttable Component</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Student Name</th>
            <th>Maths Mark</th>
            <th>Phy Marks</th>
            <th>Chem Marks</th>
            <th>Pass/Fail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Malam Hari</td>
            <td>90</td>
            <td>70</td>
            <td>75</td>
            <td>
              <Passbadge />
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Mane Dhruv</td>
            <td>22</td>
            <td>50</td>
            <td>90</td>
            <td>
              <Failbadge/>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Rathod Ashvin</td>
            <td>95</td>
            <td>85</td>
            <td>90</td>
            <td>
              <Passbadge />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Resulttable;
