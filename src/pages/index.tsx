import Head from 'next/head'
import { searchAtom } from '@/components/SearchBar'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { useAtom } from 'jotai'
import Loading from '@/components/Loading'
import SearchPage, { Videos } from '@/components/SearchPage'

export default function Home() {
  const [videosData, setVideoData] = useState<Videos>()
  const [loading, setLoading] = useState(true)
  const search = useAtom(searchAtom)

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = 'https://www.googleapis.com/youtube/v3/search'
      const API_KEY = 'AIzaSyBdzFXjenkEvH1bCRyXUXna8NIQkIZ2Xj8'

      const maxVideoResults = 2

      const videoResult = await axios(
        `${API_URL}?key=${API_KEY}&part=snippet&maxResults=${maxVideoResults}${
          search ? `&q=${search}` : ''
        }`,
      )

      if (!videoResult) {
        setLoading(true)
        console.log('error' + AxiosError)
      } else {
        setLoading(false)
        setVideoData(videoResult.data)
      }
    }

    fetchData()
  }, [search])

  return (
    <>
      <Head>
        <title>Youtube</title>
        <meta name="description" content="Youtube app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading && <Loading loading={loading} />}
      {videosData && <SearchPage videos={videosData} />}
    </>
  )
}
