import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/Homepage';
import OrderTaking from '../src/pages/OrderTaking';
import CustomerInfo from '../src/pages/CustomerInfo';
import PaymentDetails from '../src/pages/PaymentDetails';
import DailyPrice from './features/DailyPrice/DailyPrice';
import InfoEntry from '../src/pages/InfoEntry';
import SearchInfo from '../src/pages/SearchInfo';
import { useSelector } from 'react-redux';
import TransactionEntry from './pages/TransactionEntry';
import OrderInfo from './pages/OrderInfo';
import TransactionInfo from './pages/TransactionInfo';
import CustomerUpdate from './pages/CustomerUpdate';

function App() {

  const title = "RRJ";
  const date = String(new Date().getDate()).padStart(2, '0') + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate());
  const path = useLocation();
  const navigate = useNavigate();

  const goldprice = useSelector(state => state.DailyPrice.goldPrice)
  const silverprice = useSelector(state => state.DailyPrice.silverPrice)

  return (
    <div className="App">
      {
        path.pathname !== '/' ? (
          <>
          <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='title'>{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav show">
                  <Nav className="d-flex">
                    <div className="d-flex me-auto">
                      <Nav.Link href="/homepage">Home</Nav.Link>
                    </div>
                    <div className="d-flex ms-auto">
                      <Nav.Link disabled>
                        <div className="d-flex">
                        <p className="text-white m-0 ms-5">Gold :</p>
                        <p className="text-white m-0 ms-1">{goldprice}</p>
                        <p className="small m-0 ms-1 mt-1 text-secondary">/ 10gms</p>
                        </div>
                      </Nav.Link>
                      <Nav.Link>
                        <div className="d-flex">
                          <p className="text-white m-0 ms-2">Silver :</p>
                          <p className="text-white m-0 ms-1">{silverprice}</p>
                          <p className="small m-0 ms-1 mt-1 text-secondary">/ 10gms</p>
                        </div>
                      </Nav.Link>
                    </div>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
          </>
        ) : <></>
      }
      <Routes>
        <Route exact path='/' element={<LoginPage navigate={navigate}/>} />
        <Route exact path='/homepage' element={<HomePage  navigate={navigate}/>}/>
        <Route exact path='/ordertaking' element={<OrderTaking  date={date} navigate={navigate}/>}/>
        <Route exact path='/customerinfo' element={<CustomerInfo navigate={navigate}/>}/>
        <Route exact path='/paymentdetails' element={<PaymentDetails  date={date} navigate={navigate}/>}/>
        <Route exact path='/dailyprice' element={<DailyPrice date={date} navigate={navigate}/>}/>
        <Route exact path='/infoentry' element={<InfoEntry navigate={navigate}/>}/>
        <Route exact path='/searchinfo' element={<SearchInfo navigate={navigate}/>}/>
        <Route exact path='/transactionentry' element={<TransactionEntry navigate={navigate} />} />
        <Route exact path='/orderinfo' element={<OrderInfo navigate={navigate} />} />
        <Route exact path='/transactioninfo' element={<TransactionInfo navigate={navigate} />} />
        <Route exact path='/customerupdate' element={<CustomerUpdate navigate={navigate}/>} />
      </Routes>
    </div>
  );
}

export default App;
