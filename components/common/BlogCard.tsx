import { Blog } from "@/sanity.types"
import { urlFor } from "@/sanity/lib/image"
import { RiArrowRightLine, RiCalendar2Line } from "@remixicon/react"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"

const BlogCard = ({blog}: {blog: Blog}) => {
    return (
        <Link
            key={blog._id}
            href={`/blog/${blog?.slug?.current}`}
            className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card hoverEffect hover:border-ring"
        >
            {blog?.mainImage && (
                <div className="overflow-hidden aspect-video">
                    <Image
                        src={urlFor(blog.mainImage).width(600).url()}
                        alt={blog.title ?? "Blog image"}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 hoverEffect"
                    />
                </div>
            )}
            <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                    {blog?.blogcategories?.map((item, i) => (
                        <span
                            key={i}
                            className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-primary/10 text-primary border border-primary/20 leading-loose"
                        >
                            {item?.title}
                        </span>
                    ))}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                        <RiCalendar2Line size={12} />
                        {dayjs(blog.publishedAt).format("MMM D, YYYY")}
                    </span>
                </div>
                <h3 className="text-sm font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary hoverEffect flex-1">
                    {blog.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-auto">
                    Read more <RiArrowRightLine size={13} className="group-hover:translate-x-0.5 hoverEffect" />
                </span>
            </div>
        </Link>
    )
}

export default BlogCard