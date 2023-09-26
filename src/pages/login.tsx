import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Form,
  Image,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login: NextPage = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup.string().email().required().matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "name@domainname, Sample info@vastoz.com"
    ),
    password: yup.string().required(),
  });

  const getRedirect = () => {
    const redirect = getCookie("redirect");
    if (redirect) {
      deleteCookie("redirect");
      return redirect.toString();
    }

    return "/home";
  };

  const handleSubmit = async (
    values: { email: any; password: any },
    { setSubmitting, setStatus }: any
  ) => {
    const postData = {
      email: values.email,
      password: values.password,
    };
    try {
      const res = await axios.post("api/user/login", postData);
      if (res.status === 200) {
        //localStorage.setItem('username', res.data.uname);
        localStorage.setItem('username', "suresh");
        router.push(getRedirect());
      }
    } catch (err) {
      console.log("EROR", err);
      toast("Invalid Username and password ");
    }

    setSubmitting(false);
  };

  return (
    <Container fluid>
      <div>
        <Image
          src="/assets/img/logo/logo.png"
          className="p-2"
          alt="logo image"
          width={160}
        />

        <Row>
          <Col
            xs={8}
            sm={8}
            md={6}
            lg={8}
            className="d-lg-flex align-items-center "
          >
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
              <Image
                src="/assets/img/pages/login-v2.svg"
                alt="signin image"
                fluid
              />
            </div>
          </Col>
          <Col lg={4} className="my-auto">
            <Col xs={8} sm={8} md={6} lg={8} className="px-xl-2 mx-auto">
              <Card.Title className="font-weight-bold mb-2 h1">
                Welcome to vastoz
              </Card.Title>

              <Formik
                validationSchema={schema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={handleSubmit}
                initialValues={{
                  email: "",
                  password: "",
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group
                      className="mb-3"
                      controlId="validationFormikUsername"
                    >
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          placeholder="Enter Mail Address"
                          aria-describedby="inputGroupPrepend"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="validationFormikpassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type={passwordType}
                          placeholder="............."
                          aria-describedby="inputGroupPrepend"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />
                        <InputGroup.Text
                          id="inputGroupPrepend"
                          onClick={togglePassword}
                        >
                          {passwordType === "password" ? (
                            <FontAwesomeIcon icon={faEyeSlash} />
                          ) : (
                            <FontAwesomeIcon icon={faEye} />
                          )}
                        </InputGroup.Text>

                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <div className="d-grid">
                      <Button type="submit">Signin</Button>
                      <p className="mt-3">
                      Dont have a account? <Link href="/register">Signup</Link>
                      </p>

                    </div>
                  </Form>
                )}

                {/* <div className="d-grid">
            <Button className="mb-3">Signin</Button>
            <Button className="mb-3">Signup</Button>
            </div> */}
              </Formik>
            </Col>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default Login;
