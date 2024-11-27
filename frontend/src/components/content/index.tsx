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
const componentsMap: Record<string, React.LazyExoticComponent<React.FC>> = {
  // Introduction
  "#purpose": lazy(() => import("@/components/content/general-standards/purpose/purpose")),
  "#how-to-use": lazy(() => import("@/components/content/general-standards/how-to-use/how-to-use")),

  // Code organization
  //
}

// ========================
// React
// ========================
import { 
  useState,
  useEffect,
  lazy,
} from "react"

// ========================
// Mantine
// ========================
// Core
import { 
  Container, 
  Loader,
  Center,
  Text,
  Stack,
  Transition,
} from "@mantine/core"

// ========================================
// CONTENT
// ========================================

export default function Content({ 
  activeLink,
}: { 
  activeLink: string,
}) {
  // ========================
  // Operations
  // ========================
  // Track the loading state
  const [isLoadingContent, setIsLoadingContent] = useState<boolean>(false)   

  // Track the current component
  const [currentComponent, setCurrentComponent] = useState<JSX.Element | null>(null)

  // On active link change, show loader and hide after 500ms
  useEffect(() => {
    // Reset current component
    setCurrentComponent(null)

    // Start loader
    setIsLoadingContent(true)

    // Load component and set timeout
    const timer = setTimeout(() => {
      const Component = componentsMap[activeLink] || componentsMap["#purpose"]
      setCurrentComponent(<Component />)

      // Stop loader
      setIsLoadingContent(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [activeLink])

  // ========================
  // Render
  // ========================
  return (
    <div id="content" className="relative">
      <Container fluid>
        {/* Show loader when content is loading */}
        {isLoadingContent && (
          <Center className="flex h-[calc(100vh-125px)] justify-center items-center">
            <Stack align="center" justify="center" gap="md">
              <Loader 
                size={48} 
                type="dots"
              />
              <Text>Loading content, please wait...</Text>
            </Stack>
          </Center>
        )}

        {/* Use Transition for content appearance */}
        <Transition
          mounted={!isLoadingContent && currentComponent !== null} // Show only when content is ready
          transition="fade"
          duration={500}
          timingFunction="ease"
        >
          {(styles) => (
            <div style={styles}>
              {currentComponent}
            </div>
          )}
        </Transition>
      </Container>
    </div>
  )
}
