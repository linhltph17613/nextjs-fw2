import useProducts from '@/hooks/use-product'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import NotFound from '../404'

type productsProps = {
  products : any[]
}
const url = "https://6110f09bc38a0900171f0ed0.mockapi.io/products";
const fetcher = async (url : string) => await (await fetch(url)).json()

//client


const ProductPage = () => {
  // const { data, error } = useSWR(url, fetcher, {
  //   revalidateOnMount: false,
  //   revalidateOnFocus: true,
  // });
  const {data, error } = useProducts()
  if (error) return <div>false to load</div>;
  if (!data) return <div>loading...</div>;

  // const [products,setProducts] = useState([]);
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //     (async() => {
  //         try {
  //             const data = await ( await fetch(url)).json();
  //             if(!data){
  //                 setIsLoading(true);
  //             }
  //             setProducts(data);
  //             setIsLoading(false);

  //         } catch (error) {
  //             setError("Fail to load")
  //         }
  //     })()
  // }, [])

  //   console.log('client');
  //   console.log('product', products);
  //   if(!products) return null
  //   return (
  //     <div>{products.map(item => {
  //     <h1>Hihi</h1>;

  //     return  <p key={item.id}>{item.name}</p>
  //     })}</div>
  //   )
  // }
  // //Chạy ở server
  // export const getStaticProps: GetStaticProps<productsProps> = async (
  //   context: GetStaticPropsContext
  // ) => {
  //   console.log("Get static props - server ");
  //   const data = await (await fetch(`http://localhost:3001/products`)).json()
  //   console.log('data', data);
  //   if(!data) return { notFound: true}
  //   return {
  //     props: {
  //       products: data
  //     }
  //   }
  return (
    <div>
      {data.map((item: {id: number, name: string}) => (
        <div key={item.id} ><Link href={`/products/${item.id}`}>{item.name}</Link></div>
      ))}
    </div>
  )
}

export default ProductPage;