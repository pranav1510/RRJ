import './App.css';
import { Navbar, Container, Nav, Modal, Table, Button } from 'react-bootstrap';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './features/LoginPage/LoginPage';
import HomePage from '../src/pages/Homepage';
import OrderTaking from '../src/pages/OrderTaking';
import CustomerInfo from '../src/pages/CustomerInfo';
import PaymentDetails from '../src/pages/PaymentDetails';
import DailyPrice from './features/DailyPrice/DailyPrice';
import InfoEntry from '../src/pages/InfoEntry';
import SearchInfo from '../src/pages/SearchInfo';
import { useDispatch, useSelector } from 'react-redux';
import OrderInfo from './pages/OrderInfo';
import TransactionInfo from './pages/TransactionInfo';
import CustomerUpdate from './pages/CustomerUpdate';
import ValidationPage from './pages/ValidationPage';
import Closing from './pages/Closing';
import AddEmployee from './pages/AddEmployee';
import { setOrderShow, setStatusShow, setTransactionShow, setPendingOrders, setPendingTransactions } from './features/LoginPage/LoginPageSlice';
import axios from 'axios';
import { useReducer } from 'react';
import ItemUpdate from './pages/ItemUpdate';

function App() {

  const title = "Rangu Rajaiah Jewellers";
  const names = ["LAXMINARSAIAH YEDULAPURAM", "RAVI KUMAR RANGU", "SRAVAN KUMAR RANGU"]
  const date = new Date();
  const val = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0")
  const path = useLocation();
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const goldprice = useSelector(state => state.DailyPrice.goldPrice)
  const silverprice = useSelector(state => state.DailyPrice.silverPrice)
  const pendingorders = useSelector(state => state.LoginPage.pendingOrders)
  const pendingtransactions = useSelector(state => state.LoginPage.pendingTransactions)
  const statusshow = useSelector(state => state.LoginPage.statusShow)
  const ordershow = useSelector(state => state.LoginPage.orderShow)
  const transactionshow = useSelector(state => state.LoginPage.transactionShow)

  const handlePendingShow = () => {dispatcher(setStatusShow(false))}

  const initialState = {
    orderDetailsShow: false,
    message: "",
    orderIn: {},
    itemDetails: [],
    itemShow: false,
    itemDetailsShow: false,
    itemin: {},
    orderUpdate: false,
    itemUpdate: false,
    transin: {},
    transDetailsShow: false,
    transUpdate: false,
    val: true
  }

  const ACTIONS = {
    MESSAGE: "MESSAGE",
    ORDER_DETAILS_SHOW: "ORDER_DETAILS_SHOW",
    ORDER_IN: "ORDER_IN",
    ITEM_DETAILS: "ITEM_DETAILS",
    ITEM_SHOW: "ITEM_SHOW",
    ITEM_DETAILS_SHOW: "ITEM_DETAILS_SHOW",
    ITEM_IN: "ITEM_IN",
    ORDER_UPDATE: "ORDER_UPDATE",
    ITEM_UPDATE: "ITEM_UPDATE",
    TRANS_IN: "TRANS_IN",
    TRANS_DETAILS_SHOW: "TRANS_DETAILS_SHOW",
    VAL: "VAL",
    TRANS_UPDATE: "TRANS_UPDATE"
  }

  const reducer = (state, {type,payload}) => {
    switch(type){
      case ACTIONS.MESSAGE:
        return {...state, message: payload}
      case ACTIONS.ORDER_DETAILS_SHOW:
        return {...state, orderDetailsShow: payload}
      case ACTIONS.ORDER_IN:
        return {...state, orderIn: payload}
      case ACTIONS.ITEM_DETAILS:
        return {...state, itemDetails: payload}
      case ACTIONS.ITEM_SHOW:
        return {...state, itemShow: payload}
      case ACTIONS.ITEM_DETAILS_SHOW:
        return {...state, itemDetailsShow: payload}
      case ACTIONS.ITEM_IN:
        return {...state, itemin: payload}
      case ACTIONS.ORDER_UPDATE:
        return {...state, orderUpdate: payload}
      case ACTIONS.ITEM_UPDATE:
        return {...state, itemUpdate: payload}
      case ACTIONS.TRANS_IN:
        return {...state, transin: payload}
      case ACTIONS.TRANS_DETAILS_SHOW:
        return {...state, transDetailsShow: payload}
      case ACTIONS.TRANS_UPDATE:
        return {...state, transUpdate: payload}
      case ACTIONS.VAL:
        return {...state, val: payload}
      default:
        return state
    }
  }

  const [newState, dispatch] = useReducer(reducer, initialState)

  const handleOrderDetailsShow = () => {dispatch({type:ACTIONS.ORDER_DETAILS_SHOW, payload: false})}
  const handleOrderUpdate = () => {dispatch({type:ACTIONS.ORDER_UPDATE, payload: false})}
  const handleItemshow = () => {dispatch({type:ACTIONS.ITEM_SHOW, payload: false})}
  const handleItemDetailsShow = () => {dispatch({type:ACTIONS.ITEM_DETAILS_SHOW, payload: false})}
  const handleItemUpdate = () => {dispatch({type:ACTIONS.ITEM_UPDATE, payload: false})}
  const handleTransDetailsShow = () => {dispatch({type:ACTIONS.TRANS_DETAILS_SHOW, payload: false})}
  const handleTransUpdate = () => {dispatch({type:ACTIONS.TRANS_UPDATE, payload: false})}

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
                    <div className="d-flex">
                      <Nav.Link disabled>
                        <div className="d-flex">
                        <p style={{fontSize: "20px"}} className="text-white m-0 ms-5">Gold :</p>
                        <p style={{fontSize: "20px"}} className="text-white m-0 ms-1">{goldprice}</p>
                        <p className="small m-0 ms-1 mt-2 text-secondary">/ 10gms</p>
                        </div>
                      </Nav.Link>
                      <Nav.Link disabled>
                        <div className="d-flex">
                          <p style={{fontSize: "20px"}} className="text-white m-0 ms-2">Silver :</p>
                          <p style={{fontSize: "20px"}} className="text-white m-0 ms-1">{silverprice}</p>
                          <p className="small m-0 ms-1 mt-2 text-secondary">/ 10gms</p>
                        </div>
                      </Nav.Link>
                    </div>
                    <div className="ms-auto">
                      <Nav.Link style={{color: "aqua"}} className="mt-1 ms-5 text-decoration-underline" onClick={() => {
                        axios.get("http://localhost:8080/OrderTaking/pendingorders")
                          .then(res => {dispatcher(setPendingOrders(res.data))}).catch(err => console.log(err))
                        axios.get("http://localhost:8080/PaymentInfo/pendingtransactions")
                          .then(res => {dispatcher(setPendingTransactions(res.data))}).catch(err => console.log(err))
                        dispatcher(setStatusShow(true))
                        }}>
                        Pending Orders
                      </Nav.Link>
                    </div>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
          </>
        ) : <></>
      }
      <Modal show={statusshow} hide={handlePendingShow} className="modal-xl">
        <Modal.Header>
          <Modal.Title>Pending Orders and Transactions</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "450px", overflow: "hidden", overflowY: "auto"}}>
          <Nav className="nav-tabs">
            <Nav.Link active={ordershow ? true : false} onClick={() => {
              dispatcher(setTransactionShow(false))
              dispatcher(setOrderShow(true))
            }}>Pending Orders</Nav.Link>
            <Nav.Link active={transactionshow ? true : false} onClick={() => {
              dispatcher(setOrderShow(false))
              dispatcher(setTransactionShow(true))
            }}>Pending Transactions</Nav.Link>
          </Nav>
          {
            ordershow ? (
              (pendingorders[0] !== undefined) ? (
                <Table className="table-hover w-100 mt-1 small">
                  <thead>
                  <tr>
                      <th scope="col">Order Id</th>
                      <th scope="col">Customer Full Name</th>
                      <th scope="col">Expected Delivery date</th>
                      <th scope="col">Order Status</th>
                      <th scope="col">Order Received By</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      pendingorders.map((info, index) => {
                        return(
                          <tr key={index} style={{cursor: "pointer"}} onClick={() => {
                            dispatch({type:ACTIONS.ORDER_IN, payload: info})
                            dispatch({type:ACTIONS.ORDER_DETAILS_SHOW, payload: true})
                          }}>
                            <td>{info.orderId}</td>
                            <td>{info.customerFullName}</td>
                            <td>{info.expectedDeliveryDate}</td>
                            <td>{info.orderStatus}</td>
                            <td>{info.orderReceivedBy}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              ) : <p className="d-flex justify-content-center text-danger mt-5">Orders not found!</p>
            ) : <></>
          }
          {
            transactionshow ? (
              (pendingtransactions[0] !== undefined) ? (
                <Table className="table-hover w-100 mt-1 small">
                  <thead>
                  <tr>
                    <th scope="col">Payment Id</th>
                    <th scope="col">Customer Full Name</th>
                    <th scope="col">Customer Mobile</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      pendingtransactions.map((info, index) => {
                        return(
                          <tr key={index} style={{cursor: "pointer"}} onClick={() => {
                            dispatch({type:ACTIONS.TRANS_IN, payload: info})
                            dispatch({type:ACTIONS.TRANS_DETAILS_SHOW, payload: true})
                          }}>
                            <td>{info.paymentId}</td>
                            <td>{info.customerFullName}</td>
                            <td>{info.customerMobile}</td>
                            <td>{info.paymentDescription}</td>
                            <td>{info.status}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              ) : <p className="d-flex justify-content-center text-danger mt-5">Transactions not found!</p>
            ) : <></>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handlePendingShow}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={newState.orderDetailsShow} onHide={handleOrderDetailsShow}>
        <Modal.Header closeButton>
            <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
            <Table className="table-hover w-100 mt-1 small">
                <tbody>
                    <tr>
                        <th>Order Id</th>
                        <td>{newState.orderIn.orderId}</td>
                    </tr>
                    <tr>
                        <th>Gold Cost</th>
                        <td>{newState.orderIn.goldCost}</td>
                    </tr>
                    <tr>
                        <th>Silver Cost</th>
                        <td>{newState.orderIn.silverCost}</td>
                    </tr>
                    <tr>
                        <th>Expected Delivery Date</th>
                        <td>{newState.orderIn.expectedDeliveryDate}</td>
                    </tr>
                    <tr>
                        <th>Customer Name</th>
                        <td>{newState.orderIn.customerFullName}</td>
                    </tr>
                    <tr>
                        <th>Customer Mobile</th>
                        <td>{newState.orderIn.customerMobile}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{newState.orderIn.orderStatus}</td>
                    </tr>
                    <tr>
                        <th>GST</th>
                        <td>{newState.orderIn.gst}</td>
                    </tr>
                    <tr>
                        <th>Customer Remarks</th>
                        <td>{newState.orderIn.customerRemarks}</td>
                    </tr>
                    <tr>
                        <th>Order Receiver Remarks</th>
                        <td>{newState.orderIn.orderReceiverRemarks}</td>
                    </tr>
                    <tr>
                        <th>Order Entered By</th>
                        <td>{newState.orderIn.orderEnteredBy}</td>
                    </tr>
                    <tr>
                        <th>Order Received By</th>
                        <td>{newState.orderIn.orderReceivedBy}</td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="info" onClick={() => {
                axios.post("http://localhost:8080/ItemInfo/getitems", newState.orderIn)
                    .then(res => {
                        if(res.data[0] === undefined){
                            dispatch({type:ACTIONS.MESSAGE, payload: "Items not found!"})
                        } else {
                            dispatch({type:ACTIONS.ITEM_DETAILS, payload: res.data})
                            dispatch({type:ACTIONS.ORDER_DETAILS_SHOW, payload: false})
                            dispatch({type:ACTIONS.ITEM_SHOW, payload: true})
                        }
                    })
                    .catch(err => console.log(err))
            }}>Get Item Details</Button>
            <div className="row"><h5 className="text-danger d-flex flex-row justify-content-center mt-4">{newState.message}</h5></div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleOrderDetailsShow}>
            Close
            </Button>
            <Button variant="primary" onClick={() => {
                handlePendingShow()
                handleOrderDetailsShow()
                dispatch({type:ACTIONS.ORDER_UPDATE, payload: true})
                if(newState.message !== ""){dispatch({type:ACTIONS.MESSAGE, payload: ""})}
            }}>Modify</Button>
        </Modal.Footer>
    </Modal>
    <Modal show={newState.orderUpdate} onHide={handleOrderUpdate} className="modal-xl">
        <Modal.Header closeButton>
            <Modal.Title>Order Update</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
            <OrderTaking order = {newState.orderIn} />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleOrderUpdate}>
            Close
            </Button>
        </Modal.Footer>
    </Modal>
    <Modal show={newState.itemShow} onHide={handleItemshow} className="modal-xl">
      <Modal.Header closeButton>
          <Modal.Title>Item Details</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{height: "450px", overflow: "hidden", overflowY: "auto"}}>
          <Table>
              <thead>
                  <tr>
                      <th scope="col">Item Id</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Item Type</th>
                      <th scope="col">Item Price</th>
                      <th scope="col">Item Entered By</th>
                      <th scope="col">Item Status</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      newState.itemDetails.map((item, index) => {
                          return(
                              <tr key={index} style={{"cursor":"pointer"}} onClick={() => {
                                  dispatch({type:ACTIONS.ITEM_IN, payload: item})
                                  dispatch({type:ACTIONS.ITEM_DETAILS_SHOW, payload: true})
                              }}>
                                  <td>{item.itemId}</td>
                                  <td>{item.itemName}</td>
                                  <td>{item.itemType}</td>
                                  <td>{item.itemPrice}</td>
                                  <td>{item.itemEnteredBy}</td>
                                  <td>{item.itemStatus}</td>
                              </tr>
                          )
                      })
                  }
              </tbody>
          </Table>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleItemshow}>
          Close
          </Button>
      </Modal.Footer>
  </Modal>
  <Modal show={newState.itemDetailsShow} onHide={handleItemDetailsShow}>
    <Modal.Header closeButton>
    <Modal.Title>Item Details</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
        <Table className="table-hover w-100 mt-1 small" >
            <tbody>
                <tr>
                    <th>Item Id</th>
                    <td>{newState.itemin.itemId}</td>
                </tr>
                <tr>
                    <th>Item Name</th>
                    <td>{newState.itemin.itemName}</td>
                </tr>
                <tr>
                    <th>Item Type</th>
                    <td>{newState.itemin.itemType}</td>
                </tr>
                <tr>
                    <th>Item Delivery Date</th>
                    <td>{newState.itemin.itemDeliveryDate}</td>
                </tr>
                <tr>
                    <th>Item Price</th>
                    <td>{newState.itemin.itemPrice}</td>
                </tr>
                <tr>
                    <th>Item Status</th>
                    <td>{newState.itemin.itemStatus}</td>
                </tr>
                <tr>
                    <th>Item Entered By</th>
                    <td>{newState.itemin.itemEnteredBy}</td>
                </tr>
                <tr>
                    <th>Customer Comments</th>
                    <td>{newState.itemin.customerComments}</td>
                </tr>
                <tr>
                    <th>Order Receiver Comments</th>
                    <td>{newState.itemin.orderReceiverComments}</td>
                </tr>
                <tr>
                    <th>Making Charges</th>
                    <td>{newState.itemin.makingCharges}</td>
                </tr>
                <tr>
                    <th>Item Gross Weight</th>
                    <td>{newState.itemin.itemGrossWeight}</td>
                </tr>
                <tr>
                    <th>Item Net Weight</th>
                    <td>{newState.itemin.itemNetWeight}</td>
                </tr>
                <tr>
                    <th>Wastage</th>
                    <td>{newState.itemin.wastage}</td>
                </tr>
                <tr>
                    <th>Pearls Weight</th>
                    <td>{newState.itemin.pearlsWeight}</td>
                </tr>
                <tr>
                    <th>Pearls Cost</th>
                    <td>{newState.itemin.pearlsCost}</td>
                </tr>
                <tr>
                    <th>Stones Type</th>
                    <td>{newState.itemin.stonesType}</td>
                </tr>
                <tr>
                    <th>Cz Cost</th>
                    <td>{newState.itemin.czCost}</td>
                </tr>
                <tr>
                    <th>Emerald Cost</th>
                    <td>{newState.itemin.emeraldCost}</td>
                </tr>
                <tr>
                    <th>Ruby Cost</th>
                    <td>{newState.itemin.rubyCost}</td>
                </tr>
                <tr>
                    <th>Overall Stone Weight</th>
                    <td>{newState.itemin.overallStoneWeight}</td>
                </tr>
                <tr>
                    <th>Overall Stone Cost</th>
                    <td>{newState.itemin.overallStoneCost}</td>
                </tr>
            </tbody>
        </Table>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleItemDetailsShow}>
        Close
    </Button>
    <Button variant="primary" onClick={() => {
        handleItemDetailsShow()
        handleItemshow()
        dispatch({type:ACTIONS.ITEM_UPDATE, payload: true})
    }}>
        Modify
    </Button>
    </Modal.Footer>
