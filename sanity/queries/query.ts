import { defineQuery } from "next-sanity";

const BRANDS_QUERY = defineQuery(`*[_type=='brand'] | order(name asc) `);

const LATEST_BLOG_QUERY = defineQuery(
  ` *[_type == 'blog' && isLatest == true]|order(name asc){
      ...,
      blogcategories[]->{
      title
    }
    }`,
);

const DEAL_PRODUCTS = defineQuery(
  `*[_type == 'product' && status == 'hot'] | order(name asc){
    ...,"categories": categories[]->title
  }`,
);

const CATEGORY_PRODUCTS_QUERY =
  defineQuery(`*[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] 
| order(name asc){
  ...,
  "categories": categories[]->title
}`);
const PRODUCT_BY_SLUG_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`,
);

const BRAND_QUERY = defineQuery(`*[_type == "product" && slug.current == $slug]{
  "brandName": brand->title
  }`);

const FILTERED_PRODUCTS_QUERY = defineQuery(`
        *[_type == 'product'
          && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
          && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
          && price >= $minPrice && price <= $maxPrice
        ]
        | order(name asc) {
          ...,"categories": categories[]->title
        }
      `);

const GET_ALL_BLOGS_QUERY = defineQuery(
  `*[_type == 'blog'] | order(publishedAt desc)[0...$quantity]{
  ...,  
     blogcategories[]->{
    title
}
    }
  `,
);

const SINGLE_BLOG_QUERY =
  defineQuery(`*[_type == "blog" && slug.current == $slug][0]{
  ..., 
    author->{
    name,
    image,
  },
  blogcategories[]->{
    title,
    "slug": slug.current,
  },
}`);

const OTHERS_BLOGS_QUERY = defineQuery(`*[
  _type == "blog"
  && defined(slug.current)
  && slug.current != $slug
]|order(publishedAt desc)[0...$quantity]{
...
  publishedAt,
  title,
  mainImage,
  slug,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}`);

const CATEGORIES_QUERY = defineQuery(
  `*[_type == 'category'] | order(name asc) [0...$quantity] {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`,
);

const ADDRESSES_QUERY = `*[_type=="address"] | order(publishedAt desc)`;
export {
  BRANDS_QUERY,
  LATEST_BLOG_QUERY,
  DEAL_PRODUCTS,
  CATEGORY_PRODUCTS_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  BRAND_QUERY,
  FILTERED_PRODUCTS_QUERY,
  GET_ALL_BLOGS_QUERY,
  SINGLE_BLOG_QUERY,
  OTHERS_BLOGS_QUERY,
  ADDRESSES_QUERY,
  CATEGORIES_QUERY,
};
