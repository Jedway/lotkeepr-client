import React, { useState } from "react"
import { DashboardLayout } from "@/components/layouts/DashboardLayout"
import type { Row } from "@tanstack/react-table"
import * as RechartsPrimitive from "recharts"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Calendar28 } from "@/components/ui/date-picker"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { IconFileExport } from "@tabler/icons-react"
import { 
  IconBuilding, 
  IconFileDescription, 
  IconHomeCheck,
  IconTrendingUp,
  IconClock,
  IconReceipt2,
  IconPlus,
  IconFileAnalytics,
  IconHome,
  IconBuildingStore,
  IconChartPie,
  IconCash,
  IconTool,
  IconUsers,
  IconCalendar,
  IconGripVertical,
} from "@tabler/icons-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// Placeholder components for each section
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const StatItem = ({
  title,
  value,
  description,
  icon: Icon
}: {
  title: string
  value: string | number
  description?: string
  icon: React.ElementType
}) => (
  <div className="rounded-lg border bg-card p-4">
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-medium">{title}</h4>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </div>
    <div className="mt-3">
      <div className="text-2xl font-bold">{value}</div>
      {description && (
        <p className="text-xs text-muted-foreground mt-1">
          {description}
        </p>
      )}
    </div>
  </div>
)

const DashboardView = () => (
  <div className="grid gap-6">
    <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>
    
    <div className="mx-auto w-full space-y-6 lg:max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Frequently used actions for managing your properties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg"
              className="flex w-full items-center justify-center sm:w-auto"
              onClick={() => setCurrentView('properties')}
            >
              <IconPlus className="mr-1 h-4 w-4" />
              Add Property
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="flex w-full items-center justify-center sm:w-auto"
              onClick={() => setCurrentView('account')}
            >
              <IconFileAnalytics className="mr-1 h-4 w-4" />
              View Statements
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Property Overview</CardTitle>
          <CardDescription>
            Quick overview of your property portfolio and activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="quick-stats">
            <AccordionItem value="quick-stats" className="border-none">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">Quick Stats</h3>
                  <span className="text-xs text-muted-foreground">
                    (Last updated: Today)
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4">
                  <StatItem
                    title="Total Properties"
                    value={12}
                    description="8 residential, 4 commercial"
                    icon={IconBuilding}
                  />
                  <StatItem
                    title="Active Leases"
                    value={18}
                    description="92% occupancy rate"
                    icon={IconHomeCheck}
                  />
                  <StatItem
                    title="Pending Proposals"
                    value={5}
                    description="2 new this week"
                    icon={IconFileDescription}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Balance</CardTitle>
          <CardDescription>
            Current financial overview of your properties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="balance">
            <AccordionItem value="balance" className="border-none">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">Financial Summary</h3>
                  <span className="text-xs text-muted-foreground">
                    (Last updated: Today)
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4">
                  <StatItem
                    title="Total Revenue"
                    value="₦4.2M"
                    description="Up 8% from last month"
                    icon={IconTrendingUp}
                  />
                  <StatItem
                    title="Pending Payments"
                    value="₦850K"
                    description="3 payments due this week"
                    icon={IconClock}
                  />
                  <StatItem
                    title="Property Expenses"
                    value="₦320K"
                    description="Maintenance and utilities"
                    icon={IconReceipt2}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  </div>
)

const PropertyOverview = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Property Statistics</CardTitle>
        <CardDescription>
          Overview of your property portfolio performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatItem
            title="Residential Properties"
            value={8}
            description="6 occupied, 2 vacant"
            icon={IconHome}
          />
          <StatItem
            title="Commercial Properties"
            value={4}
            description="4 occupied, 0 vacant"
            icon={IconBuildingStore}
          />
          <StatItem
            title="Average Occupancy"
            value="92%"
            description="Last 12 months"
            icon={IconChartPie}
          />
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Property Performance</CardTitle>
        <CardDescription>
          Financial metrics and maintenance status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatItem
            title="Average Monthly Revenue"
            value="₦350K"
            description="Per property"
            icon={IconCash}
          />
          <StatItem
            title="Maintenance Requests"
            value={7}
            description="3 urgent, 4 routine"
            icon={IconTool}
          />
          <StatItem
            title="Property Appreciation"
            value="15%"
            description="Year over year"
            icon={IconTrendingUp}
          />
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Tenant Overview</CardTitle>
        <CardDescription>
          Current tenant status and lease information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatItem
            title="Total Tenants"
            value={22}
            description="18 long-term, 4 short-term"
            icon={IconUsers}
          />
          <StatItem
            title="Upcoming Renewals"
            value={3}
            description="Next 30 days"
            icon={IconCalendar}
          />
          <StatItem
            title="Average Lease Length"
            value="2.5"
            description="Years per tenant"
            icon={IconClock}
          />
        </div>
      </CardContent>
    </Card>
  </div>
)



