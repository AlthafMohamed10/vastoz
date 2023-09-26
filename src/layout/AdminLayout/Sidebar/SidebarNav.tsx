import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faFileLines,
  faStar,
  IconDefinition,
  
} from '@fortawesome/free-regular-svg-icons'
import { faChromecast } from '@fortawesome/free-brands-svg-icons'

import {
  faHouse,
  faChartPie,
  faChevronUp, faChartColumn,
  faBagShopping,
  faDollarSign,
  faGear,
  faBell,

  faSliders,
  faClock,
  faShieldHalved,
  faPaperPlane,
  faBullhorn,
  faStore,

  faVideo,
  faLocationArrow,

  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons'
import React, {
  PropsWithChildren, useContext, useEffect, useState,
} from 'react'
import {
  Accordion, AccordionContext, Badge, Button, Nav, useAccordionButton,
} from 'react-bootstrap'
import classNames from 'classnames'
import Link from 'next/link'

type SidebarNavItemProps = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren

const SidebarNavItem = (props: SidebarNavItemProps) => {
  const {
    icon,
    children,
    href,
  } = props

  return (
    <Nav.Item>
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className="px-3 py-2 d-flex align-items-center">
          {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
            : <span className="nav-icon ms-n3" />}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  )
}

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

type SidebarNavGroupToggleProps = {
  eventKey: string;
  icon: IconDefinition;
  setIsShow: (isShow: boolean) => void;
} & PropsWithChildren

const SidebarNavGroupToggle = (props: SidebarNavGroupToggleProps) => {
  // https://react-bootstrap.github.io/components/accordion/#custom-toggle-with-expansion-awareness
  const { activeEventKey } = useContext(AccordionContext)
  const {
    eventKey, icon, children, setIsShow,
  } = props

  const decoratedOnClick = useAccordionButton(eventKey)

  const isCurrentEventKey = activeEventKey === eventKey

  useEffect(() => {
    setIsShow(activeEventKey === eventKey)
  }, [activeEventKey, eventKey, setIsShow])

  return (
    <Button
      variant="link"
      type="button"
      className={classNames('rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none', {
        collapsed: !isCurrentEventKey,
      })}
      onClick={decoratedOnClick}
    >
      <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
      {children}
      <div className="nav-chevron ms-auto text-end">
        <FontAwesomeIcon size="xs" icon={faChevronUp} />
      </div>
    </Button>
  )
}

type SidebarNavGroupProps = {
  toggleIcon: IconDefinition;
  toggleText: string;
} & PropsWithChildren

const SidebarNavGroup = (props: SidebarNavGroupProps) => {
  const {
    toggleIcon,
    toggleText,
    children,
  } = props

  const [isShow, setIsShow] = useState(false)

  return (
    <Accordion as="li" bsPrefix="nav-group" className={classNames({ show: isShow })}>
      <SidebarNavGroupToggle icon={toggleIcon} eventKey="0" setIsShow={setIsShow}>{toggleText}</SidebarNavGroupToggle>
      <Accordion.Collapse eventKey="0">
        <ul className="nav-group-items list-unstyled">
          {children}
        </ul>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default function SidebarNav() {
  return (
    <ul className="list-unstyled">
      
      <SidebarNavItem icon={faHouse} href="/home">Home</SidebarNavItem>
      <SidebarNavItem icon={faChromecast} href="/studiomanager">Studio Manager</SidebarNavItem>

      <SidebarNavGroup toggleIcon={faChartColumn} toggleText="Insight">
        <SidebarNavItem href="#">Video</SidebarNavItem>
        <SidebarNavItem href="#">Shop</SidebarNavItem>
        <SidebarNavItem href="#">Studio</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faBagShopping} toggleText="Shop">
        <SidebarNavItem href="/products">Products</SidebarNavItem>
        <SidebarNavItem href="#">Affiliate Products</SidebarNavItem>
        <SidebarNavItem href="#">Purchases</SidebarNavItem>
        <SidebarNavItem href="#">Return</SidebarNavItem>
        <SidebarNavItem href="#">Tax Report</SidebarNavItem>
        <SidebarNavItem href="#">Commission Report</SidebarNavItem>
        <SidebarNavItem href="#">Delivery Option</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavItem icon={faDollarSign} href="#">Discount</SidebarNavItem>

      <SidebarNavGroup toggleIcon={faGear} toggleText="Settings">
        <SidebarNavItem href="#">Profile</SidebarNavItem>
        <SidebarNavItem href="#">Permission</SidebarNavItem>
        <SidebarNavItem href="#">Chat</SidebarNavItem>
      </SidebarNavGroup>
      <SidebarNavItem icon={faShieldHalved} href="#">Safety</SidebarNavItem>
      <SidebarNavItem icon={faBell} href="#">Subscriptions</SidebarNavItem>
      <SidebarNavItem icon={faPaperPlane} href="#">Direct Messages</SidebarNavItem>
      <SidebarNavItem icon={faBullhorn} href="#">Adverts</SidebarNavItem>
      <SidebarNavItem icon={faStore} href="#">Vendors</SidebarNavItem>
    </ul>
  )
}
