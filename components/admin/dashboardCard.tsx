// components/dashboard-cards.tsx
import { ShoppingCart, Package, Users, DollarSign } from "lucide-react"
import { StatCard } from "./statCard"
import { getProductsCount } from "@/helper/product/action"
import { getOrdersCount, getTotalRevenue } from "@/helper/order/action"
import { getUsersCount } from "@/helper/user/action"

export async function DashboardCards() {
  const [totalProducts, totalOrders, totalUsers, totalRevenue] = await Promise.all([
    getProductsCount(),
    getOrdersCount(),
    getUsersCount(),
    getTotalRevenue(),
  ])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Orders"
        value={totalOrders.toString()}
        subtitle="All orders to date"
        subtitleVariant="positive"
        icon={<ShoppingCart className="text-sky-500" size={24} />}
        iconBg="bg-sky-100/50"
      />
      <StatCard
        title="Total Products"
        value={totalProducts.toString()}
        subtitle="Active products in catalog"
        icon={<Package className="text-purple-500" size={24} />}
        iconBg="bg-purple-100/50"
      />
      <StatCard
        title="Total Users"
        value={totalUsers.toString()}
        subtitle="Registered customers"
        icon={<Users className="text-yellow-500" size={24} />}
        iconBg="bg-yellow-100/50"
      />
      <StatCard
        title="Total Revenue"
        value={`₹${totalRevenue.toLocaleString("en-IN")}`}
        subtitle="Revenue from orders"
        icon={<DollarSign className="text-emerald-500" size={24} />}
        iconBg="bg-emerald-100/50"
      />
    </div>
  )
}