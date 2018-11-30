import React from 'react'
import { Link } from 'gatsby'

import Hero from '../components/hero'
import Layout from '../components/layout'
import SiteNavContainer from '../containers/site-nav'

const IndexPage = () => (
  <Layout>
    <SiteNavContainer
      siteTitle="TechFuge"
      menu={{
        items: [
          { key: 'home', to: '/', label: 'Home' },
          { key: 'features', to: '/features/', label: 'Features' },
          { key: 'pricing', to: '/pricing/', label: 'Pricing' },
        ],
      }}
    />

    <Hero
      headline="My awesome headline that explains the whole shebang"
      intro={
        <>
          <p>My awesome intro that explains the whole shebang.</p>
        </>
      }
    />
  </Layout>
)

export default IndexPage
