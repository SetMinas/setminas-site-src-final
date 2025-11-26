import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "../posts";

type BlogPostPageProps = {
	params: {
		slug: string;
	};
};

export function generateStaticParams() {
	return BLOG_POSTS.map((post) => ({
		slug: post.slug,
	}));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	return (
		<main className="mx-auto max-w-3xl px-4 py-8">
			<div className="mb-6">
				<Link
					href="/blog"
					className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100"
				>
					← Voltar
				</Link>
			</div>
			<article className="space-y-6">
				<header className="space-y-2">
					<span className="text-xs text-gray-500">
						{new Date(post.date).toLocaleDateString("pt-BR")}
					</span>
					<h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
				</header>

				<div className="relative mt-4 h-64 w-full overflow-hidden rounded-lg">
					<Image
						src={post.coverImage}
						alt={post.title}
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
				</div>

				<section className="prose prose-sm max-w-none text-gray-800 prose-headings:mt-6 prose-p:mt-3">
					{/* Aqui o conteúdo está como string simples.
              Se quiser, pode integrar um parser de markdown. */}
					<p>{post.content}</p>
				</section>
			</article>
		</main>
	);
}
