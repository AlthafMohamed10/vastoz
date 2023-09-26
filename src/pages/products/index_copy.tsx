import useSWR from 'swr'
import { GetServerSideProps, NextPage } from 'next'
import { Card } from 'react-bootstrap'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image,Nav,Collapse,Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";



import axios from 'axios'
import { AdminLayout } from '@layout'
import { Pokemon } from '@models/pokemon'
import { newResource, Resource } from '@models/resource'
import { Pagination } from '@components/Pagination'
import { PokemonList } from '@components/Pokemon'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import { ROOTURL,ROOTWSS } from '@lib/globalvalue';

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
}

const Products: NextPage<Props> = (props) => {
  const {
    pokemonResource, page, perPage, sort, order,
  } = props

  const homePageURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}home` || ''


  


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
  const handleShowstudio = () => setShowstudio(true);

  const [showneform, setShowevent] = useState(false);
  const handleCloseevent = () => setShowevent(false);
  const handleShowevent = () => setShowevent(true);

  const [editorHtml, setEditorHtml] = useState("");
  
  const apiUrl = ROOTURL + "/studio/getStudio";
  const languageapiUrl =  ROOTURL+"/select/getOptionBySelectId/3";
  const currencyapiUrl = ROOTURL + "/select/getOptionBySelectId/2";
  const countryapiUrl = ROOTURL + "/select/getCountryList";
  const categoryapiUrl = ROOTURL + "/select/getCategoryList";
  axios
  .get(languageapiUrl)
  .then((response) => {
    const jsondata = response.data;
    setLanguages(jsondata);
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
  });

axios
  .get(categoryapiUrl)
  .then((response) => {
    const jsondata = response.data;
    setCategory(jsondata);
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
  });

axios
  .get(currencyapiUrl)
  .then((response) => {
    const jsondata = response.data;
    setCurrency(jsondata);
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
  });

axios
  .get(countryapiUrl)
  .then((response) => {
    const jsondata = response.data;
    setCountry(jsondata);
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
  });

  
//  //const fetcher = (url:string) => axios.get(url).then((res) => res.data.json());
//  const fetcher =  (url:string) => {
//   const response =  axios.get(url);
//   return response.data;
// };
//  const { data:l, error:lerror } = useSWR(languageapiUrl, fetcher);
//  setLanguages(l);
//  //const { data:ct, error:cterror } = useSWR(categoryapiUrl, fetcher);
//  //setCategory(ct);
//  const { data:cr, error:crerror } = useSWR(currencyapiUrl, fetcher);
//  setCurrency(cr);
//   const { data:c, error:cerror } = useSWR(countryapiUrl, fetcher);
//   setCountry(c);


  //useSWR('/api/data', fetchcatagory)

  

  return (
    <AdminLayout>
      
    <div id="main" className="main">
      
      <section className="section dashboard">
        <button
          type="button"
          className="btn btn-success mb-2"
          onClick={handleShowstudio}
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
                  onHide={handleClosestudio}
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
                        <form className="row g-3">
                          <h5>Product Prefferences</h5>

                          <div className="col-md-6">
                            <label className="form-label">Product Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName5"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Vendor Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName5"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Stock *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName5"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Price *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName5"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Discount *</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              required
                            >
                              <option value="">Select Discounts</option>
                              {languages.map((item) => (
                                <option
                                  key={item.listName}
                                  value={item.listName}
                                >
                                  {item.listName}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Sale Price *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName5"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Category *</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              required
                            >
                              <option value="">Select Language</option>
                              {category.map((item) => (
                                <option
                                  key={item.listName}
                                  value={item.listName}
                                >
                                  {item.listName}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="col-md-6">
                            <label className="form-label">Currency *</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              required
                            >
                              <option value="">Select Language</option>
                              {currency.map((item) => (
                                <option
                                  key={item.listName}
                                  value={item.listName}
                                >
                                  {item.listName}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Delivery Methods *</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              required
                            >
                              <option value="">Select Language</option>
                              {currency.map((item) => (
                                <option
                                  key={item.listName}
                                  value={item.listName}
                                >
                                  {item.listName}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Commission Details *</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              required
                            >
                              <option value="">Select Language</option>
                              {currency.map((item) => (
                                <option
                                  key={item.listName}
                                  value={item.listName}
                                >
                                  {item.listName}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-6 ">
                            <label className="form-label">Refund Duration *</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              required
                            >
                              <option value="">Select Duration</option>
                              {country.map((item) => (
                                <option
                                  className="overflow-y-scroll"
                                  key={item.countryName}
                                  value={item.countryName}
                                >
                                  {item.countryName}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-6 ">
                            <label className="form-label">Return Methods *</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              required
                            >
                              <option value="">Select  Duration</option>
                              {country.map((item) => (
                                <option
                                  className="overflow-y-scroll"
                                  key={item.countryName}
                                  value={item.countryName}
                                >
                                  {item.countryName}
                                </option>
                              ))}
                            </select>
                          </div>
                          <hr className="hr" />
                          <h5>Product Specification</h5>
                          
                          <div className="col-12">
                            <label
                              htmlFor="inputAddress"
                              className="form-label"
                            >
                              Product Description *
                            </label>
                            <textarea
                              className="form-control"
                              placeholder="Enter Product description"
                              id="floatingTextarea"
                              required
                            ></textarea>
                          </div>

                          <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">
                            Dimension Width(cm)
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputCity"
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">
                            Dimension Height(cm)
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputCity"
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">
                            Dimension Depth(cm)
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputCity"
                              required
                            />
                          </div>
                          
                          <div className="col-md-6">
                            <label htmlFor="inputZip" className="form-label">
                              VAST Link *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputZip"
                              required
                            />
                          </div>
                          <div className="col-6">
                            <label htmlFor="inputCity" className="form-label">
                              Upload Product images
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="bannerpic"
                             // onChange={handlebImageChange}
                              accept="image/*"
                            />
                            * You can Arrage the images after upload

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
                                          class="img-fluid rounded-start border rounded"
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
                            <button type="reset" className="btn btn-secondary">
                              Reset
                            </button>
                          </div>
                        </form>
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
                          <label
                            className="col-sm-2 col-form-label"
                          >
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
                          <label
                            className="col-sm-2 col-form-label"
                          >
                            Date
                          </label>
                          <div className="col-sm-10">
                            <input type="date" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                          >
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
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const homePageURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons` || ''
  let page = 1
  if (context.query?.page && typeof context.query.page === 'string') {
    page = parseInt(context.query.page, 10)
  }

  let perPage = 20
  if (context.query?.per_page && typeof context.query.per_page === 'string') {
    perPage = parseInt(context.query.per_page.toString(), 10)
  }

  let sort = 'id'
  if (context.query?.sort && typeof context.query.sort === 'string') {
    sort = context.query.sort
  }

  let order = 'asc'
  if (context.query?.order && typeof context.query.order === 'string') {
    order = context.query.order
  }

  const { data: pokemons, headers } = await axios.get<Pokemon[]>(homePageURL, {
    params: {
      _page: page,
      _limit: perPage,
      _sort: sort,
      _order: order,
    },
  })

  const total = parseInt(headers['x-total-count'], 10)
  const pokemonResource: Resource<Pokemon> = newResource(pokemons, total, page, perPage)

  return {
    props: {
      pokemonResource,
      page,
      perPage,
      sort,
      order,
    }, // will be passed to the page component as props
  }
}

export default Products
