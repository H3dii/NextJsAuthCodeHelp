import type { Metadata } from "next";
import "@/app/_ui/global.css";
import { Toaster } from "react-hot-toast";
import { roboto } from "@/app/_ui/fonts";
export const metadata: Metadata = {
    title: "MoonAPP",
    description: "Default Moon App",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`} id="root">
                <Toaster
                    position="bottom-left"
                    toastOptions={{
                        style: {
                            background: "#363636",
                            color: "#fff",
                        },
                    }}
                />
                {children}
            </body>
        </html>
    );
}
