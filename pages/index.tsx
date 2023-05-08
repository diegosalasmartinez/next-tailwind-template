import Head from 'next/head'

export default function Home() {
  return (
    <div className='flex h-screen flex-col justify-between'>
      <Head>
        <title>My Next Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col items-center gap-0.5 py-6 text-sm text-gray-600'>
        Start here!
      </div>
    </div>
  )
}
