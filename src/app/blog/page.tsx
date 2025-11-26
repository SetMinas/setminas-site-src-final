"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "./posts";

export default function BlogPage() {
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [showFilters, setShowFilters] = useState<boolean>(false);

	const filteredPosts = useMemo(() => {
		return BLOG_POSTS.filter((post) => {
			const postDate = new Date(post.date);

			if (startDate) {
				const start = new Date(startDate);
				if (postDate < start) return false;
			}

			if (endDate) {
				const end = new Date(endDate);
				end.setHours(23, 59, 59, 999);
				if (postDate > end) return false;
			}

			return true;
		}).sort((a, b) => (a.date < b.date ? 1 : -1));
	}, [startDate, endDate]);

	return (
		<main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8">
			<header className="flex items-center justify-between border-b pb-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">BLOG SETMINAS</h1>
					<p className="mt-1 text-sm text-gray-500">
						As principais notícias do mercado imobiliário de Minas Gerais
					</p>
				</div>

				<button
					type="button"
					onClick={() => setShowFilters((prev) => !prev)}
					className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100"
				>
					<span>Filtros</span>
					<span className="text-xs text-gray-500">
						{showFilters ? "▲" : "▼"}
					</span>
				</button>
			</header>

			<div
				className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
					showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				{showFilters && (
					<section
						aria-label="Filtros"
						className="mt-2 flex flex-wrap gap-4 rounded-lg border bg-white p-4 shadow-sm"
					>
						<div className="flex flex-col gap-1">
							<label
								htmlFor="startDate"
								className="text-sm font-medium text-gray-700"
							>
								Data inicial
							</label>
							<input
								id="startDate"
								type="date"
								value={startDate}
								onChange={(e) => setStartDate(e.target.value)}
								className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label
								htmlFor="endDate"
								className="text-sm font-medium text-gray-700"
							>
								Data final
							</label>
							<input
								id="endDate"
								type="date"
								value={endDate}
								onChange={(e) => setEndDate(e.target.value)}
								className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							/>
						</div>

						<div className="ml-auto flex items-end gap-2">
							<button
								type="button"
								onClick={() => {
									setStartDate("");
									setEndDate("");
								}}
								className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800"
							>
								Limpar filtros
							</button>
						</div>
					</section>
				)}
			</div>

			<section aria-label="Lista de posts">
				{filteredPosts.length === 0 && (
					<p className="text-sm text-gray-500">
						Nenhum post encontrado para o intervalo selecionado.
					</p>
				)}

				<ul className="grid gap-6 md:grid-cols-2">
					{filteredPosts.map((post) => (
						<li key={post.slug}>
							<Link
								href={`/blog/${post.slug}`}
								className="flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
							>
								<div className="relative h-48 w-full">
									<Image
										src={post.coverImage}
										alt={post.title}
										fill
										className="object-cover"
										sizes="(min-width: 768px) 50vw, 100vw"
										priority
									/>
								</div>

								<div className="flex flex-1 flex-col p-4">
									<span className="text-xs text-gray-500">
										{new Date(post.date).toLocaleDateString("pt-BR")}
									</span>
									<h2 className="mt-1 text-lg font-semibold leading-snug">
										{post.title}
									</h2>
									<p className="mt-2 line-clamp-2 text-sm text-gray-700">
										{post.excerpt}
									</p>

									<span className="mt-3 inline-flex text-sm font-medium text-indigo-600">
										Ler mais →
									</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
