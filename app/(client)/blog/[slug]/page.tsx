import Container from "@/components/common/Container";
import { Blog, SINGLE_BLOG_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { getOtherBlogs, getSingleBlog } from "@/sanity/queries";
import dayjs from "dayjs";
import {
  RiCalendar2Line,
  RiArrowLeftLine,
  RiQuillPenAiLine,
  RiArrowRightLine,
} from "@remixicon/react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog: SINGLE_BLOG_QUERYResult = await getSingleBlog(slug);
  if (!blog) return notFound();

  return (
    <div className="pt-5 pb-10">
      <Container>
        {/* Back link */}
        <Link
          href="/blog"
          className="hoverEffect inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary mb-8"
        >
          <RiArrowLeftLine size={15} />
          Back to blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 xl:gap-14">

          {/* ── Main content ── */}
          <article>
            {/* Hero image */}
            {blog?.mainImage && (
              <div className="rounded-2xl overflow-hidden mb-8 aspect-video">
                <Image
                  src={urlFor(blog.mainImage).width(1200).url()}
                  alt={blog.title ?? "Blog image"}
                  width={1200}
                  height={700}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {blog?.blogcategories?.map((item: { title: string }, i: number) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wide bg-primary/10 text-primary border border-primary/20 leading-loose"
                >
                  {item?.title}
                </span>
              ))}
              {blog?.author?.name && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground leading-loose">
                  <RiQuillPenAiLine size={13} style={{ transform: 'scaleX(-1)' }}/>
                  {blog.author.name}
                </span>
              )}
              <span className="flex items-center gap-1 text-xs text-muted-foreground leading-loose">
                <RiCalendar2Line size={13} />
                {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug mb-8">
              {blog?.title}
            </h1>

            {/* Body */}
            {blog.body && (
              <div className="prose-custom text-foreground/80 text-sm leading-7">
                <PortableText
                  value={blog.body}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="my-5 text-base/8 text-muted-foreground first:mt-0 last:mb-0">
                          {children}
                        </p>
                      ),
                      h2: ({ children }) => (
                        <h2 className="my-6 text-2xl font-bold tracking-tight text-foreground first:mt-0 last:mb-0">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="my-5 text-xl font-semibold tracking-tight text-foreground first:mt-0 last:mb-0">
                          {children}
                        </h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="my-6 border-l-4 border-primary/40 pl-5 italic text-muted-foreground bg-muted/30 py-3 rounded-r-lg first:mt-0 last:mb-0">
                          {children}
                        </blockquote>
                      ),
                    },
                    types: {
                      image: ({ value }) => (
                        <div className="my-8 rounded-2xl overflow-hidden">
                          <Image
                            alt={value.alt || ""}
                            src={urlFor(value).width(2000).url()}
                            className="w-full"
                            width={1400}
                            height={1000}
                          />
                        </div>
                      ),
                      separator: ({ value }) => {
                        switch (value.style) {
                          case "line":
                            return <hr className="my-8 border-t border-border" />;
                          case "space":
                            return <div className="my-8" />;
                          default:
                            return null;
                        }
                      },
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="my-5 list-disc pl-5 text-base/8 text-muted-foreground marker:text-primary/50 space-y-1">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="my-5 list-decimal pl-5 text-base/8 text-muted-foreground marker:text-primary/50 space-y-1">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => <li className="pl-1">{children}</li>,
                      number: ({ children }) => <li className="pl-1">{children}</li>,
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-semibold text-foreground">{children}</strong>
                      ),
                      code: ({ children }) => (
                        <code className="px-1.5 py-0.5 rounded-md bg-muted text-[13px] font-mono text-foreground border border-border">
                          {children}
                        </code>
                      ),
                      link: ({ value, children }) => (
                        <Link
                          href={value.href}
                          className="hoverEffect font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                        >
                          {children}
                        </Link>
                      ),
                    },
                  }}
                />
              </div>
            )}
          </article>

          {/* ── Sidebar ── */}
          <BlogSidebar slug={slug} />
        </div>
      </Container>
    </div>
  );
};

/* ── Sidebar component ── */
const BlogSidebar = async ({ slug }: { slug: string }) => {
  const blogs = await getOtherBlogs(slug, 5);

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">

      {/* Latest posts */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border bg-muted">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Latest Posts
          </span>
        </div>
        <div className="p-4 space-y-4">
          {blogs?.map((blog: Blog, index: number) => (
            <Link
              href={`/blog/${blog?.slug?.current}`}
              key={index}
              className="group flex items-start gap-3"
            >
              {blog?.mainImage && (
                <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-border group-hover:border-primary/30 hoverEffect">
                  <Image
                    src={urlFor(blog.mainImage).width(120).height(120).url()}
                    alt={blog.title ?? "Blog"}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover group-hover:scale-105 hoverEffect"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground line-clamp-2 group-hover:text-primary hoverEffect leading-snug">
                  {blog?.title}
                </p>
                {blog?.publishedAt && (
                  <p className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1">
                    <RiCalendar2Line size={11} />
                    {dayjs(blog.publishedAt).format("MMM D, YYYY")}
                  </p>
                )}
              </div>
              <RiArrowRightLine
                size={14}
                className="shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 hoverEffect mt-0.5"
              />
            </Link>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default SingleBlogPage;