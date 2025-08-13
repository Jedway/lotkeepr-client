import { DashboardLayout } from "@/components/layouts/DashboardLayout"

export default function TenantDash() {
  return (
    <DashboardLayout pageTitle="Tenant Dashboard">
      {/* Tenant-specific dashboard content */}
      <div className="grid gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Welcome, Tenant</h2>
        {/* Add tenant-specific components and content here */}
      </div>
    </DashboardLayout>
  )
}
