"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
	const { login, register } = useAuth();
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mode, setMode] = useState<"login" | "register">("login");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setError(null);
		setLoading(true);

		try {
			if (mode === "login") {
				await login(email, password);
			} else {
				await register(email, password);
			}
			router.replace("/file-upload");
		} catch (err: any) {
			setError(err.message ?? "Erro ao autenticar");
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-full max-w-sm bg-white p-6 rounded shadow">
				<h1 className="text-xl font-bold mb-4">
					{mode === "login" ? "Entrar" : "Criar conta"}
				</h1>

				{error && <p className="mb-2 text-sm text-red-600">{error}</p>}

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm mb-1">E-mail</label>
						<input
							type="email"
							className="w-full border rounded px-3 py-2 text-sm"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div>
						<label className="block text-sm mb-1">Senha</label>
						<input
							type="password"
							className="w-full border rounded px-3 py-2 text-sm"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="w-full py-2 rounded bg-blue-600 text-white font-medium disabled:opacity-60"
					>
						{loading
							? "Carregando..."
							: mode === "login"
							? "Entrar"
							: "Cadastrar"}
					</button>
				</form>

				<button
					className="mt-4 text-sm text-blue-600 hover:underline"
					type="button"
					onClick={() =>
						setMode((prev) => (prev === "login" ? "register" : "login"))
					}
				>
					{mode === "login"
						? "Não tem conta? Cadastre-se"
						: "Já tem conta? Faça login"}
				</button>
			</div>
		</main>
	);
}
