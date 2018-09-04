import React from 'react'
import styled from 'styled-components'
import { width } from 'styled-system'
import {
  Head,
  Link,
  StyleProvider,
  Layout,
  NavLinks,
  Pagination,
  ScrollTop,
} from 'mdx-go'
import * as Rebass from 'rebass'
import {
  Provider,
  Flex,
  Box,
  Border,
  Relative,
  Absolute,
  Container,
  NavLink,
  BlockLink,
  ButtonTransparent,
  Text,
  Divider,
  theme
} from 'rebass'
import { display, color } from 'styled-system'
import MenuIcon from 'rmdi/lib/Menu'
import RebassMDX from '@rebass/mdx'

export const photo = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
export const docs = '/getting-started'
export const install = 'npm i rebass'
export const github = 'https://github.com/jxnblk/rebass'

export const scope = {
  ...Rebass,
  photo
}

export const navigation = [
  { name: 'Rebass', href: '/' },
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'Props', href: '/props' },
  { name: 'Grid System', href: '/grid-system' },
  { name: 'Theming', href: '/theming' },
  { name: 'Extending', href: '/extending' },
  { name: 'Server Side Rendering', href: '/server-side-rendering' },
  { name: 'Colors', href: '/colors' },
]

const nav = [
  'Rebass',
  'Getting Started',
  'Props',
  'Grid System',
  'Theming',
  'Extending',
  'Server Side Rendering',
  'Colors',
]

export const PageLayout = props =>
  <Layout>
    <Layout.MenuToggle m={3} />
    <Layout.Sidebar>
      <NavLinks
        {...props}
        py={2}
        order={nav}
        filter={route => nav.includes(route.name)}
      />
      <Divider />
      <NavLink
        width={1}
        px={3}
        href={github}
        children='GitHub'
      />
      <NavLink
        width={1}
        px={3}
        href='https://jxnblk.com'
        children='Made by Jxnblk'
      />
    </Layout.Sidebar>
    <Layout.Main>
      {props.children}
      <Pagination
        {...props}
        order={nav}
        filter={route => nav.includes(route.name)}
      />
    </Layout.Main>
  </Layout>

export const Root = props => {
  const Layout = props.location.pathname === '/'
    ? props => props.children
    : PageLayout

  return (
    <Provider>
      <React.Fragment>
        <Head>
          <title>Rebass</title>
          <meta name='description' content='React UI component library & design system, built with styled-components and styled-system' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@jxnblk' />
          <meta name='twitter:title' content='Rebass' />
          <meta name='twitter:description' content='React UI component library & design system, built with styled-components and styled-system' />
          <meta name='twitter:image' content='https://rebassjs.org/card.png' />
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto+Mono' />
        </Head>
        <StyleProvider components={scope}>
          <Layout {...props}>
            {props.children}
          </Layout>
        </StyleProvider>
        <ScrollTop {...props} />
        {ga}
      </React.Fragment>
    </Provider>
  )
}

// todo: update domain
const ga = (
  <script
    dangerouslySetInnerHTML={{
      __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-4603832-6', 'auto'); ga('send', 'pageview');`
    }}
  />
)

