import { getLastTwoBlogs } from '../../page'
import PageClient from './page.client'

const page = async () => {
  const posts = await getLastTwoBlogs()
  return <PageClient posts={posts} />
}

export default page
