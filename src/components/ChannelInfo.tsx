import { styled } from '@/stitches.config'
import axios, { AxiosError } from 'axios'
import { useState, useEffect } from 'react'
import { StyledImage } from './utils'

type Props = {
  id: string
}

type Channel = {
  kind: string
  etag: string
  id: string
  snippet: {
    title: string
    description: string
    customUrl: string
    publishedAt: string
    thumbnails: {
      high: {
        url: string
        width: number
        height: number
      }
    }
    statistics: {
      viewCount: string
      subscriberCount: string
      videoCount: string
    }
  }
}

const ChannelWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '@bp3': { display: 'none' },
})

export default function ChannelInfo({ id }: Props) {
  const [data, setData] = useState<Channel>()

  useEffect(() => {
    const fetchChannel = async () => {
      const API_URL = 'https://www.googleapis.com/youtube/v3/channel'
      const API_KEY = 'AIzaSyBdzFXjenkEvH1bCRyXUXna8NIQkIZ2Xj8'
      const maxResults = 1
      const result = await axios(`${API_URL}?key=${API_KEY}&part=snippet&maxResults=${maxResults}`)

      if (!result) {
        console.log('error' + AxiosError)
      } else {
        setData(result.data)
      }
    }

    fetchChannel()
  }, [id])

  return (
    <>
      {data &&
        [data].map((item) => {
          const { title, description } = item?.snippet
          const high = item?.snippet.thumbnails
          return (
            <ChannelWrapper key={item?.id}>
              <p>{title}</p>
              <p>{description}</p>
              <StyledImage
                src={high.url}
                alt={title}
                width={high.width}
                height={high.high}
                priority
                css={{ borderRadius: '$5' }}
              />
            </ChannelWrapper>
          )
        })}
    </>
  )
}
