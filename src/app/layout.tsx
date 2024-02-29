import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"),

    title: "Daniel's Portfolio",
    authors: {
        name: "Aztarok"
    },

    description:
        "Based in America, I'm a Fullstack developer passionate about building modern web applications that users will love.",
    openGraph: {
        title: "Portfolio",
        description:
            "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
        url: "http://localhost:3000",
        siteName: "Daniel's Portfolio",
        images: "/og.png",
        type: "website"
    },
    keywords: ["portfolio", "Daniel"]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={spaceGrotesk.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
