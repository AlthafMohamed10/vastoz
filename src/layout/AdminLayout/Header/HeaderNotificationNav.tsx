import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBell, faPaperPlane,faEnvelope, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import {
  faBasketShopping,
  faCartShopping,
  faUserPlus,
  faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons'
import {
  Badge, Dropdown, Nav, NavLink, ProgressBar,
} from 'react-bootstrap'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Image from 'next/image'

type ItemWithIconProps = {
  icon: IconDefinition;
} & PropsWithChildren

const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

export default function HeaderNotificationNav() {
  return (
    <Nav>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle as={NavLink} bsPrefix="hide-caret" id="dropdown-notification">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <Badge pill bg="danger" className="position-absolute top-0 right-0">
              !
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu className="pt-0" align="end">
            <Dropdown.Header className="bg-light fw-bold rounded-top">You have a notifications</Dropdown.Header>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <ItemWithIcon icon={faCartShopping}>
                  New Orders received
                </ItemWithIcon>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <ItemWithIcon icon={faUserPlus}>
                  New Subscribers
                </ItemWithIcon>
              </Dropdown.Item>
            </Link>
            
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <ItemWithIcon icon={faMoneyCheckDollar}>
                  Payment Credited
                </ItemWithIcon>
              </Dropdown.Item>
            </Link>
            
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle as={NavLink} bsPrefix="hide-caret" id="dropdown-mail">
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            <Badge pill bg="primary" className="position-absolute top-0 right-0">
              7
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu className="pt-0" align="end">
            <Dropdown.Header className="bg-light fw-bold rounded-top">You have a messages</Dropdown.Header>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <div className="message">
                  
                  <div>
                    <small className="text-muted">Kris</small>
                    <small className="text-muted float-end mt-1">Just now</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    
                    Question?
                  </div>
                  <div className="small text-truncate text-muted">
                    Can I get appointment tommorow?
                  </div>
                </div>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <div className="message">
                  
                  <div>
                    <small className="text-muted">John</small>
                    <small className="text-muted float-end mt-1">5 mins ago</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Question?
                  </div>
                  <div className="small text-truncate text-muted">
                    How long i need to use this tablets?
                  </div>
                </div>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <div className="message">
                  
                  <div>
                    <small className="text-muted">Greg</small>
                    <small className="text-muted float-end mt-1">1:52 PM</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Tutorial
                  </div>
                  <div className="small text-truncate text-muted">
                    Tutorial is not available in Russian language
                  </div>
                </div>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <div className="message">
                  
                  <div>
                    <small className="text-muted">Suresh</small>
                    <small className="text-muted float-end mt-1">4:03 PM</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Order
                  </div>
                  <div className="small text-truncate text-muted">
                    Where is my order?
                  </div>
                </div>
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </Nav>
  )
}
