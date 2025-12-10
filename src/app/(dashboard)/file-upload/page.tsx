"use client";

import { useState, ChangeEvent } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { database } from "@/lib/firebase";
import { ref, set } from "firebase/database";
import { LogoutButton } from "@/components/LogoutButton";

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

type Noticia = {
	slug: string;
	title: string;
	excerpt: string;
	content: string[];
	date: string;
	coverImage: string;
	urlOriginal?: any;
};

type LoteamentosMap = Record<string, Loteamento>;
type NoticiasMap = Record<string, Noticia>;

type RootJson = {
	loteamentos?: LoteamentosMap;
	noticias?: NoticiasMap;
};

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
			const json = JSON.parse(text) as RootJson;

			if (!json || typeof json !== "object") {
				setError("Formato inválido: o JSON deve ser um objeto.");
				return;
			}

			const loteamentos = json.loteamentos ?? {};
			const noticias = json.noticias ?? {};

			const totalLoteamentos = Object.keys(loteamentos).length;
			const totalNoticias = Object.keys(noticias).length;

			if (!totalLoteamentos && !totalNoticias) {
				setError('O JSON precisa ter pelo menos "loteamentos" ou "noticias".');
				return;
			}

			setIsUploading(true);
			await uploadToRealtimeDB(loteamentos, noticias);

			setStatus(
				`Importação concluída. Loteamentos: ${totalLoteamentos}, notícias: ${totalNoticias}.`
			);
		} catch (err: any) {
			console.error(err);
			setError(err?.message ?? "Erro ao processar o arquivo JSON");
		} finally {
			setIsUploading(false);
		}
	}

	async function uploadToRealtimeDB(
		loteamentos: LoteamentosMap,
		noticias: NoticiasMap
	) {
		const tasks: Promise<void>[] = [];

		for (const [key, value] of Object.entries(loteamentos)) {
			const slug = key;
			const loteRef = ref(database, `loteamentos/${slug}`);
			tasks.push(set(loteRef, value));
		}

		for (const [key, value] of Object.entries(noticias)) {
			const slug = key;
			const noticiaRef = ref(database, `noticias/${slug}`);
			tasks.push(set(noticiaRef, value));
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
			<h1 className="text-2xl font-bold">
				Importar loteamentos e notícias para o Realtime Database
			</h1>

			<p className="text-sm text-gray-600 text-center max-w-xl">
				O arquivo deve estar no formato:
				<br />
				<code>{`{ "loteamentos": { "slug": { ... } }, "noticias": { "slug": { ... } } }`}</code>
				<br />
				Os dados serão salvos em <code>/loteamentos/[slug]</code> e{" "}
				<code>/noticias/[slug]</code>.
			</p>

			<label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
				<span className="mb-2 text-sm font-medium">
					Clique aqui para escolher o arquivo JSON
				</span>
				<input
					type="file"
					accept="application/json"
					className="hidden"
					onChange={handleFileChange}
					disabled={isUploading}
				/>
			</label>

			{isUploading && <p>Enviando dados para o Realtime Database...</p>}
			{status && <p className="text-sm text-green-600">{status}</p>}
			{error && <p className="text-sm text-red-600">{error}</p>}
		</main>
	);
}
