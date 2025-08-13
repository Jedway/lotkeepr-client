import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarProvider } from "@/components/ui/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  pageTitle?: string
  onNavigate?: (path: string) => void
  currentView?: string
}

interface SidebarContextProps {
  isCollapsed: boolean
  setIsCollapsed: (value: boolean) => void
}

function DashboardContent({
  children,
  pageTitle,
}: {
  children: React.ReactNode
  pageTitle?: string
}) {
  return (
    <div className="flex flex-col">
      <SiteHeader title={pageTitle} />
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  )
}

export function DashboardLayout({
  children,
  pageTitle = "Home",
  onNavigate,
  currentView,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="grid h-screen w-full lg:grid-cols-[auto_1fr]">
        <AppSidebar 
          className="hidden lg:flex" 
          onNavigate={onNavigate} 
          currentPath={currentView}
        />
        <DashboardContent pageTitle={pageTitle}>
          {children}
        </DashboardContent>
      </div>
    </SidebarProvider>
  )
}
