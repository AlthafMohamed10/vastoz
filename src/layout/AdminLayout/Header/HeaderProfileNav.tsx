import {
  Badge, Dropdown, Nav, NavItem, NavLink,
} from 'react-bootstrap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCreditCard,
  faEnvelopeOpen,
  faFile,
  faMessage,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import { PropsWithChildren, useEffect, useState } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faGear, faListCheck, faLock, faPowerOff,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

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


export default function HeaderProfileNav() {
  const router = useRouter()
  const [uname, setUname] = useState()

  // useEffect(() => {
  //   // Perform localStorage action
  //   setUname(localStorage.getItem('username'))
  // }, [])
  async function logout(): Promise<void> {
    const res = await axios.post('/api/mock/logout')
    if (res.status === 200) {
      router.push('/login')
    }
  }

  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink} bsPrefix="hide-caret" id="dropdown-notification">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="pt-0">
          <Dropdown.Header className="bg-light fw-bold">Welcome, {uname}</Dropdown.Header>

          <Dropdown.Header className="bg-light fw-bold">Settings</Dropdown.Header>

          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faUser}>Profile</ItemWithIcon>
            </Dropdown.Item>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faCreditCard}>Payments</ItemWithIcon>
            </Dropdown.Item>
          </Link>

          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>
            <ItemWithIcon icon={faPowerOff}>Logout</ItemWithIcon>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}
