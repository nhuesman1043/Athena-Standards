// ========================================
// IMPORTS
// ========================================

// ========================
// Global Styles
// ========================
import "./globals.css"

// ========================
// Mantine
// ========================
// Core
import { 
  ColorSchemeScript, 
  MantineProvider,
} from "@mantine/core"

// Styles
import "@mantine/core/styles.css"

// ========================================
// METADATA
// ========================================

export const metadata = {
  title: "Athena - Standards",
  description: "Code standards",
}

// ========================================
// ROOT
// ========================================

export default function RootLayout({
  // ========================
  // Render
  // ========================
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}