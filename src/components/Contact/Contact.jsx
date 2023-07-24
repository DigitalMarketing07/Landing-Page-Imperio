import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/* Left Side */}
          <div className="flexColStart c-left">
            <span className="orangeText">Out Contacts </span>
            <span className="primaryText">Easy to Contact</span>
            <span className="secondaryText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, voluptate vitae? Cumque dolor quod nulla eum incidunt
              voluptates, expedita tempore officiis saepe dicta quis? Reiciendis
              laudantium nam recusandae quas nihil?
            </span>

            <div className="flexColStart contactModes">
              {/* First Row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">+91 9873894793</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>

                {/* Second Mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat Now</span>
                      <span className="secondaryText">+91 9873894793</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video Call</span>
                      <span className="secondaryText">+91 9873894793</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Video Call Now</div>
                </div>

                {/* Fourth Mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Message</span>
                      <span className="secondaryText">+91 9873894793</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="c-right">
            <div className="image-container">
              <img src="./contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
