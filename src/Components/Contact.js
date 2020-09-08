import React from "react";

const Contact = ({ data }) => {
  console.log(data);

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          <form id="contactForm" name="contact" action="/contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <fieldset>
              <div>
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  required
                  type="text"
                  defaultValue=""
                  size="35"
                  id="name"
                  name="name"
                />
              </div>
              <div>
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  required
                  type="text"
                  defaultValue=""
                  size="35"
                  id="email"
                  name="email"
                />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  required
                  type="text"
                  defaultValue=""
                  size="35"
                  id="subject"
                  name="subject"
                />
              </div>
              <div>
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  id="message"
                  name="message"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {data?.name}
              <br />
              {data?.address.street} <br />
              {data?.address.city}, {data?.address.state} {data?.address.zip}
              <br />
              <span>{data?.phone}</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
