import Head from 'next/head'

// Components
import Header from '@components/header'

// Styles


export default function Home() {
  return (
    <div>
      <Head >
        <title>Create Next App</title>
      </Head>

      <main>
        <Header />
      </main>
    </div>
  )
}
