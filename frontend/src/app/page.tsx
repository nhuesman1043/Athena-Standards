// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// ========================
// Components
// ========================
import Header from "@/components/header/"
import Navbar from "@/components/navbar/"
import Content from "@/components/content/"

// ========================
// React
// ========================
import { useState } from "react"

// ========================
// Mantine
// ========================
// Core
import { 
  AppShell, 
  Burger, 
  Group,
  ScrollArea,
} from "@mantine/core"

// Hooks
import { useDisclosure } from "@mantine/hooks"

// ========================================
// HOME
// ========================================

export default function Home() {
  // ========================
  // Operations
  // ========================
  // Navabr toggle
  const [opened, { toggle }] = useDisclosure()

  // Track the active link by href
  const [activeLink, setActiveLink] = useState<string>("#purpose")

  // ========================
  // Render
  // ========================
  return (
    <main>
      <AppShell
        header={{ height: 75 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        {/* Header */}
        <AppShell.Header>
          <Group 
            h="100%" 
            px="md" 
            w="100%"
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation menu"
            />
            <div className="flex-grow">
              <Header />
            </div>
          </Group>
        </AppShell.Header>

        {/* Navbar */}
        <AppShell.Navbar>
          <AppShell.Section grow component={ScrollArea}>
            <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
          </AppShell.Section>
        </AppShell.Navbar> 

        {/* Main */}
        <AppShell.Main>
          <Content activeLink={activeLink} />
        </AppShell.Main>
      </AppShell>
    </main>
  )
}
