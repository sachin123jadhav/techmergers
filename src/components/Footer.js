import React from 'react';
import './footer.css'

function Footer() {
  return (
      <div>
          <footer>
              <div className='container'>
                  <div className='footer-nav'>
                      <div className='row'>

                          <div className='col-md-4'>
                              <h3>About</h3>
                              <ul className='footer-list'>
                                  <li><a className='' href='#' >Techmergers</a> </li>
                                  <li><a className='' href='#' >Contact Us</a> </li>
                                  <li><a className='' href='#' >Advertise</a> </li>
                              </ul>
                          </div>
                          <div className='col-md-4'>
                              <h3>Legal</h3>
                              <ul className='footer-list'>
                                  <li><a className='' href='#' >Privacy Policy</a> </li>
                                  <li><a className='' href='#' >Terms of Service</a> </li>
                                  <li><a className='' href='#' >Techmergers Terms</a> </li>
                                  <li><a className='' href='#' >Code of Conduct</a> </li>
                                  <li><a className='' href='#' >About Our Ads</a> </li>
                              </ul>
                          </div>
                          <div className='col-md-4'>
                              <h3>Sign up for the newsletter</h3>
                             <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur.</p>
                              <div className="input-group">
                                  <input type="text" className="form-control" placeholder="Enter your email..." />
                                      <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa-solid fa-paper-plane"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='footer-copy'>
                      <div className='row'>
                          <div className='col-md-8'>
<p className='mb-0'>© 2022 EC Infosolutions Pvt. Ltd. All rights reserved. </p>
                          </div>
                          <div className='col-md-4'>
<ul className='list-inline footer-social d-flex '>
    <li><a href=''><i class="fa-brands fa-facebook-square"></i></a> </li>
    <li><a href=''><i class="fa-brands fa-twitter-square"></i></a> </li>
    <li><a href=''><i class="fa-brands fa-instagram"></i></a> </li>
    <li><a href=''><i class="fa-brands fa-linkedin"></i></a> </li>

</ul>
                          </div>

                      </div>

                  </div>

              </div>

          </footer>

      </div>
  )
}

export default Footer