import { GetServerSideProps, NextPage } from 'next'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import React from 'react'
import { newResource, Resource } from '@models/resource'
import { Pagination } from '@components/Pagination'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import { Sample } from '@models/sample'
import ProductsListTable from '@components/SampleList'

type Props = {
  sampleResource: Resource<Sample>;
  page: number;
  perPage: number;
  sort: string;
  order: string;
}

const SampleTable: NextPage<Props> = (props) => {
  const {
    sampleResource, page, perPage, sort, order,
  } = props

  const sampleListURL = `${process.env.NEXT_PUBLIC_DATA_LIST_API_BASE_URL}comments` || ''

  // swr: data -> axios: data -> resource: data
  const { data: { data: resource } } = useSWRAxios<Resource<Sample>>({
    url: sampleListURL,
    params: {
      _page: page,
      _limit: perPage,
      _sort: sort,
      _order: order,
    },
    transformResponse: transformResponseWrapper((d: Sample[], h) => {
      const total = h ? parseInt(h['x-total-count'], 10) : 0
      return newResource(d, total, page, perPage)
    }),
  }, {
    data: sampleResource,
    headers: {
      'x-total-count': sampleResource.meta.total.toString(),
    },
  })

  return (
    // <AdminLayout>
      <Card>
        <Card.Header>Sample</Card.Header>
        <Card.Body>
          <Pagination meta={resource.meta} />
          <ProductsListTable sample={resource.data} />
          <Pagination meta={resource.meta} />
        </Card.Body>
      </Card>
    // </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const sampleListURL = `${process.env.NEXT_PUBLIC_DATA_LIST_API_BASE_URL}comments` || ''
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

  const { data: sample, headers } = await axios.get<Sample[]>(sampleListURL, {
    params: {
      _page: page,
      _limit: perPage,
      _sort: sort,
      _order: order,
    },
  })

  const total = parseInt(headers['x-total-count'], 10)
  const sampleResource: Resource<Sample> = newResource(sample, total, page, perPage)

  return {
    props: {
      sampleResource,
      page,
      perPage,
      sort,
      order,
    }, // will be passed to the page component as props
  }
}

export default SampleTable
