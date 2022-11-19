import React from 'react'
import SearchBar from './SearchBar'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <SearchBar />
      <main className="flow container">{children}</main>
    </>
  )
}
