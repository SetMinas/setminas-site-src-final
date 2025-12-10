"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export function LogoutButton() {
	const { logout } = useAuth();
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	async function handleLogout() {
		try {
			setLoading(true);
			await logout();
			router.replace("/login"); // manda pra tela de login depois de sair
		} catch (err) {
			console.error("Erro ao fazer logout", err);
		} finally {
			setLoading(false);
		}
	}

	return (
		<button
			onClick={handleLogout}
			disabled={loading}
			className="px-4 py-2 rounded bg-red-500 text-white text-sm font-medium disabled:opacity-60"
		>
			{loading ? "Saindo..." : "Sair"}
		</button>
	);
}
