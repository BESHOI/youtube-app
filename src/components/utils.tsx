import { styled } from '@/stitches.config'
import Image from 'next/image'

export const Grid = styled(`div`, {
  display: `grid`,
})

export const Flex = styled(`div`, {
  display: `flex`,
})

export const Box = styled(`div`, {})

export const Text = styled(`p`, {})

export const StyledImage = styled(Image, {})
