import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { AdminLayout } from '@layout'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const Home: NextPage = () => (
  <AdminLayout>
    <div id="main" className="main ">
      <div className="pagetitle">
        
      </div>
      <section className="section dashboard">
        <div className="row">
          {/* Left side columns */}
          <div className="col-lg-6 col-xxl-6 ">
            <div className="row">
              {" "}
              {/* Name show in the home page */}
              {/* Recent Sales */}
              <div className="col-12 h-40">
                <div className="card recent-sales overflow-aut">
                  <div className="card-body">
                    <h5 className="card-title">
                      Vastcast 
                    </h5>
                    <div className="d-grid pt-30">
                  <button className="btn btn-danger" type="button">
                    View More
                  </button>
                </div>
                  </div>
                </div>
              </div>
              {/* End Recent Sales */}
              {/* Top Selling */}
            </div>
          </div>
          {/* End Left side columns */}
          <div className="col-lg-6 ">
            <div className="card">
             
              <div className="card-body">
                <h5 className="card-title">
                  VasCast Creator, Go Live Now!!
                </h5>
                <div className="d-grid gap-2 mt-3">
                  <button className="btn btn-success" type="button">
                    New VastCast
                  </button>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button className="btn btn-primary" type="button">
                    Use Saved VastCast Settings
                  </button>
                </div>
                <h5 className="card-title mt-5">
                  VCOD Creator
                </h5>
                <div className="d-grid gap-2 mt-3">
                  <button className="btn btn-success" type="button">
                    Upload VCOD
                  </button>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button className="btn btn-primary" type="button">
                    Use Saved VCOD Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </AdminLayout>
)

export default Home
