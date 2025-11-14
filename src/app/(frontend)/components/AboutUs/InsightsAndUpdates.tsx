import React from 'react'
import InnerUpdates, { PostProps } from './InnerUpdates'

const InsightsAndUpdates = ({ posts }: any) => {
  return <InnerUpdates posts={posts as PostProps[]} />
}

export default InsightsAndUpdates
