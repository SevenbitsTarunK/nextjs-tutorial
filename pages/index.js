import Head from 'next/head'
import Link from 'next/link'

export default function Home({articles}) {
  return (
    <div>
      <h1>Welcome to next.js</h1>

      {articles.map((e) => {
        return (
          <Link href={"/article/"+e.id}><h3>{e.title}</h3></Link>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=7")
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
