import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "animate.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useLocation } from "react-router-dom";
// import { FcLike } from "react-icons/fc";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  // const [isLiked, setIsLiked] = useState('false');

  // const handleClick = () => {
  //   setIsLiked('true')
  // };
  // const handleClickFalse = () =>{
  //   setIsLiked('false')
  // }

  return (
    <>
      {/* <div>
     
     {isLiked === 'false' ? <AiOutlineHeart className='fs-1  text-danger' onClick={handleClick}/> 
     :  <FaHeart className='fs-1 text-danger' onClick={handleClickFalse}/> }
    </div> */}

      <div className="container mx-auto animate__fadeInUp animate__animated animate__repeat-2">
        <div className="row py-4">
          {/* <FcLike onClick={changeColor}/> */}
          <div className="col-xl-9 col-lg-12 col-md-3 col-sm-3 col-2 d-flex">
            <h4 className="fw-semibold logo-pink me-5">Hotel Booking</h4>
            <div className="text-decoration pt-1 ms-4 d-none d-lg-block">
              <Link to="/" 
                              className={"a" + (url === "/" ? " active " : "")}
              >
                Home
              </Link>

              <Link
                to="/aboutus"
               
                className={"a" + (url === "/aboutus" ? " active " : "")}
              >
                About Us
              </Link>
              <Link to="/Pricing" href="#">
                Contact Us
              </Link>
              <Link to="/Shipping" href="#" className="mx-3">
                Join Farm Ower{" "}
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-12 col-md-9 col-sm-9 col-10 text-underline justify-content-lg-start mt-lg-3 mt-xl-0 d-flex justify-content-end ">
            {/* <a href="#" className="logo-pink pinkborder px-4 me-4 py-2 rounded-1 d-none d-sm-block">login</a>
                        <a href="#" className="logo-pink pinkborder1 px-4 py-2 rounded-1 ms-3">start selling</a> */}

            <div className="d-lg-none d-block ms-2">
              <Button variant="" onClick={handleShow}>
                <FaBars className="fs-2 logo-pink" />
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="fw-bold fs-3 logo-pink ">
                    meesho
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="list-unstyled fs-5 fw-semibold ">
                    <li>sell online</li>
                    <li className="my-4">how it work</li>
                    <li>pricing & commission</li>
                    <li className="my-4">shipping & return</li>
                    <li>grow bussiness</li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </div>

      {/* <banner>
                <div className="bg-slider">

                    <div className="row ps-5 ms-3">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5 mt-5  order-2 order-md-1 ">
                            <h2 className='fw-bold'>Sell online to 11 Cr+ customers at</h2>
                            <h1 className='logo-pink '>0% Commission</h1>
                            <p className='py-3'>Become a Meesho seller and grow your business across India</p>
                            <div className=' d-lg-flex pb-5 mb-5  '>
                                <div className='borderserch'>
                                    <span className='mt-2'>+91</span>
                                    <input type="text" placeholder='  enter your mobile number' size={30} className='py-2 border-0 ps-3 logo-pink-bg ' />
                                </div>
                                <div >
                                    <button className='text-white bg-selling w-100 mt-3 mt-lg-0  '>start selling</button>
                                </div>


                            </div>




                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 order-1 order-md-2 position-relative">


                            <img src={require('./image/2.png')} className=" h-100 w-100   " alt="" />
                            <img src={require('./image/3.png')} className="position-absolute start-0  h-100 w-75 ms-5 " alt="" />
                        </div>
                    </div>

                </div>
            </banner> */}
    </>
  );
}
export default Header;