</Modal>
<Modal show={newState.itemUpdate} onHide={handleItemUpdate} className="modal-xl">
  <Modal.Header closeButton>
      <Modal.Title>Item Update</Modal.Title>
  </Modal.Header>
  <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
      <ItemUpdate item = {newState.itemin} />
  </Modal.Body>
  <Modal.Footer>
      <Button variant="secondary" onClick={handleItemUpdate}>
      Close
      </Button>
  </Modal.Footer>
</Modal>
<Modal show={newState.transDetailsShow} onHide={handleTransDetailsShow}>
  <Modal.Header closeButton>
  <Modal.Title>Transaction Details</Modal.Title>
  </Modal.Header>
  <Modal.Body  style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
  <Table className="table-hover w-100 mt-1 small">
      <tbody>
          <tr>
              <th>Payment Id</th>
              <td>{newState.transin.paymentId}</td>
          </tr>
          <tr>
              <th>Transaction Type</th>
              <td>{newState.transin.transactionType}</td>
          </tr>
          <tr>
              <th>Payment Purpose</th>
              <td>{newState.transin.paymentPurpose}</td>
          </tr>
          <tr>
              <th>Sent Type</th>
              <td>{newState.transin.sentType}</td>
          </tr>
          <tr>
              <th>Received Type</th>
              <td>{newState.transin.paymentType}</td>
          </tr>
          <tr>
              <th>Customer Name</th>
              <td>{newState.transin.customerFullName}</td>
          </tr>
          <tr>
              <th>Customer Mobile</th>
              <td>{newState.transin.customerMobile}</td>
          </tr>
          {
              (newState.transin.transactionType === "Order Related") ? (
                  <>
                  <tr>
                      <th>Order Id</th>
                      <td>{newState.transin.orderId}</td>
                  </tr>
                  <tr>
                      <th>Order Price</th>
                      <td>{newState.transin.orderPrice}</td>
                  </tr>
                  </>
              ) : <></>
          }
          <tr>
              <th>Payment Date</th>
              <td>{newState.transin.paymentDate}</td>
          </tr>
          <tr>
              <th>Gold Weight</th>
              <td>{newState.transin.goldWeight}</td>
          </tr>
          <tr>
              <th>Silver Weight</th>
              <td>{newState.transin.silverWeight}</td>
          </tr>
          <tr>
              <th>Amount</th>
              <td>{newState.transin.amountReceived}</td>
          </tr>
          <tr>
              <th>Status</th>
              <td>{newState.transin.status}</td>
          </tr>
          <tr>
              <th>Customer Due Status</th>
              <td>{newState.transin.customerDueStatus}</td>
          </tr>
          {
              (newState.transin.customerDueAmount !== "") ? (
                  <tr>
                      <th>Customer Due Amount</th>
                      <td>{newState.transin.customerDueAmount}</td>
                  </tr>
              ) : <></>
          }
          {
              (newState.transin.customerDueGold !== "") ? (
                  <tr>
                      <th>Customer Due Gold</th>
                      <td>{newState.transin.customerDueGold}</td>
                  </tr>
              ) : <></>
          }
          {
              (newState.transin.customerDueSilver !== "") ? (
                  <tr>
                      <th>Customer Due Silver</th>
                      <td>{newState.transin.customerDueSilver}</td>
                  </tr>
              ) : <></>
          }
          <tr>
              <th>RRJ Due Status</th>
              <td>{newState.transin.rrjDueStatus}</td>
          </tr>
          {
              (newState.transin.rrjDueAmount !== "") ? (
                  <tr>
                      <th>Customer Due Amount</th>
                      <td>{newState.transin.customerDueAmount}</td>
                  </tr>
              ) : <></>
          }
          {
              (newState.transin.rrjDueGold !== "") ? (
                  <tr>
                      <th>Customer Due Gold</th>
                      <td>{newState.transin.customerDueGold}</td>
                  </tr>
              ) : <></>
          }
          {
              (newState.transin.rrjDueSilver !== "") ? (
                  <tr>
                      <th>Customer Due Silver</th>
                      <td>{newState.transin.customerDueSilver}</td>
                  </tr>
              ) : <></>
          }
          <tr>
              <th>Description</th>
              <td>{newState.transin.paymentDescription}</td>
          </tr>
          <tr>
              <th>Payment Received By</th>
              <td>{newState.transin.paymentReceivedBy}</td>
          </tr>
          <tr>
              <th>Payment Entered By</th>
              <td>{newState.transin.paymentEnteredBy}</td>
          </tr>
      </tbody>
  </Table>
  </Modal.Body>
  <Modal.Footer>
      <Button variant="secondary" onClick={handleTransDetailsShow}>
          Close
      </Button>
      <Button variant="primary" onClick={() => {
        handleTransDetailsShow()
          dispatch({type:ACTIONS.TRANS_UPDATE, payload: true})
          axios.post("http://localhost:8080/ClosingInfo/getdate",{date: newState.transin.transactionDate})
          .then(res => {
              dispatch({type:ACTIONS.VAL, payload: res.data})}
              )
          .catch(err => console.log(err))
      }}>
          Modify
      </Button>
  </Modal.Footer>
</Modal>
<Modal show={newState.transUpdate} onHide={handleTransUpdate} className="modal-xl">
  <Modal.Header closeButton>
      <Modal.Title>Transaction Update</Modal.Title>
  </Modal.Header>
  <Modal.Body  style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
      <PaymentDetails transin = {newState.transin} showMain={newState.val}/>
  </Modal.Body>
  <Modal.Footer>
      <Button variant="secondary" onClick={handleTransUpdate}>
          Close
      </Button>
  </Modal.Footer>
</Modal>
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
