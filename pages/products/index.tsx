import { GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import NotFound from '../404'

type productsProps = {
  products : any[]
}

const Products = ({products}: productsProps) => {
  console.log('client');
  console.log('product', products);
  if(!products) return null
  return (
    <div>{products.map(item => {
    return  <p key={item.id}>{item.name}</p>
    })}</div>
  )
}
//Chạy ở server
export const getStaticProps: GetStaticProps<productsProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("Get static props - server ");
  const data = await (await fetch(`http://localhost:3001/products`)).json()
  console.log('data', data);
  if(!data) return { notFound: true}
  return {
    props: {
      products: data
    }
  }
}
export default Products