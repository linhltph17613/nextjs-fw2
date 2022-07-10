import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

type productProps = {
  product: any;
};

const ProductDetail = ({ product }: productProps) => {
  if (!product) return null;
  return <div>ProductDetail : {product.name}</div>;
};

// export const getStaticPaths: GetStaticPaths<productProps> = async () => {
//   console.log("Get static props - server");
//   const data = await (await fetch(`http://localhost:3001/products`)).json();
//   const paths = data.map((item: { id: any }) => {
//     return { params: { id: item.id } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

// //Chạy ở server
// export const getStaticProps: GetStaticProps<productProps> = async (
//   context: GetStaticPropsContext
// ) => {
//   // console.log("Get static props - server ");
//   // console.log("context", context.params?.id);

//   //call api
//   const data = await (
//     await fetch(`http://localhost:3001/products/` + context.params?.id)
//   ).json();

//   if (!data)
//     return {
//       notFound: true,
//     };
//   return {
//     props: {
//       product: data,
//     },
//     revalidate: 10
//   };

// };

export const getServerSideProps: GetServerSideProps = async(context: GetServerSidePropsContext) => {
  context.res.setHeader(
    'Cache-Control',
    's-maxage=5, stale-while-revalidate'
  )
  const data = await (await fetch(`http://localhost:3001/products/${context.params?.id}`)).json()
  return {
    props: {
      product: data,
    },
  };
}

export default ProductDetail;
// Static Site Generation => Render ra cac file html co san
// Server Side rendering => server trả về dữ liệu khi user truy cap
// Client Side rendering => giống react
// Icremental Static Generation => 
// cache dữ liệu, khi truy cập vào 1 page không có thì sẽ chờ thời gian tạo page mới