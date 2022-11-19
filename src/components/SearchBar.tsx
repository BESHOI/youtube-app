import { styled } from '@/stitches.config'
import { atom, useAtom } from 'jotai'
import { atomWithReset, useResetAtom } from 'jotai/utils'
import Image from 'next/image'
import { BsSearch, BsX } from 'react-icons/bs'
import { Box, Flex } from './utils'

type Props = {}

const SearchHeader = styled('div', {
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '1fr 3fr',
  backgroundColor: '$red',
  position: 'fixed',
  width: '100%',

  '@bp3': {
    backgroundColor: 'unset',
    position: 'unset',
    maxWidth: '75rem',
    mi:'$auto'
  },
})

const Input = styled('input', {
  lineHeight: '2rem',
  width: '80%',
  outline: '$gray',
})

const ClearSearch = styled(BsX, {
  position: 'absolute',
  fontSize: '$2',
  right: '25%',
  '@bp2': {
    right: '22%',
  },
})

const SearchLabel = styled('label', {
  width: '75px',
  height: '38px',
  display: 'grid',
  placeItems: 'center',
  marginLeft: '-$2',

  '@bp3': {
    backgroundColor: '$gray',
  },
})

const SearchBtn = styled(BsSearch, {
  color: '$white',
  '@bp2': {
    color: 'unset',
  },
})

const initialSearchAtom = atomWithReset('')
export const searchAtom = atom('')

export default function SearchBar({}: Props) {
  const [value, setValue] = useAtom(initialSearchAtom)
  const [searchInput, setSearchInput] = useAtom(searchAtom)
  const reset = useResetAtom(initialSearchAtom)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchInput(value)
  }

  return (
    <>
      <SearchHeader css={{}}>
        <Box css={{ display: 'none', '@bp3': { display: 'block' } }}>
          <Image src="/youtube-desktop.svg" alt="youtube-logo" width={150} height={75} />
        </Box>

        <Box css={{ display: 'block', '@bp3': { display: 'none' } }}>
          <Image src="/youtube-mobile.svg" alt="youtube-logo" width={100} height={50} />
        </Box>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Flex
            css={{
              gap: '$2',
              alignItems: 'center',
              flex: '1',
              position: 'relative',
            }}
          >
            <Input
              type="text"
              placeholder="search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              id="search"
            />
            {value !== '' && <ClearSearch onClick={reset} />}

            <SearchLabel htmlFor="search" onClick={(e) => handleSubmit(e)}>
              <SearchBtn />
            </SearchLabel>
          </Flex>
        </form>
      </SearchHeader>
    </>
  )
}
