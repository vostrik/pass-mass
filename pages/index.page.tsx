import Head from 'next/head'

import { Dashboard } from '../components/dashboard/dashboard'
import { Table } from '../components/table/table'
import { Logo } from '../components/logo/logo'
import { Avatar } from '../components/avatar/avatar'
import { Category } from '../components/category/category'

import { TDataSet } from '../types/dataset'
import { TCategory } from '../types/category'

import { footerStyle } from './app.css'

export default function Home() {
  const dataset: TDataSet = [
    { id: '1', date: 'January', value: 8 },
    { id: '2', date: 'February', value: 6 },
    { id: '3', date: 'March', value: 11 },
    { id: '4', date: 'April', value: 6 },
    { id: '5', date: 'May', value: 8 },
    { id: '6', date: 'June', value: 7 },
    { id: '7', date: 'July', value: 10 },
  ]

  const categories: Array<TCategory> = [
    {
      id: '1',
      name: 'Weight',
      units: 'kg',
      goal: 5
    },
    {
      id: '2',
      name: 'Сalories',
      units: 'kcal',
      goal: 500
    }
  ]
  const addCategory = () => {}

  return (
    <>
      <Head>
        <title>PassMass — easy-breezy control</title>
        <meta name="description" content="PassMass — easy-breezy control" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Avatar />
        <Logo />
      </header>
      <main>
        <div>
          <Category categories={categories} addCategory={addCategory} />
          <Dashboard dataset={dataset} metricName='weight' metricUnit='kg' />
          <Table dataset={dataset} category={categories[0]} />
        </div>
      </main>
      <footer className={footerStyle}>
        <Logo /> by <a href="https://vostrik.com">vostrik</a> with &lt;3
      </footer>
    </>
  )
}
