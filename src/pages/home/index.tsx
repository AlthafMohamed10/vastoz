import { GetServerSideProps, NextPage } from 'next'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import React from 'react'
import { AdminLayout } from '@layout'
import { Pokemon } from '@models/pokemon'
import { newResource, Resource } from '@models/resource'
import { Pagination } from '@components/Pagination'
import { PokemonList } from '@components/Pokemon'
import { transformResponseWrapper, useSWRAxios } from '@hooks'

type Props = {
  pokemonResource: Resource<Pokemon>;
  page: number;
  perPage: number;
  sort: string;
  order: string;
}

const HomePage: NextPage<Props> = (props) => {
  const {
    pokemonResource, page, perPage, sort, order,
  } = props

  const homePageURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}home` || ''

  // swr: data -> axios: data -> resource: data
  const { data: { data: resource } } = useSWRAxios<Resource<Pokemon>>({
    url: homePageURL,
    params: {
      _page: page,
      _limit: perPage,
      _sort: sort,
      _order: order,
    },
    transformResponse: transformResponseWrapper((d: Pokemon[], h) => {
      const total = h ? parseInt(h['x-total-count'], 10) : 0
      return newResource(d, total, page, perPage)
    }),
  }, {
    data: pokemonResource,
    headers: {
      'x-total-count': pokemonResource.meta.total.toString(),
    },
  })

  return (
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

export default HomePage
