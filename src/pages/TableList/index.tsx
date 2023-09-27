import { GetServerSideProps, NextPage } from 'next'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import React from 'react'
import { TableList } from '@models/table'
import { newResource, Resource } from '@models/resource'
import { Pagination } from '@components/Pagination'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import { TableProductList } from '@components/TableProducts'
// import { AdminLayout } from '@layout'

type Props = {
  prodResource: Resource<TableList>;
  page: number;
  perPage: number;
  sort: string;
  order: string;
}

const TableListing: NextPage<Props> = (props) => {
  const {
    prodResource, page, perPage, sort, order,
  } = props

  const prodListURL = `${process.env.NEXT_PUBLIC_TABLE_LIST_API_BASE_URL}productsOne` || ''

  // swr: data -> axios: data -> resource: data
  const { data: { data: resource } } = useSWRAxios<Resource<TableList>>({
    url: prodListURL,
    params: {
      _page: page,
      _limit: perPage,
      _sort: sort,
      _order: order,
    },
    transformResponse: transformResponseWrapper((d: TableList[], h) => {
      const total = h ? parseInt(h['x-total-count'], 10) : 0
      return newResource(d, total, page, perPage)
    }),
  }, {
    data: prodResource,
    headers: {
      'x-total-count': prodResource.meta?.total?.toString(),
    },
  })

  return (
    // <AdminLayout>
    <Card>
      <Card.Header>Table</Card.Header>
      <Card.Body>
        <Pagination meta={resource.meta} />
        <TableProductList tableList={resource.data} />
        <Pagination meta={resource.meta} />
      </Card.Body>
    </Card>
    // </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const prodListURL = `${process.env.NEXT_PUBLIC_TABLE_LIST_API_BASE_URL}productsOne` || ''
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

  const { data: tableList, headers } = await axios.get<TableList[]>(prodListURL, {
    params: {
      _page: page,
      _limit: perPage,
      _sort: sort,
      _order: order,
    },
  })

  const total = parseInt(headers['x-total-count'], 10)
  const prodResource: Resource<TableList> = newResource(tableList, total, page, perPage)

  return {
    props: {
      prodResource,
      page,
      perPage,
      sort,
      order,
    }, // will be passed to the page component as props
  }
}

export default TableListing
