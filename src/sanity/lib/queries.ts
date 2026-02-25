import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  "author": author->{name, image},
  "categories": categories[]->{title}
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  "author": author->{name, image, bio},
  "categories": categories[]->{title, description},
  body
}`;

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;

export const authorQuery = groq`*[_type == "author"][0] {
  name,
  image,
  bio
}`;
