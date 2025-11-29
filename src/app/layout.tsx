import { ReactNode } from "react";
import Script from "next/script";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
	title: "Setminas - Seu Lugar ao Seu Alcance",
	description:
		"Há mais de 9 anos desenvolvendo loteamentos de qualidade em Minas Gerais.",
	icons: {
		icon: "/images/logos/favicon_setminas.png",
		shortcut: "/images/logos/favicon_setminas.png",
		apple: "/apple-touch-icon.png",
	},
};

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className="flex flex-col min-h-screen">
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
			</body>
		</html>
	);
}
