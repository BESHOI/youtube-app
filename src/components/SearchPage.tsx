import { formatDistanceToNowStrict } from 'date-fns'
import ChannelInfo from './ChannelInfo'
import FilterHeader from './FilterHeader'
import { Box, Grid, StyledImage, Text } from './utils'

export type Videos = {
  kind: string
  etag: string
  id: {
    kind: string
    videoId: string
    channelId: string
    playlistId: string
  }
  items: [
    {
      id: {
        kind: string
        videoId: number
      }
      snippet: {
        publishedAt: string
        channelId: string
        title: string
        description: string
        thumbnails: {
          default: {
            url: string
            width: number
            height: number
          }
          medium: {
            url: string
            width: number
            height: number
          }
          high: {
            url: string
            width: number
            height: number
          }
        }
        channelTitle: string
        liveBroadcastContent: string
        publishTime: string
      }
    },
  ]
  regionCode: String
  pageInfo: {
    totalResults: string
    resultsPerPage: string
  }
}

export default function SearchPage({ videos }: Videos) {
  return (
    <>
      {videos &&
        [videos].map((video, index) => {
          const totalResults = video.pageInfo.totalResults
          const channelId = video.id
          return (
            <Grid css={{ gap: '$2' }} key={index}>
              <FilterHeader totalResults={totalResults} />
              <ChannelInfo id={channelId} />
              {video.items.map((item) => {
                const { videoId } = item.id
                const { title, channelTitle, publishedAt, description } = item.snippet
                const { default: mobile, medium: tablet, high: desktop } = item.snippet.thumbnails
                const fromNow = formatDistanceToNowStrict(new Date(publishedAt))
                return (
                  <Grid
                    css={{ gridTemplateColumns: '1fr 2fr', gap: '$2', maxWidth: '100%' }}
                    key={videoId}
                  >
                    <Box>
                      <StyledImage
                        src={desktop.url}
                        alt={title}
                        width={mobile.width}
                        height={mobile.height}
                        priority
                        css={{
                          objectFit: 'cover',
                          // borderRadius: '$3',
                          '@bp1': { width: tablet.width, height: tablet.height },
                        }}
                      />
                    </Box>

                    <Box>
                      <Text css={{ fontSize: '$2', fontWeight: '$1' }}>{title}</Text>
                      <Text css={{ display: 'flex', gap: '$1' }}>
                        <Text as="small">{channelTitle}</Text>
                        <Text as="small">{fromNow} ago</Text>
                      </Text>
                      <Text>{description}</Text>
                    </Box>
                  </Grid>
                )
              })}
            </Grid>
          )
        })}
    </>
  )
}
