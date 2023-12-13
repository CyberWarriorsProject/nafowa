import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const Contact = () => {
  return (
    <div>
      <div>
        <section>
          <h2>Get In touch with us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
          <div className="flex gap-5 ">
            <FaFacebookSquare size={25} color="#699393" />{" "}
            <FaSquareInstagram color="#699393" size={25} />
            <FaSquareXTwitter color="#699393" size={25} />
          </div>
          <div>
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
        <section>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              // placeholder="input placeholder"
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
              // label="Password"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item>
              <Input.TextArea rows={8} placeholder="Messages" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
              style={{ maxWidth: "100%" }}
            >
              <Button type="primary" className="bor" block>
                Primary
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    </div>
  );
};
