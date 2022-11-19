import { styled } from '@/stitches.config'
import { BsFilter } from 'react-icons/bs'
import { Flex, Text } from './utils'
import Downshift from 'downshift'

type Props = {
  totalResults: string
}

const Hr = styled('hr', {
  width: '100%',
})

const FilterHeaderDesktop = styled('div', {
  display: 'none',
  '@bp3': {
    display: 'block',
  },
})

const FilterHeaderMobile = styled('div', {
  display: 'block',
  '@bp3': {
    display: 'none',
  },
})

export default function FilterHeader({ totalResults }: Props) {
  return (
    <>
      <FilterHeaderDesktop>
        <Flex css={{ justifyContent: 'space-between' }}>
          <Text>About {totalResults} filtered results</Text>
          <BsFilter />
        </Flex>
        <Hr />
      </FilterHeaderDesktop>

      <FilterHeaderMobile css={{ mt: '$7' }}>
        <Flex css={{ gap: '$2' }}>
          <button>All &#x25BE;</button>
          <button>Any time &#x25BE;</button>
        </Flex>
        <Hr />
      </FilterHeaderMobile>
    </>
  )
}
