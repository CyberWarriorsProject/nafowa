import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Checkbox, Form, Input } from "antd";
import { Carousel } from "antd";
// import Map from "./Map";
// import { Input } from "antd";
const { TextArea } = Input;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const contentStyle = {
  height: "140px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#699393",
};

export const Contact = () => {
  return (
    <div>
      <div className="">
        {/* <Carousel effect="fade" autoplay>
          {carouselData.map((item) => (
            <SingleCarousel {...item} key={item.slideID} />
          ))}
        </Carousel> */}

        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <div className="max-w-4xl mx-auto flex justify-around mt-6 p-6">
        <section className="flex flex-col gap-7">
          <div className="flex flex-col">
            <h2>Get In touch with us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quisquam.
            </p>
          </div>

          <div className="flex gap-5 ">
            <FaFacebookSquare size={25} color="#699393" />{" "}
            <FaSquareInstagram color="#699393" size={25} />
            <FaSquareXTwitter color="#699393" size={25} />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <BsFillTelephoneFill /> <span>+2349088596289</span>
            </div>
            <div>
              <MdEmail /> <span>office@nafowa.org</span>
            </div>
            <div>
              <FaLocationDot />{" "}
              <span>
                NAFOWA National Secretariat No 4 Dame Patience Goodluck Jonathan
                Road After Command Guest House
              </span>
            </div>
          </div>
        </section>
        <section className="w-full">
          <Form
            name="basic"
            style={{
              maxWidth: "100%",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              name={["user", "email"]}
              // label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="message">
              <TextArea rows={8} placeholder="Messages" />
            </Form.Item>

            <Form.Item>
              <Button className="bg-nafowaBlue" block>
                Send
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
      {/*  <div style={{ height: "500px", width: "100%" }}>
        <Map
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div> */}
    </div>
  );
};
