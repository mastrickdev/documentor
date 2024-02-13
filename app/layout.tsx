// Imports
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// Constants
const inter = Inter({ subsets: ["latin"] })

// Export Constants
export const metadata: Metadata = {

  title: "Documentor",
  description: "Documentor is software designed to automate the creation of documents more quickly and efficiently using predefined templates.",
}

// Export Functions
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}