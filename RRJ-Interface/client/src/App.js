import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './features/LoginPage/LoginPage';
import HomePage from '../src/pages/Homepage';
import OrderTaking from '../src/pages/OrderTaking';
import CustomerInfo from '../src/pages/CustomerInfo';
import PaymentDetails from '../src/pages/PaymentDetails';
import DailyPrice from './features/DailyPrice/DailyPrice';
import InfoEntry from '../src/pages/InfoEntry';
import SearchInfo from '../src/pages/SearchInfo';
import { useSelector } from 'react-redux';
import OrderInfo from './pages/OrderInfo';
import TransactionInfo from './pages/TransactionInfo';
import CustomerUpdate from './pages/CustomerUpdate';
import ValidationPage from './pages/ValidationPage';
import Closing from './pages/Closing';
import AddEmployee from './pages/AddEmployee';

function App() {

  const title = "Rangu Rajaiah Jewellers";
  const names = ["LAXMINARSAIAH YEDULAPURAM", "RAVI KUMAR RANGU", "SRAVAN KUMAR RANGU"]
  const date = new Date();
  const val = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0")
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
                <Navbar.Brand className='title me-5'>{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav show">
                  <Nav className="d-flex">
                    <div className="d-flex me-auto">
                      <Nav.Link href="/homepage" className="mt-1">Home</Nav.Link>
                    </div>
                    <div className="d-flex ms-auto">
                      <Nav.Link disabled>
                        <div className="d-flex">
                        <p style={{fontSize: "20px"}} className="text-white m-0 ms-5">Gold :</p>
                        <p style={{fontSize: "20px"}} className="text-white m-0 ms-1">{goldprice}</p>
                        <p className="small m-0 ms-1 mt-2 text-secondary">/ 10gms</p>
                        </div>
                      </Nav.Link>
                      <Nav.Link>
                        <div className="d-flex">
                          <p style={{fontSize: "20px"}} className="text-white m-0 ms-2">Silver :</p>
                          <p style={{fontSize: "20px"}} className="text-white m-0 ms-1">{silverprice}</p>
                          <p className="small m-0 ms-1 mt-2 text-secondary">/ 10gms</p>
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
        <Route path='/' element={<LoginPage navigate={navigate}/>} />
        <Route path='homepage' element={<HomePage  navigate={navigate}/>}/>
        <Route path='ordertaking' element={<OrderTaking navigate={navigate} names={names}/>}/>
        <Route path='customerinfo' element={<CustomerInfo navigate={navigate}/>}/>
        <Route path='paymentdetails' element={<PaymentDetails date={val} navigate={navigate} names={names}/>}/>
        <Route path='dailyprice' element={<DailyPrice navigate={navigate}/>}/>
        <Route path='infoentry' element={<InfoEntry navigate={navigate}/>}/>
        <Route path='searchinfo' element={<SearchInfo navigate={navigate}/>}/>
        <Route path='orderinfo' element={<OrderInfo navigate={navigate} />} />
        <Route path='transactioninfo' element={<TransactionInfo navigate={navigate} />} />
        <Route path='customerupdate' element={<CustomerUpdate navigate={navigate}/>} />
        <Route path='validation' element={<ValidationPage date={val} navigate={navigate} />} />
        <Route path='closing' element={<Closing />} />
        <Route path='addemployee' element={<AddEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
