import { ReactNode } from "react";
import Script from "next/script";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata = {
	title: "Setminas - Seu Lugar ao Seu Alcance",
	description:
		"Há mais de 9 anos desenvolvendo loteamentos de qualidade em Minas Gerais.",
};

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<head>
				<meta name="apple-mobile-web-app-title" content="SetMinas" />
			</head>
			<body className="flex flex-col min-h-screen">
				<AuthProvider>
					<Script
						id="gtag-google-ads"
						src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
						strategy="afterInteractive"
					/>
					<Script id="gtag-init" strategy="afterInteractive">
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GOOGLE_ADS_ID}');
						`}
					</Script>
					<Header />
					<div className="flex-grow">{children}</div>
					<Footer />
					<Analytics />
				</AuthProvider>
			</body>
		</html>
	);
}
