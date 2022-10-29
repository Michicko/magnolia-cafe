import PageContainer from "../components/PageContainer";
import SocialIcons from "../components/SocialIcons";

const Contact = () => {
  return (
    <PageContainer>
      <div className="contact">
        <div className="contact__container">
          <div className="contact__info-box">
            <div className="contact__info-box-a">
              <h3 className="contact__heading">Opening hours</h3>
              <div>
                <p>Monday - Tuesday</p>
                <p>7am - 9pm</p>
              </div>
              <div>
                <p>Friday - Sunday</p>
                <p>9am - 11pm</p>
              </div>
            </div>
            <div className="contact__info-box-b">
              <h3 className="contact__heading">Contact info</h3>
              <div>
                <p>791 Lexington Ave</p>
                <p>New York, NY 10065</p>
              </div>
              <div>
                <p>(123)456 7890</p>
                <p>contact@magnolia.com</p>
              </div>
            </div>
            <div className="contact__info-box-c">
              <SocialIcons theme="dark" />
            </div>
          </div>
          <div className="contact__map-box">
            <iframe
              src="https://maps.google.com/maps?q=791 Lexington Ave New York, NY 10065%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              title="map of our restaurant"
              frameBorder="0"
              border="0"
              cellSpacing="0"
              allowFullScreen
              // width="100%"
              // height="100%"
              className="contact__map"
            ></iframe>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
