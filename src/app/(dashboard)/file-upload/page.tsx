"use client";

import { useState, ChangeEvent } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { LogoutButton } from "@/components/LogoutButton";

type UrlOriginal = {
	origin: string;
	url: string;
};

type Noticia = {
	slug: string;
	title: string;
	excerpt: string;
	content: string[];
	date: string;
	coverImage: string;
	urlOriginal?: UrlOriginal;
};

type Loteamento = {
	nome: string;
	cidade: string;
	descricao: string;
	conceito: string;
	caracteristicas: string[];
	galeria: string[];
	mapSrc: string;
	status: string;
	tags?: string[];
	index?: number;
	office?: {
		contact: string;
		mapSrc: string;
	};
};

type NoticiasMap = Record<string, Noticia>;

type LoteamentosMap = Record<string, Loteamento>;

export default function ImportPage() {
	const { user } = useAuth();

	const [status, setStatus] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isUploading, setIsUploading] = useState(false);

	async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];

		if (!file) return;

		setStatus(null);
		setError(null);

		try {
			const text = await file.text();

			const noticias = JSON.parse(text) as NoticiasMap;

			if (!noticias || typeof noticias !== "object") {
				setError("Formato inválido: o JSON deve ser um objeto.");
				return;
			}

			const totalNoticias = Object.keys(noticias).length;

			if (!totalNoticias) {
				setError("O JSON está vazio.");
				return;
			}

			setIsUploading(true);

			await uploadNoticiasToFirestore(noticias);

			setStatus(
				`Importação concluída com sucesso. Notícias importadas: ${totalNoticias}.`,
			);
		} catch (err: any) {
			console.error(err);

			setError(err?.message ?? "Erro ao processar o arquivo JSON.");
		} finally {
			setIsUploading(false);
		}
	}

	async function handleLoteamentosFileChange(e: ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];

		if (!file) return;

		setStatus(null);
		setError(null);

		try {
			const text = await file.text();

			const loteamentos = JSON.parse(text) as LoteamentosMap;

			if (!loteamentos || typeof loteamentos !== "object") {
				setError("Formato inválido: o JSON deve ser um objeto.");
				return;
			}

			const totalLoteamentos = Object.keys(loteamentos).length;

			if (!totalLoteamentos) {
				setError("O JSON está vazio.");
				return;
			}

			setIsUploading(true);

			await uploadLoteamentosToFirestore(loteamentos);

			setStatus(
				`Importação concluída com sucesso. Loteamentos importados: ${totalLoteamentos}.`,
			);
		} catch (err: any) {
			console.error(err);

			setError(err?.message ?? "Erro ao processar o arquivo JSON.");
		} finally {
			setIsUploading(false);
		}
	}

	async function uploadNoticiasToFirestore(noticias: NoticiasMap) {
		const tasks: Promise<void>[] = [];

		for (const [slug, noticia] of Object.entries(noticias)) {
			const noticiaRef = doc(db, "noticias", slug);

			tasks.push(
				setDoc(noticiaRef, {
					...noticia,
					slug,
				}),
			);
		}

		await Promise.all(tasks);
	}

	async function uploadLoteamentosToFirestore(loteamentos: LoteamentosMap) {
		const tasks: Promise<void>[] = [];

		for (const [slug, loteamento] of Object.entries(loteamentos)) {
			const loteamentoRef = doc(db, "loteamentos", slug);

			tasks.push(
				setDoc(loteamentoRef, {
					...loteamento,
					slug,
				}),
			);
		}

		await Promise.all(tasks);
	}

	if (!user) {
		return (
			<main className="min-h-screen flex items-center justify-center">
				<p>Você precisa estar autenticado para importar dados.</p>
			</main>
		);
	}

	return (
		<main className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
			<header className="flex items-center justify-between gap-4">
				<h1 className="text-2xl font-bold">Upload de Arquivos</h1>

				<LogoutButton />
			</header>

			<h2 className="text-xl font-semibold text-center">
				Importar para o Firestore
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
				<label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition min-h-52">
					<h3 className="font-bold text-lg mb-2">Upload de Notícias</h3>

					<p className="text-sm text-gray-600 text-center mb-4">
						JSON no formato:
						<br />
						<code>{`{ "slug-da-noticia": { ... } }`}</code>
					</p>

					<span className="mb-2 text-sm font-medium text-center">
						Clique para selecionar o JSON de notícias
					</span>

					<input
						type="file"
						accept="application/json"
						className="hidden"
						onChange={handleFileChange}
						disabled={isUploading}
					/>
				</label>

				<label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-green-500 transition min-h-52">
					<h3 className="font-bold text-lg mb-2">Upload de Loteamentos</h3>

					<p className="text-sm text-gray-600 text-center mb-4">
						JSON no formato:
						<br />
						<code>{`{ "slug-do-loteamento": { ... } }`}</code>
					</p>

					<span className="mb-2 text-sm font-medium text-center">
						Clique para selecionar o JSON de loteamentos
					</span>

					<input
						type="file"
						accept="application/json"
						className="hidden"
						onChange={handleLoteamentosFileChange}
						disabled={isUploading}
					/>
				</label>
			</div>

			{isUploading && <p>Enviando notícias para o Firestore...</p>}

			{status && <p className="text-sm text-green-600">{status}</p>}

			{error && <p className="text-sm text-red-600">{error}</p>}
		</main>
	);
}
