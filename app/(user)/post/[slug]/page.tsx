import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import category from "@/sanity/schemas/category";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/app/components/RichTextComponents";


type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 30; //revalidate every 30 seconds

export async function generateStaticParams() {
    const query = groq`*[_types=='post']
    {
        slug
    }`;


    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug,
    }))
}

async function Post({ params: { slug } }: Props) {
    const query = groq`
        *[_type=="post" && slug.current == $slug] [0]
        {
            ...,
            author->,
            categories[]->
        }
    `

    const post: Post = await client.fetch(query, { slug })
    return (
        <article className="px-10 pb-28">
            <section className="space-y-2 border-[#87CEEB] text-slate-900">
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image
                            className="obect-cover object-center mx-auto"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        />
                    </div>


                    <section className="p-5 bg-[#87CEEB] w-full">
                        <div className="flex flex-col justify-between gap-y-3">
                            <div>
                                <h1 className="text-4xl font-extrabold mb-2">
                                    {post.title}
                                </h1>
                                <p>
                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"

                                    })}
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Image
                                    className="rounded-full aspect-square"
                                    height={40}
                                    width={40}
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}

                                />

                                <div className="w-28">
                                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                                    <div>
                                        {/*  author bio */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="italic pt-10">{post.description}</h2>
                                <div className="flex items-center justify-end mt-auto space-x-2">
                                    {post.categories.map((category) => (
                                        <p key={category._id} className="bg-[#FF7F50] text-[#F5DEB3] px-3 py-1 rounded-full text-sm font-semibold mt-4">
                                            {category.title}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <PortableText value={post.body} components={RichTextComponents} />
        </article>
    )
}

export default Post