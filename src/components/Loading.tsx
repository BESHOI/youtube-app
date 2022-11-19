import { styled } from '@/stitches.config'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  loading: boolean
  // value: number
  // max: number
}

const LoadingDesktop = styled('progress', {
  position: 'absolute',
  top: '$0',
  left: '$0',
  width: '100%',
  height: '10px',
  display: 'none',
  '@bp3': {
    display: 'block',
  },
})

const LoadingMobile = styled('div', {
  height: '100px',
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  '@bp3': {
    display: 'none',
  },
})

export default function Loading({ loading }: Props) {
  let [value, setValue] = useState(20)

  useEffect(() => {
    loading ? setValue(value < 100 ? (value += 20) : value) : 100
  }, [value])
  return (
    <>
      <LoadingDesktop value={value} max={100} />
      <LoadingMobile>
        <Image src="/loading-spinner.gif" alt="spinner-logo" width={100} height={100} priority />
      </LoadingMobile>
    </>
  )
}