type Property = {
  id: string
  name: string
  type: string
  address: string
  status: string
  monthlyRent: number
  occupancy: string
}

// Sample data
const data: Property[] = [
  {
    id: "1",
    name: "Sunset Heights Apartment",
    type: "Residential",
    address: "123 Sunset Blvd",
    status: "Occupied",
    monthlyRent: 150000,
    occupancy: "100%",
  },
  {
    id: "2",
    name: "Downtown Office Space",
    type: "Commercial",
    address: "456 Business Ave",
    status: "Vacant",
    monthlyRent: 350000,
    occupancy: "0%",
  },
  // Add more sample properties here
]

const SortableRow = ({ row }: { row: Row<Property> }) => {
  const {
    attributes,
    listeners,
    transform,
    transition,
    setNodeRef,
  } = useSortable({ id: row.original.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <TableRow ref={setNodeRef} style={style}>
      <TableCell>
        <Button
          variant="ghost"
          {...attributes}
          {...listeners}
          className="cursor-grab"
        >
          <IconGripVertical className="h-4 w-4" />
        </Button>
      </TableCell>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}

const PropertyList = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowOrder, setRowOrder] = useState(data.map((d) => d.id))

  const columns: ColumnDef<Property>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <div className={cn(
            "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
            status === "Occupied" 
              ? "bg-green-50 text-green-700 ring-green-600/20"
              : "bg-red-50 text-red-700 ring-red-600/20"
          )}>
            {status}
          </div>
        )
      },
    },
    {
      accessorKey: "monthlyRent",
      header: "Monthly Rent",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("monthlyRent"))
        const formatted = new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(amount)
        return <div className="font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "occupancy",
      header: "Occupancy",
    },
  ]

  const table = useReactTable({
    data: data.slice().sort((a, b) => {
      const aIndex = rowOrder.indexOf(a.id)
      const bIndex = rowOrder.indexOf(b.id)
      return aIndex - bIndex
    }),
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = rowOrder.indexOf(active.id as string)
      const newIndex = rowOrder.indexOf(over.id as string)
      const newOrder = [...rowOrder]
      newOrder.splice(oldIndex, 1)
      newOrder.splice(newIndex, 0, active.id as string)
      setRowOrder(newOrder)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Filter properties..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                <TableHead>Sort</TableHead>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={rowOrder}
                strategy={verticalListSortingStrategy}
              >
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <SortableRow key={row.id} row={row} />
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length + 1}
                      className="h-24 text-center"
                    >
                      No properties found.
                    </TableCell>
                  </TableRow>
                )}
              </SortableContext>
            </DndContext>
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} property(ies) total.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

