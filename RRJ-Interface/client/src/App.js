import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import OrderTaking from './pages/OrderTaking';
import CustomerInfo from './pages/CustomerInfo';
import PaymentDetails from './pages/PaymentDetails';
import HomePage from './pages/Homepage';
import DailyPrice from './pages/DailyPrice';
import InfoEntry from './pages/InfoEntry';
import SearchInfo from './pages/SearchInfo';
import LoginPage from './pages/LoginPage';

function App() {

  const title = "RRJ";
  const date = new Date().toLocaleDateString();
  const path = useLocation();
  const navigate = useNavigate();

  return (
    <div className="App">
      {
        path.pathname !== '/' ? (
          <>
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
          </>
        ) : <></>
      }
      <Routes>
        <Route exact path='/' element={<LoginPage navigate={navigate}/>} />
        <Route exact path='/homepage' element={<HomePage navigate={navigate}/>}/>
        <Route exact path='/ordertaking' element={<OrderTaking date={date}/>}/>
        <Route exact path='/customerinfo' element={<CustomerInfo />}/>
        <Route exact path='/paymentdetails' element={<PaymentDetails date={date}/>}/>
        <Route exact path='/dailyprice' element={<DailyPrice date={date}/>}/>
        <Route exact path='/infoentry' element={<InfoEntry navigate={navigate}/>}/>
        <Route exact path='/searchinfo' element={<SearchInfo />}/>
      </Routes>
    </div>
  );
}

export default App;
