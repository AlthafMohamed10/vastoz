import useSWR from "swr";
import { GetServerSideProps, NextPage } from "next";
import { Card } from "react-bootstrap";
import React, { SyntheticEvent, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Nav,
  Collapse,
  Modal,
} from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
const { Formik } = formik;

import axios from "axios";
import { AdminLayout } from "@layout";
import { Pokemon } from "@models/pokemon";
import { newResource, Resource } from "@models/resource";
import { Pagination } from "@components/Pagination";
import { PokemonList } from "@components/Pokemon";
import { transformResponseWrapper, useSWRAxios } from "@hooks";
import { ROOTURL, ROOTWSS } from "@lib/globalvalue";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

type Props = {
  pokemonResource: Resource<Pokemon>;
  page: number;
  perPage: number;
  sort: string;
  order: string;
};

const StudioManager: NextPage<Props> = (props) => {
  const { pokemonResource, page, perPage, sort, order } = props;

  const homePageURL =
    `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}home` || "";
  const [submitting, setSubmitting] = useState(false);
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const [tabledata, settableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dpreview, openPreview] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [category, setCategory] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [country, setCountry] = useState([]);
  const loaded = false;

  const [shownsform, setShowstudio] = useState(false);

  const handleClosestudio = () => setShowstudio(false);
  const showaddsform = () => setShowstudio(true);

  const [showneform, setShowevent] = useState(false);
  const handleCloseevent = () => setShowevent(false);
  const handleShowevent = () => setShowevent(true);

  const [editorHtml, setEditorHtml] = useState("");

  const apiUrl = ROOTURL + "/studio/getStudio";
  const languageapiUrl = ROOTURL + "/select/getOptionBySelectId/3";
  const currencyapiUrl = ROOTURL + "/select/getOptionBySelectId/2";
  const countryapiUrl = ROOTURL + "/select/getCountryList";
  const categoryapiUrl = ROOTURL + "/select/getCategoryList";

  const fetchcountry = async (url: string) => {
    const response = await axios.get(url);
    console.log(response);
    setCountry(response.data);
  };
  useSWR("api/common/getcountry", fetchcountry);

  const fetchcategory = async (url: string) => {
    const response = await axios.get(url);
    console.log(response);
    setCategory(response.data);
  };
  useSWR("api/common/getcategory", fetchcategory);

  const fetchcurrency = async (url: string) => {
    const response = await axios.get(url);
    console.log(response);
    setCurrency(response.data);
  };
  useSWR("api/common/getcurrency", fetchcurrency);

  const fetchlanguage = async (url: string) => {
    const response = await axios.get(url);
    console.log(response);
    setLanguages(response.data);
  };
  useSWR("api/common/getlanguage", fetchlanguage);

  const initialstudioform = {
    studioname: "",
    seotittle: "",
    adult: "false",
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    companyname: "",
    address: "",
    city: "",
    country: "",
    postcode: "",
    autoshipping: "false",
    studiopagebio: "",
    aboutstudio: "",
    bannerimage: "",
    profileimage: "",
  };
  const handleSubmit = async (
    values: any,
    { setSubmitting, setStatus }: any
  ) => {
    console.log(values)

    setSubmitting(true);
    try {
      const res = await axios.post("api/studiomanager/newstudio", values);
      if (res.data.status === 201) {
        toast("Successfully Create Studio");
      } else if (res.data.status === 209) {
        toast("Existing Studio");
      }
    } catch (err) {
      console.log("EROR", err);
      toast("Invalid Details ");
    }
    setSubmitting(false);
  };

  return (
    <AdminLayout>
      <div id="main" className="main">
        <div className="pagetitle">
          <h4>Studio Control Center</h4>
        </div>
        <section className="section dashboard">
          <button
            type="button"
            className="btn btn-success mb-2 me-3"
            onClick={showaddsform}
          >
            <i className="bi bi-plus-circle me-1" />
            Add Studio
          </button>

          {/* <button
            type="button"
            className="btn btn-success mb-2"
            onClick={handleShowevent}
          >
            <i className="bi bi-plus-circle me-1" />
            Add Event
          </button> */}

          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-12 col-xxl-12 ">
              <div className="row">
                {" "}
                {/* Name show in the home page */}
                {/* Studio details */}
                <div className="col-12 h-40">
                  <div className="card recent-sales overflow-aut">
                    <div className="card-body">
                      <h5 className="card-title">Studio Details</h5>
                      <hr className="hr" />
                        Need to show the studio details here
                    </div>
                  </div>
                </div>{" "}
                {/* End Studio details */}
                {/* Upcoming Event details */}
                <div className="col-12 mt-5">
                  <div className="card recent-sales overflow-aut">
                    <div className="card-body">
                      
                      <h5 className="card-title">Upcoming Event Details</h5>
                      <hr className="hr" />
                      Need to show upcoming event here
                      in.
                    </div>
                  </div>
                </div>
                {/* End Upcoming Event details */}
                <div>
                  <Modal
                    show={shownsform}
                    onHide={handleClosestudio}
                    backdrop="static"
                    size="lg"
                    keyboard={false}
                    scrollable={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add New Studio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Add studio form details */}
                      <div className="card">
                        <div className="card-body">
                          {/* Multi Columns Form */}
                          <Formik
                            //validationSchema={schema}
                            enableReinitialize
                            onSubmit={handleSubmit}
                            initialValues={initialstudioform}
                          >
                            {({
                              handleSubmit,
                              handleChange,
                              values,
                              touched,
                              errors,
                            }) => (
                              <form className="row g-3" onSubmit={handleSubmit}>
                                <h5>Shop Preferences</h5>

                                <div className="col-md-6">
                                  <label className="form-label">
                                    Studio Name *
                                  </label>
                                  <input
                                    type="text"
                                    name="studioname"
                                    value={values.studioname}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="studioname"
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Category *
                                  </label>
                                  <select
                                    className="form-select"
                                    name="scategory"
                                    id="scategory"
                                    onChange={handleChange}
                                    required
                                  >
                                    <option value="">Select Category</option>
                                    {category.map((item) => (
                                      <option
                                        key={item.name}
                                        value={item.name}
                                      >
                                        {item.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Languages *
                                  </label>
                                  <select
                                    className="form-select"
                                    name="slanguage"
                                    onChange={handleChange}
                                    id="slanguage"
                                    required
                                  >
                                    <option value="">Select Language</option>
                                    {languages.map((item) => (
                                      <option
                                        key={item.name}
                                        value={item.name}

                                      >
                                        {item.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Currency *
                                  </label>
                                  <select
                                    className="form-select"
                                    name="scurrency"
                                    id="scurrency"
                                    aria-label="Default select example"
                                    onChange={handleChange}
                                    required
                                  >
                                    <option value="">Select Currency</option>
                                    {currency.map((item) => (
                                      <option
                                        key={item.name}
                                        value={item.name}

                                      >
                                        {item.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="col-12">
                                  <label className="form-label">
                                    Studio Title *
                                  </label>
                                  <input
                                    type="text"
                                    name="seotittle"
                                    value={values.seotittle}
                                    onChange={handleChange}
                                    id="seotittle"
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-12">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value={values.adult}
                                      onChange={handleChange}
                                      name="adultonly"
                                      id="adultonly"
                                      required
                                    />
                                    <label className="form-check-label">
                                      Adult Only
                                    </label>
                                  </div>
                                </div>

                                <hr className="hr" />
                                <h5>Where are you shipping from?</h5>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    First Name *
                                  </label>
                                  <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Last Name *
                                  </label>
                                  <input
                                    type="text"
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    id="lastname"
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">Email *</label>
                                  <input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    id="email"
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Telephone *
                                  </label>
                                  <input
                                    type="text"
                                    name="telephone"
                                    id="telephone"
                                    value={values.telephone}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-12">
                                  <label className="form-label">
                                    Company Name *
                                  </label>
                                  <input
                                    type="text"
                                    name="companyname"
                                    id="companyname"
                                    value={values.companyname}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-12">
                                  <label
                                    htmlFor="inputAddress"
                                    className="form-label"
                                  >
                                    Address *
                                  </label>
                                  <textarea
                                    className="form-control"
                                    name="address"
                                    id="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    placeholder="Enter seller Address"
                                    required
                                  ></textarea>
                                </div>

                                <div className="col-md-4">
                                  <label
                                    htmlFor="inputCity"
                                    className="form-label"
                                  >
                                    City *
                                  </label>
                                  <input
                                    type="text"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    id="city"
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-md-4 ">
                                  <label className="form-label">
                                    Country *
                                  </label>
                                  <select
                                    className="form-select"
                                    name="scountry"
                                    id="scounty"
                                    onChange={handleChange}
                                    required
                                  >
                                    <option value="">Select Country</option>
                                    {country.map((item) => (
                                      <option
                                        className="overflow-y-scroll"
                                        key={item.name}
                                        value={item.name}
                                      >
                                        {item.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <div className="col-md-4">
                                  <label
                                    htmlFor="inputZip"
                                    className="form-label"
                                  >
                                    Post Code *
                                  </label>
                                  <input
                                    type="text"
                                    name="postcode"
                                    id="postcode"
                                    value={values.postcode}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <hr className="hr" />
                                <h5>Shipping Costs Details</h5>
                                <div className="col-md-12">
                                  <div className="col-sm-10">
                                    <div className="col-12">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={values.autoshipping}
                                          onChange={handleChange}
                                          name="autocarrier"
                                          id="autocarrier"
                                          required
                                        />
                                        <label className="form-check-label">
                                          Connect to carrier for shipping costs
                                        </label>
                                      </div>
                                      <small>
                                        Don't forgot to setup delivery options,
                                        Otherwise have to do manual shipping
                                      </small>
                                    </div>
                                  </div>
                                </div>
                                <hr className="hr" />
                                <h5>Shop Interface</h5>
                                <div className="col-12">
                                  <label
                                    htmlFor="inputCity"
                                    className="form-label"
                                  >
                                    Page Bio *
                                  </label>
                                  <textarea
                                    className="form-control"
                                    placeholder="Enter Details About Page Bio"
                                    id="studiopagebio"
                                    value={values.studiopagebio}
                                    onChange={handleChange}
                                    name="studiopagebio"
                                    required
                                  ></textarea>
                                </div>
                                <div className="col-12">
                                  <label
                                    htmlFor="inputCity"
                                    className="form-label"
                                  >
                                    About Studio *
                                  </label>
                                  <textarea
                                    className="form-control"
                                    value={values.aboutstudio}
                                    onChange={handleChange}
                                    placeholder="Enter Details About Studio"
                                    id="aboutstudio"
                                    name="aboutstudio"
                                    required
                                  ></textarea>
                                </div>

                                <div className="col-6">
                                  <label
                                    htmlFor="inputCity"
                                    className="form-label"
                                  >
                                    Upload Profile Banner
                                  </label>
                                  <input
                                    className="form-control"
                                    type="file"
                                    id="bannerpic"
                                    value={values.bannerimage}
                                    onChange={handleChange}
                                    name="bannerpic"
                                    //onChange={handlebImageChange}
                                    accept="image/*"
                                  />
                                </div>
                                <div className="col-6">
                                  <label
                                    htmlFor="inputCity"
                                    className="form-label"
                                  >
                                    Upload Profile Picture
                                  </label>
                                  <input
                                    className="form-control"
                                    type="file"
                                    id="profilepic"
                                    value={values.profileimage}
                                    onChange={handleChange}
                                    name="profilepic"
                                  />
                                </div>
                                <hr className="hr" />
                                <div className="col-12">
                                  <div className="card recent-sales overflow-aut">
                                    <div className="card-body">
                                      <div className="align-items-center justify-content-center">
                                        <span>Preview the image</span>

                                        <i
                                          className="bi bi-chevron-down pl-3 ms-auto"
                                          onClick={() => openPreview(!dpreview)}
                                        />
                                      </div>
                                      <Collapse in={dpreview}>
                                        <div id="example-collapse-text">
                                          {selectedImage && (
                                            <div className="col-4">
                                              <img
                                                src={selectedImage}
                                                alt="Selected"
                                                className="img-fluid rounded-start border rounded"
                                              />
                                            </div>
                                          )}
                                        </div>
                                      </Collapse>
                                    </div>
                                  </div>
                                </div>

                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-primary m-3"
                                  >
                                    Submit
                                  </button>
                                  <button
                                    type="reset"
                                    className="btn btn-secondary"
                                  >
                                    Reset
                                  </button>
                                </div>
                              </form>
                            )}
                          </Formik>
                          {/* End Multi Columns Form */}
                        </div>
                      </div>
                      {/* End Add studio form details */}
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>

                  {/* End Modal Dialog Scrollable*/}
                </div>
                <div>
                  <Modal
                    show={showneform}
                    onHide={handleCloseevent}
                    backdrop="static"
                    size="lg"
                    keyboard={false}
                    scrollable={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add New Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="card">
                        <div className="card-body">
                          <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">
                              Event Name *
                            </label>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">
                              Status*
                            </label>
                            <div className="col-sm-10">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option value="publish">Publish</option>
                                <option value="draft">Draft</option>
                              </select>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-sm-2 col-form-label">
                              Date
                            </label>
                            <div className="col-sm-10">
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">
                              Time
                            </label>
                            <div className="col-sm-10">
                              <input type="time" className="form-control" />
                            </div>
                          </div>
                          <div className="quill-editor-full"></div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary m-3">
                          Submit
                        </button>
                        <button type="reset" className="btn btn-secondary">
                          Reset
                        </button>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};



export default StudioManager;