const PropertiesView = () => {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">My Properties</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <IconPlus className="h-4 w-4" />
              Add New Property
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Add New Property</DialogTitle>
              <DialogDescription>
                Enter the details of your new property. All fields marked with * are required.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Property Name *</label>
                  <Input placeholder="Enter property name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Property Type *</label>
                  <Input placeholder="Residential, Commercial, etc." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Address *</label>
                <Input placeholder="Enter full property address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Monthly Rent *</label>
                  <Input placeholder="₦0.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Property Status *</label>
                  <Input placeholder="Available, Occupied, etc." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea placeholder="Additional property details..." />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">
                Add Property
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="max-w-4xl mx-auto w-full">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="list">Property List</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <PropertyOverview />
          </TabsContent>
          
          <TabsContent value="list">
            <PropertyList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Rent Roll Types and Data
type RentRollEntry = {
  id: string
  tenantName: string
  leaseStart: string
  leaseEnd: string
  amountDue: number
  status: "Paid" | "Pending" | "Overdue"
}

const rentRollData: RentRollEntry[] = [
  {
    id: "1",
    tenantName: "John Smith",
    leaseStart: "2025-01-01",
    leaseEnd: "2025-12-31",
    amountDue: 150000,
    status: "Paid",
  },
  {
    id: "2",
    tenantName: "Sarah Johnson",
    leaseStart: "2025-03-01",
    leaseEnd: "2026-02-28",
    amountDue: 200000,
    status: "Pending",
  },
  {
    id: "3",
    tenantName: "Michael Brown",
    leaseStart: "2025-06-01",
    leaseEnd: "2026-05-31",
    amountDue: 175000,
    status: "Overdue",
  },
]

const RentRollView = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  const columns: ColumnDef<RentRollEntry>[] = [
    {
      accessorKey: "tenantName",
      header: "Tenant Name",
      cell: ({ row }) => <div className="font-medium">{row.getValue("tenantName")}</div>,
    },
    {
      accessorKey: "leaseStart",
      header: "Lease Start",
      cell: ({ row }) => {
        const date = new Date(row.getValue("leaseStart"))
        return date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      },
    },
    {
      accessorKey: "leaseEnd",
      header: "Lease End",
      cell: ({ row }) => {
        const date = new Date(row.getValue("leaseEnd"))
        return date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      },
    },
    {
      accessorKey: "amountDue",
      header: "Amount Due",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amountDue"))
        const formatted = new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(amount)
        return <div className="font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <div className={cn(
            "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
            status === "Paid" 
              ? "bg-green-50 text-green-700 ring-green-600/20"
              : status === "Pending"
              ? "bg-yellow-50 text-yellow-700 ring-yellow-600/20"
              : "bg-red-50 text-red-700 ring-red-600/20"
          )}>
            {status}
          </div>
        )
      },
    },
  ]

  const table = useReactTable({
    data: rentRollData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  const handleExportCSV = () => {
    const headers = columns.map(col => col.header as string).join(",")
    const rows = rentRollData.map(entry => 
      Object.values(entry).join(",")
    ).join("\\n")
    
    const csvContent = `data:text/csv;charset=utf-8,${headers}\\n${rows}`
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `rent_roll_${date?.toISOString().split("T")[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Rent Roll</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <IconPlus className="h-4 w-4 mr-2" />
              Add Tenant
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Add New Tenant</DialogTitle>
              <DialogDescription>
                Enter the tenant's details and lease information.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tenant Name *</label>
                <Input placeholder="Enter tenant name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Lease Start *</label>
                  <Calendar28 />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Lease End *</label>
                  <Calendar28 />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Monthly Rent *</label>
                <Input placeholder="₦0.00" />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button type="submit" className="w-full sm:w-auto">
                Add Tenant
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle>Rent Roll Summary</CardTitle>
              <CardDescription>
                View and manage tenant payments and lease information.
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[200px]">
                <Calendar28 />
              </div>
              <Button variant="outline" onClick={handleExportCSV}>
                <IconFileExport className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Input
                placeholder="Filter tenants..."
                value={(table.getColumn("tenantName")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                  table.getColumn("tenantName")?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columns
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      )
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No tenants found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredRowModel().rows.length} tenant(s) total.
              </div>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Sample data for reports
const occupancyData = [
  { month: 'Jan', occupancy: 85 },
  { month: 'Feb', occupancy: 88 },
  { month: 'Mar', occupancy: 90 },
  { month: 'Apr', occupancy: 92 },
  { month: 'May', occupancy: 91 },
  { month: 'Jun', occupancy: 95 },
  { month: 'Jul', occupancy: 94 },
  { month: 'Aug', occupancy: 92 },
]

const revenueData = [
  { month: 'Jan', revenue: 1200000, expenses: 400000 },
  { month: 'Feb', revenue: 1250000, expenses: 420000 },
  { month: 'Mar', revenue: 1300000, expenses: 450000 },
  { month: 'Apr', revenue: 1400000, expenses: 440000 },
  { month: 'May', revenue: 1450000, expenses: 460000 },
  { month: 'Jun', revenue: 1500000, expenses: 470000 },
  { month: 'Jul', revenue: 1550000, expenses: 480000 },
  { month: 'Aug', revenue: 1600000, expenses: 490000 },
]

const ReportsView = () => {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: new Date(2025, 0, 1), // January 1, 2025
    to: new Date() // Current date
  })

  const handleDownloadPDF = () => {
    // TODO: Implement PDF generation and download
    console.log("Downloading PDF report...")
  }

  const chartConfig = {
    occupancy: {
      label: "Occupancy Rate",
      theme: {
        light: "#0ea5e9",
        dark: "#38bdf8",
      },
    },
    revenue: {
      label: "Revenue",
      theme: {
        light: "#22c55e",
        dark: "#4ade80",
      },
    },
    expenses: {
      label: "Expenses",
      theme: {
        light: "#ef4444",
        dark: "#f87171",
      },
    },
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Reports</h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Calendar28
            initialFocus
            mode="range"
            defaultMonth={dateRange.from}
            selected={{ from: dateRange.from, to: dateRange.to }}
            onSelect={(range) => setDateRange(range || { from: undefined, to: undefined })}
            numberOfMonths={1}
            className="w-full sm:w-auto"
          />
          <Button onClick={handleDownloadPDF} className="w-full sm:w-auto">
            <IconFileExport className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Occupancy Rate Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Occupancy Rate Trends</CardTitle>
            <CardDescription>Monthly occupancy rates across all properties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] sm:h-[300px]">
              <ChartContainer className="h-full" config={chartConfig}>
                <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
                  <RechartsPrimitive.AreaChart
                    data={occupancyData}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
                    <RechartsPrimitive.XAxis 
                      dataKey="month"
                      tick={{ fontSize: 12 }}
                    />
                    <RechartsPrimitive.YAxis 
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 100]}
                      tick={{ fontSize: 12 }}
                    />
                    <RechartsPrimitive.Tooltip content={(props) => (
                      <ChartTooltipContent
                        {...props}
                        formatter={(value) => `${value}%`}
                      />
                    )} />
                    <RechartsPrimitive.Area
                      type="monotone"
                      dataKey="occupancy"
                      name="occupancy"
                      stroke="var(--color-occupancy)"
                      fill="var(--color-occupancy)"
                      fillOpacity={0.2}
                    />
                  </RechartsPrimitive.AreaChart>
                </RechartsPrimitive.ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Revenue vs Expenses Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Expenses</CardTitle>
            <CardDescription>Monthly financial performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] sm:h-[300px]">
              <ChartContainer className="h-full" config={chartConfig}>
                <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
                  <RechartsPrimitive.BarChart
                    data={revenueData}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
                    <RechartsPrimitive.XAxis 
                      dataKey="month"
                      tick={{ fontSize: 12 }}
                    />
                    <RechartsPrimitive.YAxis 
                      tickFormatter={(value) => `₦${(value / 1000000).toFixed(1)}M`}
                      tick={{ fontSize: 12 }}
                    />
                    <RechartsPrimitive.Tooltip content={(props) => (
                      <ChartTooltipContent
                        {...props}
                        formatter={(value) => 
                          new Intl.NumberFormat("en-NG", {
                            style: "currency",
                            currency: "NGN"
                          }).format(value as number)
                        }
                      />
                    )} />
                    <RechartsPrimitive.Bar
                      dataKey="revenue"
                      name="revenue"
                      fill="var(--color-revenue)"
                    />
                    <RechartsPrimitive.Bar
                      dataKey="expenses"
                      name="expenses"
                      fill="var(--color-expenses)"
                    />
                    <ChartLegend />
                  </RechartsPrimitive.BarChart>
                </RechartsPrimitive.ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const AnalyticsView = () => (
  <div className="grid gap-4">
    <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
    {/* Add analytics dashboard and charts */}
  </div>
)

const AccountView = () => (
  <div className="grid gap-4">
    <h2 className="text-2xl font-bold tracking-tight">Account Statement</h2>
    {/* Add financial statements and transactions */}
  </div>
)

const ProposalsView = () => (
  <div className="grid gap-4">
    <h2 className="text-2xl font-bold tracking-tight">Proposals</h2>
    {/* Add proposals management interface */}
  </div>
)

const TeamView = () => (
  <div className="grid gap-4">
    <h2 className="text-2xl font-bold tracking-tight">Team Management</h2>
    {/* Add team management interface */}
  </div>
)

export default function OwnerDash() {
  const [currentView, setCurrentView] = useState("dashboard")
  
  const getViewComponent = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardView />
      case "properties":
        return <PropertiesView />
      case "rent-roll":
        return <RentRollView />
      case "reports":
        return <ReportsView />
      case "analytics":
        return <AnalyticsView />
      case "account":
        return <AccountView />
      case "proposals":
        return <ProposalsView />
      case "team":
        return <TeamView />
      default:
        return <DashboardView />
    }
  }

  return (
    <DashboardLayout 
      pageTitle="Owner Dashboard"
      currentView={currentView}
      onNavigate={(path) => setCurrentView(path.split("/").pop() || "dashboard")}
    >
      {getViewComponent()}
    </DashboardLayout>
  )
}
