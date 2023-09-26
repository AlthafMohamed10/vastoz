import { Breadcrumb as BSBreadcrumb } from 'react-bootstrap'

export default function Breadcrumb() {
  return (
    <BSBreadcrumb listProps={{ className: 'mb-0 align-items-center' }}>
      <BSBreadcrumb.Item
        linkProps={{ className: 'text-decoration-none' }}
        href="/NonCms"
      >
        Home
      </BSBreadcrumb.Item>
      <BSBreadcrumb.Item
        linkProps={{ className: 'text-decoration-none text-black' }}
      >
        Cameras and Accessories
      </BSBreadcrumb.Item>
      {/* <BSBreadcrumb.Item active>Data</BSBreadcrumb.Item> */}
    </BSBreadcrumb>
  )
}
