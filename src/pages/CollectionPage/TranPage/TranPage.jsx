import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import _ from "lodash/array"
import {getTrans} from '../../../store/listtrans'
import ModalInit from '../../../components/Modal'


const TableBody = ({setModalShow, setOptionType, setCurrentItem,id,page,listtran}) => {
    //const listtrans = useSelector(state => {return state.listtrans})
    let listTranPaginated = (listtran == []) ? [] : _.chunk(listtran,9)
    let temp = listTranPaginated[page-1]
    return !temp ? <></> :
    temp.map(val => {
        return !id ? <tr>
                    <td>{val.product.map((val,i) => {
                        return val.name + ". "
                    })}</td>
                    <td>{val.user.fullName}</td>
                    <td>{val.user.bankId}</td>
                    <td>{val.date}</td>
                    <td>{val.status}</td>
                    <td style={{textAlign:"center"}}>
                        <button onClick={() => {setModalShow(true); setOptionType('details'); setCurrentItem(val)}} className="btn btn-info col-md-3"> 
                            <span className="icon text-center">
                                <i className="fas fa-info"></i>
                            </span>
                        </button>
                        <button onClick={() => {setModalShow(true); setOptionType('update'); setCurrentItem(val)}} className="btn btn-primary col-md-3 ml-1 mr-1">
                            <span className="icon text-center">
                                <i className="fas fa-edit"></i>
                            </span>
                        </button>
                        <button onClick={() => {setModalShow(true); setOptionType('delete'); setCurrentItem(val)}} 
                        className="btn btn-danger col-md-3"> 
                            <span className="icon">
                                <i className="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            : ( 
                id && val._id == id ?
                <tr>
                    <td>{val.product.map((val,i) => {
                        return val.name + ". "
                    })}</td>
                    <td>{val.user.fullName}</td>
                    <td>{val.user.bankId}</td>
                    <td>{val.date}</td>
                    <td>{val.status}</td>
                    <td style={{textAlign:"center"}}>
                        <button onClick={() => {setModalShow(true); setOptionType('details'); setCurrentItem(val)}} className="btn btn-info col-md-3"> 
                            <span className="icon text-center">
                                <i className="fas fa-info"></i>
                            </span>
                        </button>
                        <button onClick={() => {setModalShow(true); setOptionType('update'); setCurrentItem(val)}} className="btn btn-primary col-md-3 ml-1 mr-1">
                            <span className="icon text-center">
                                <i className="fas fa-edit"></i>
                            </span>
                        </button>
                        <button onClick={() => {setModalShow(true); setOptionType('delete'); setCurrentItem(val)}} 
                        className="btn btn-danger col-md-3"> 
                            <span className="icon">
                                <i className="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr> : <></>
            )
        })
}

const TranPage = () => {
    let pageArray = []
    const [active, setActive] = useState(0)
    const [page,setPage] = useState(1)

    const [id,setID] = useState(null)
    const [modal,setModalShow] = useState(false)
    const [optionType,setOptionType] = useState("details")
    const dispatch = useDispatch()
    const listtrans = useSelector(state => {return state.listtrans})
    const [currentItem,setCurrentItem] = useState(listtrans[0])

    useEffect(() => {
        dispatch(getTrans())
        //document.onload = loadScripts()
    },[])

    for(let i = 1; i <= Math.ceil(listtrans.length/9);i++) {
        pageArray.push(i)
    }

    return (
        <>
        <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars" />
                </button>
                {/* Topbar Search */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                        </button>
                    </div>
                    </div>
                </form>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                    {/* Nav Item - Search Dropdown (Visible Only XS) */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw" />
                    </a>
                    {/* Dropdown - Messages */}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm" />
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </li>
                    {/* Nav Item - Alerts */}
                    <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw" />
                        {/* Counter - Alerts */}
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                    {/* Dropdown - Alerts */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                        Alerts Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white" />
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 12, 2019</div>
                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                        </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white" />
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 7, 2019</div>
                            $290.29 has been deposited into your account!
                        </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-warning">
                            <i className="fas fa-exclamation-triangle text-white" />
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 2, 2019</div>
                            Spending Alert: We've noticed unusually high spending for your account.
                        </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                    </div>
                    </li>
                    {/* Nav Item - Messages */}
                    <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw" />
                        {/* Counter - Messages */}
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    {/* Dropdown - Messages */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                        Message Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
                            <div className="status-indicator bg-success" />
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                        </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                            <div className="status-indicator" />
                        </div>
                        <div>
                            <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                            <div className="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
                            <div className="status-indicator bg-warning" />
                        </div>
                        <div>
                            <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                        </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                            <div className="status-indicator bg-success" />
                        </div>
                        <div>
                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                        </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                    </div>
                    </li>
                    <div className="topbar-divider d-none d-sm-block" />
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                        <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                    </a>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                        </a>
                        <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                        Settings
                        </a>
                        <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                        Activity Log
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                        </a>
                    </div>
                    </li>
                </ul>
                </nav> 
            {/* <Layout/> */}
            {/* <div id="content-wrapper" className="d-flex flex-column"> */}
            <div className="container-fluid">
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary mb-1">Transaction's ID</h6>
                    <input className="form-control" placeholder="Paste the ID here" onChange={(e) => setID(e.target.value)}/>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>User's Name</th>
                                    <th>User's BankID</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Modification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableBody setModalShow={setModalShow} 
                                setOptionType={setOptionType} 
                                setCurrentItem={setCurrentItem} 
                                id={id}
                                page={page}
                                listtran={listtrans}/>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Product</th>
                                    <th>User's Name</th>
                                    <th>User's BankID</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Modification</th>
                                </tr>
                            </tfoot>          
                        </table>
                    </div>
                    <div>
                        <nav aria-label="Page navigation example" style={{display:'flex',justifyContent: 'center'}}>
                            <ul className="pagination">
                                {(() => {
                                        return (listtrans == []) ? <></> : pageArray.map((val,i) => {
                                                return <li className={"page-item " + (i == active ? " active" : null)} onClick={() => setPage(val)}>
                                                    <a className="page-link" href="#" onClick={() => setActive(i)}>{val}</a>
                                                </li>
                                        })                                                            
                                    })()}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {!currentItem ? <></> :
        <ModalInit collection = "tran" show={modal} onHide={() => setModalShow(false)} optionType={optionType} item={currentItem}/>}
        </>
    )
}
export default TranPage