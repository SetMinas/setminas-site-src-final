import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "../../../data/posts";

export default function BlogSection() {
	const homeBlog = BLOG_POSTS.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(
		0,
		3
	);

	return (
		<section className="py-4 md:py-8 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="section-title">
					Notícias mais recentes do mercado imobiliário mineiro
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{homeBlog.map((post) => (
						<div
							key={post.slug}
							className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105"
						>
							<div className="relative h-40 sm:h-48 bg-blue-100">
								<Image
									src={post.coverImage}
									alt={post.title}
									fill
									className="absolute object-cover inset-0"
								/>
							</div>
							<div className="p-4 sm:p-6 text-center">
								<h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
									{post.title}
								</h3>
								<p className="text-gray-600 mb-3 sm:mb-4">
									{new Date(post.date).toLocaleDateString("pt-BR")}
								</p>
								<p className="text-gray-700 mb-4 text-sm sm:text-base text-center">
									{post.excerpt}
								</p>
								<Link
									href={`/blog/${post.slug}`}
									className="block w-full bg-[#0F3B7D] text-white text-center py-2 rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
								>
									Ler mais →
								</Link>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-8 md:mt-12">
					<Link
						href="/blog"
						className="inline-block bg-white border-2 border-[#0F3B7D] text-[#0F3B7D] px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
					>
						Ver Todas as Notícias
					</Link>
				</div>
			</div>
		</section>
	);
}
