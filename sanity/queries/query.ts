import { defineQuery } from "next-sanity";

const BRANDS_QUERY = defineQuery(`*[_type=='brand'] | order(name asc) `);


const LATEST_BLOG_QUERY = defineQuery(
  ` *[_type == 'blog' && isLatest == true]|order(name asc){
      ...,
      blogcategories[]->{
      title
    }
    }`
);

const DEAL_PRODUCTS = defineQuery(
  `*[_type == 'product' && status == 'hot'] | order(name asc){
    ...,"categories": categories[]->title
  }`
);

const CATEGORY_PRODUCTS_QUERY = defineQuery(`*[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] 
| order(name asc){
  ...,
  "categories": categories[]->title
}`);

export { BRANDS_QUERY, LATEST_BLOG_QUERY, DEAL_PRODUCTS, CATEGORY_PRODUCTS_QUERY }