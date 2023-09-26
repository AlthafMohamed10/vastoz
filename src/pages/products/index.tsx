import useSWR from "swr";
import { GetServerSideProps, NextPage } from "next";
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Image, Nav, Collapse, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import * as formik from "formik";
import * as yup from "yup";
const { Formik } = formik;
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import { AdminLayout } from "@layout";
import { Pokemon } from "@models/pokemon";
import { newResource, Resource } from "@models/resource";
import { Pagination } from "@components/Pagination";
import { PokemonList } from "@components/Pokemon";
import { transformResponseWrapper, useSWRAxios } from "@hooks";
import { ROOTURL, ROOTWSS } from "@lib/globalvalue";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(7),
});

type Props = {
  pokemonResource: Resource<Pokemon>;
  page: number;
  perPage: number;
  sort: string;
  order: string;
};

const Products: NextPage<Props> = (props) => {
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

  const [shownsform, setShowproduct] = useState(false);

  const handleCloseproduct = () => setShowproduct(false);
  const handleShowproduct = () => setShowproduct(true);

  const [showneform, setShowevent] = useState(false);
  const handleCloseevent = () => setShowevent(false);
  const handleShowevent = () => setShowevent(true);

  const [editorHtml, setEditorHtml] = useState("");

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

  const initialproductform = {
    productname: "",
    vendorname: "",
    stock: "",
    price: "",
    discount: "",
    saleprice: "",
    commission: "",
    description: "",
    width: "",
    height: "",
    depth: "",
    vastlink: "",
    images: null,
  };
  const handleSubmit = async (
    values: any,
    { setSubmitting, setStatus }: any
  ) => {
    console.log(values);

    setSubmitting(true);
    try {
      const res = await axios.post("api/cmsproduct/newproduct", values, {
        headers: {
          "Content-Type": "application/json",

        },
      });
      if (res.data.status === 201) {
        toast("Successfully Create new product");
      } else if (res.data.status === 209) {
        toast("Can't create a product");
      } else {
        toast("Please try later");
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
        <section className="section dashboard">
          <button
            type="button"
            className="btn btn-success mb-2"
            onClick={handleShowproduct}
          >
            <i className="bi bi-plus-circle me-1" />
            Add Products
          </button>

          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-12 col-xxl-12 ">
              <div className="row">
                {" "}
                {/* Name show in the home page */}
                {/* Studio details */}
                {/* End Studio details */}
                {/* Upcoming Event details */}
                {/* End Upcoming Event details */}
                <div>
                  {/* Modal Dialog Scrollable */}
                  {/* Modal for add new products */}
                  <Modal
                    show={shownsform}
                    onHide={handleCloseproduct}
                    backdrop="static"
                    size="lg"
                    keyboard={false}
                    scrollable={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add New Products</Modal.Title>
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
                            initialValues={initialproductform}
                          >
                            {({
                              handleSubmit,
                              handleChange,
                              setFieldValue,
                              values,
                              touched,
                              errors,
                            }) => (
                              <form className="row g-3" onSubmit={handleSubmit}>
                                <h5>Product Prefferences</h5>

                                <div className="col-md-6">
                                  <label className="form-label">
                                    Product Name *
                                  </label>
                                  <input
                                    type="text"
                                    value={values.productname}
                                    name="productname"
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Vendor Name *
                                  </label>
                                  <input
                                    type="text"
                                    name="vendorname"
                                    value={values.vendorname}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">Stock *</label>
                                  <input
                                    type="number"
                                    name="stock"
                                    min={0}
                                    max={100000}
                                    className="form-control"
                                    value={values.stock}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">Price *</label>
                                  <input
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    value={values.price}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Discount(%) *
                                  </label>
                                  <input
                                    type="number"
                                    name="discount"
                                    min={0}
                                    max={70}
                                    className="form-control"
                                    value={values.discount}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Sale Price *
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="saleprice"
                                    value={values.saleprice}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Product Category *
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={handleChange}
                                    name="productcategory"
                                    required
                                  >
                                    <option value="">
                                      Select Product Category
                                    </option>
                                    {category.map((item) => (
                                      <option key={item.name} value={item.name}>
                                        {item.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <div className="col-md-6">
                                  <label className="form-label">
                                    Selling Currency *
                                  </label>
                                  <select
                                    className="form-select"
                                    name="sellingcurrency"
                                    onChange={handleChange}
                                    aria-label="Default select example"
                                    required
                                  >
                                    <option value="">
                                      Select Selling Currency
                                    </option>
                                    {currency.map((item) => (
                                      <option key={item.name} value={item.name}>
                                        {item.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Delivery Methods *
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={handleChange}
                                    name="deliverymethod"
                                    required
                                  >
                                    <option value="">Select Delivery Type</option>

                                    <option value="DS">
                                      Doorstep Delivery
                                    </option>
                                    <option value="PS">Pickup at store</option>
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Commission(%) *
                                  </label>
                                  <input
                                    type="number"
                                    name="commission"
                                    min={3}
                                    max={30}
                                    className="form-control"
                                    value={values.commission}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="col-md-6 ">
                                  <label className="form-label">
                                    Return Duration *
                                  </label>
                                  <select
                                    className="form-select"
                                    onChange={handleChange}
                                    name="returnduration"
                                    required
                                  >
                                    <option value="">Select Return Duration</option>
                                    <option value="NR">No Return</option>
                                    <option value="1"> 1 Day</option>
                                    <option value="3"> 3 Day</option>
                                    <option value="7"> 7 Day</option>
                                    <option value="10"> 10 Day</option>
                                    <option value="15"> 15 Day</option>
                                    <option value="20"> 20 Day</option>
                                    <option value="25"> 25 Day</option>
                                    <option value="30"> 30 Day</option>
                                  </select>
                                </div>
                                <div className="col-md-6 ">
                                  <label className="form-label">
                                    Return Methods *
                                  </label>
                                  <select
                                    className="form-select"
                                    onChange={handleChange}
                                    name="returnmethod"
                                    required
                                  >
                                    <option value="">Select Return Type</option>
                                    <option value="NR">No Return</option>
                                    <option value="PD">Pickup Door Step</option>
                                    <option value="HS">
                                      Handover to Store
                                    </option>
                                    <option value="CS">
                                      Courier to Seller
                                    </option>
                                    <option value="DP">
                                      Don't pickup the product
                                    </option>
                                  </select>
                                </div>
                                <hr className="hr" />
                                <h5>Product Specification</h5>

                                <div className="col-12">
                                  <label className="form-label">
                                    Product Details *
                                  </label>
                                  <textarea
                                    className="form-control"
                                    placeholder="Enter Product Details"
                                    onChange={handleChange}
                                    value={values.details}
                                    name="details"
                                    required
                                  ></textarea>
                                </div>
                                <div className="col-12">
                                  <label className="form-label">
                                    Product Description *
                                  </label>
                                  <textarea
                                    className="form-control"
                                    onChange={handleChange}
                                    value={values.description}
                                    name="description"
                                    placeholder="Enter Product Description"
                                    required
                                  ></textarea>
                                </div>
                                <div className="col-md-4">
                                  <label className="form-label">
                                    Dimension Width(cm)
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={values.width}
                                    name="width"
                                    required
                                  />
                                </div>
                                <div className="col-md-4">
                                  <label className="form-label">
                                    Dimension Height(cm)
                                  </label>
                                  <input
                                    type="number"
                                    onChange={handleChange}
                                    value={values.height}
                                    name="height"
                                    className="form-control"
                                    id="inputCity"
                                    required
                                  />
                                </div>
                                <div className="col-md-4">
                                  <label
                                    className="form-label"
                                  >
                                    Dimension Depth(cm)
                                  </label>
                                  <input
                                    type="number"
                                    onChange={handleChange}
                                    value={values.depth}
                                    name="depth"
                                    className="form-control"
                                    required
                                  />
                                </div>

                                <div className="col-md-6">
                                  <label
                                    className="form-label"
                                  >
                                    VAST Link *
                                  </label>
                                  <input
                                    type="text"
                                    onChange={handleChange}
                                    value={values.vastlink}
                                    name="vastlink"
                                    className="form-control"
                                    required
                                  />
                                </div>
                                <div className="col-6">
                                  <label
                                    htmlFor="inputCity"
                                    className="form-label"
                                  >
                                    Upload Product images
                                  </label>
                                  <input
                                    className="form-control"
                                    type="file"
                                    id="productimages"
                                    name="images"
                                    // value={values.images}
                                    onChange={(e) =>
                                      setFieldValue('images', e.currentTarget.files[0])
                                    }
                                    // onChange={handleChange}
                                    // onChange={handlebImageChange}
                                    accept="image/*"
                                    multiple
                                  />
                                  <small>
                                    * You can Arrage the images order after the
                                    validation
                                  </small>
                                </div>

                                <hr className="hr" />
                                {/* <div className="col-12">
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
                                </div> */}

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

export default Products;
