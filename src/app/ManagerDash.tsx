import { DashboardLayout } from "@/components/layouts/DashboardLayout"

export default function ManagerDash() {
  return (
    <DashboardLayout pageTitle="Manager Dashboard">
      {/* Manager-specific dashboard content */}
      <div className="grid gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Welcome, Manager</h2>
        {/* Add manager-specific components and content here */}
      </div>
    </DashboardLayout>
  )
}
