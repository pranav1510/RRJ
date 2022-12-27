import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import OrderTaking from './pages/OrderTaking';
import CustomerInfo from './pages/CustomerInfo';
import ItemInfo from './pages/ItemInfo';
import PaymentDetails from './pages/PaymentDetails';
import HomePage from './pages/Homepage';
import DailyPrice from './pages/DailyPrice';

function App() {

  const title = "RRJ";
  const date = new Date().toLocaleDateString();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand className='title'>{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homepage">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Routes>
        <Route exact path='/homepage' element={<HomePage />}/>
        <Route exact path='/ordertaking' element={<OrderTaking date={date}/>}/>
        <Route exact path='/customerinfo' element={<CustomerInfo />}/>
        <Route exact path='/iteminfo' element={<ItemInfo date={date}/>}/>
        <Route exact path='/paymentdetails' element={<PaymentDetails date={date}/>}/>
        <Route exact path='/dailyprice' element={<DailyPrice date={date}/>}/>
      </Routes>
    </div>
  );
}

export default App;
