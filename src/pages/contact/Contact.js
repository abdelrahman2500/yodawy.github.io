import React from "react";
import "./index.scss";
import Navbar from "../../components/navbar/Navbar";
import Branches from "../../components/branches/Branches";
import Footer from "../../components/footer/Footer";

export default function Contact() {
  return (
    <>
      <Navbar compo={true} />
      <Branches nothome={false} />

      <div className="container-fluid ">
        <div className="row main-div p-4">
          <div className="col-12 col-md-7 mb-4 accordion-div">
            <h2 className="vc-custom-heading  head1">
              Frequently Asked Questions
            </h2>
            <p className="lead">
              Please read our FAQs before sending us a message.
            </p>
            <div className="accordion " id="accordionExample">
              <div className="accordion-item ">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button fw-bold "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How Can I Order From Yodawy
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You just have to download the App, add your items, upload a
                    prescription or product image and we’ll do the rest!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How can i place an insurance order ?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    If your insurance company is one of our partners, you can
                    simply register with your card details, snap a picture of
                    your prescription and place your order.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What regions do you cover ?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yodawy covers nearly all of Egypt, you can place an order
                    and we’ll deliver from the best-matching pharmacy near your
                    geo-location. If we’re not covering your area, fill in the
                    form beside or send us through our social media platforms
                    and we’ll make sure we improve our coverage next time you
                    order.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How much time does it take for my order to be delivered ?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We work hard on improving the delivery speed, orders
                    delivery time may vary based on order components and their
                    availability, we usually deliver in less than 45 to 60
                    minutes in normal orders.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    I'm facing an issue with my order ?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You can contact us through our social media pages or the
                    hotline 15005, and our team will make sure they have your
                    issue solved.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    I didn't recieve a verification code ?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    To make sure you sign up with your real number, we’ll send
                    you a verification code via SMS which you need to enter to
                    sign up. If the SMS with the code does not arrive, you can
                    reach out on our social media platforms (Facebook or
                    Instagram) or send us an email at hello@yodawy.com with the
                    registered number for the account and our team will look
                    into your issue as soon as possible.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    I have a pharmacy and i want to join your network ?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We’re always looking forward to growing our network, please
                    leave your pharmacy and contact details in the Contact us
                    form and we’ll reach out as soon as possible.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5  form-div">
            <h2 className="head2">Fill up this form if you have any question</h2>
            <form className="row g-3 form">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control name"
                  id="inputAddress"
                  placeholder="Name and Surname"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control email"
                  id="inputEmail4"
                  placeholder="Your E-mail"
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control phone"
                  id="inputAddress"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control message"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="3"
                ></textarea>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    I'm not a robot
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button  onClick={(e)=> e.preventDefault()} className="btn fw-bold ">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
