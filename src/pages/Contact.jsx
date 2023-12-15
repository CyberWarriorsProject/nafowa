import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Form, Input } from "antd";
import HeroOverlay from "../components/HeroOverlay";
import styled from "styled-components";
const { TextArea } = Input;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const GradientInstagramIcon = styled(FaInstagram)`
  background: linear-gradient(to right, #e0b0ff, #ff4500);
  border-radius: 5px;
`;

export const Contact = () => {
  return (
    <div>
      <HeroOverlay
        pageTitle={"Contact Us"}
        overlayURL={
          "https://1.bp.blogspot.com/-akk1pth4xXI/X-JTa3TmmFI/AAAAAAACDAw/w6jayo_FAWgUrtGXKV4RmuopFDcFUMobwCNcBGAsYHQ/s16000/1.jpg"
        }
      />

      <div className="max-w-4xl mx-auto flex flex-justify-around  gap-20 mt-6 p-6 flex-col md:w-full md:flex-row ">
        <section className="flex flex-col gap-7 ">
          <div className="flex flex-col">
            <h2 className="text-3xl">Get In Touch With Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quisquam.
            </p>
          </div>

          <div className="flex gap-5 ">
            <a
              href="https://www.facebook.com/nafowasec/"
              target="_blank"
              className="text-black cursor-pointer"
            >
              <FaFacebookSquare
                size={25}
                color="#0000cd"
                borderRradius="5px;"
              />
            </a>{" "}
            <a
              href=""
              target="_blank"
              className="text-white cursor-pointer hover:text-white "
            >
              <GradientInstagramIcon size={25} />
            </a>
            <a href="" target="_blank" className="text-black cursor-pointer">
              <FaSquareXTwitter color="#1b1b1b" size={25} />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <BsFillTelephoneFill />{" "}
              <span className="ml-1">
                <a
                  href="tel:+2349088596289"
                  className="text-black cursor-progress"
                >
                  +234-908-859-6289
                </a>
              </span>{" "}
            </div>
            <div>
              <MdEmail /> <span className="ml-1">office@nafowa.org</span>
            </div>
            <div>
              <FaLocationDot />{" "}
              <span className="ml-1">
                NAFOWA National Secretariat No 4 Dame Patience Goodluck Jonathan
                Road After Command Guest House
              </span>
            </div>
            <div>
              <FaMapLocationDot />{" "}
              <span className="ml-1">
                <a
                  href="https://maps.app.goo.gl/rDHNG1JNTTnRauT26"
                  target="_blank"
                  className="text-black cursor-progress"
                >
                  Open Google Maps
                </a>
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
              <Button className="bg-nafowaBlue text-white font-semibold" block>
                Send
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    </div>
  );
};
