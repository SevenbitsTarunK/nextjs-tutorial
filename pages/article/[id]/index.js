import React from 'react'
import Link from 'next/link'

const article = ({article}) => {
  return (
    <div>
        <h4>{article.title}</h4>
        <p>{article.body}</p>
        <Link href="/">Go back</Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        },
        revalidate: 30
    }
}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=7")
    const articles = await res.json()

    const ids = articles.map((article) => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default article