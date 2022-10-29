import Heading from "../components/Heading";
import PageContainer from "../components/PageContainer";
import { MdEventSeat } from "react-icons/md";

const Reservation = () => {
  return (
    <PageContainer>
      <section className="section section__reservation">
        <div className="container big">
          <div className="row">
            <Heading
              heading="Reservation"
              lead="come and visit our coffee shop"
            />
            <div className="reservation">
              <div className="reservation__container">
                <div className="reservation__img-box">
                  <img
                    src={require("../assets/images/gallery-4.jpg")}
                    alt=""
                    className="reservation__img"
                  />
                </div>
                <div className="reservation__form-box">
                  <h3 className="reservation__form-heading">
                    Make a Reservation
                  </h3>
                  <p className="lead">
                    For further Questions, please call: (234)456 7890
                  </p>
                  <form className="reservation__form">
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      className="reservation__form-input"
                      placeholder="full Name"
                    />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="reservation__form-input"
                      placeholder="email address"
                    />
                    <input
                      type="date"
                      name="date"
                      id="date"
                      placeholder="Date"
                    />
                    <input
                      type="time"
                      name="time"
                      id="time"
                      placeholder="Time"
                    />
                    {/* create a control group put btn
                    beside, disable input when btn clicked
                    a modal should pop up to show available seats
                    when clicked avaialble seat, show it in the
                    disabled input */}
                    <div className="reservation__form-group">
                      <input
                        type="text"
                        name="seats"
                        id="seats"
                        className="reservation__form-input seat"
                        placeholder="Seats"
                        disabled
                        aria-disabled="true"
                      />
                      <div className="reservation__form-control">
                        <MdEventSeat className="icon light" />
                      </div>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phon"
                      placeholder="Phone Number"
                      className="reservation__form-input"
                    />
                    <input type="submit" value="Reserve now" className="btn" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Reservation;
