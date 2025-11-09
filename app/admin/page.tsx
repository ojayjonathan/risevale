"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { BarChart3, Users, BookOpen, Hotel, Calendar, TrendingUp, LogOut } from "lucide-react"

const DASHBOARD_STATS = [
  { label: "Total Tours", value: 24, icon: BarChart3, color: "text-accent" },
  { label: "Total Hotels", value: 18, icon: Hotel, color: "text-accent" },
  { label: "Active Bookings", value: 42, icon: Calendar, color: "text-accent" },
  { label: "Blog Posts", value: 28, icon: BookOpen, color: "text-accent" },
  { label: "Registered Users", value: 156, icon: Users, color: "text-accent" },
  { label: "Revenue", value: "$24,580", icon: TrendingUp, color: "text-accent" },
]

const RECENT_BOOKINGS = [
  { id: 1, guest: "John Smith", tour: "Kenya Safari Adventure", date: "Dec 20, 2024", status: "Confirmed" },
  { id: 2, guest: "Sarah Johnson", tour: "Cape Town Escape", date: "Dec 19, 2024", status: "Pending" },
  { id: 3, guest: "Michael Chen", tour: "Zanzibar Paradise", date: "Dec 18, 2024", status: "Confirmed" },
  { id: 4, guest: "Emma Wilson", tour: "Egyptian Wonders", date: "Dec 17, 2024", status: "Completed" },
  { id: 5, guest: "James Brown", tour: "Kenya Safari Adventure", date: "Dec 16, 2024", status: "Confirmed" },
]

export default function AdminPage() {
  const [activeNav, setActiveNav] = useState("overview")

  return (
    <main className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-accent text-white">
        <div className="container-max px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold">Admin Dashboard</h1>
            <p className="text-primary-dark">Manage your travel business</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-accent-light hover:bg-accent-lighter transition-colors rounded-lg">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-background border-r border-border min-h-screen p-6 sticky top-0">
          <nav className="space-y-2">
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "tours", label: "Manage Tours", icon: "🗺️" },
              { id: "hotels", label: "Manage Hotels", icon: "🏨" },
              { id: "blog", label: "Manage Blog", icon: "📝" },
              { id: "bookings", label: "Bookings & Orders", icon: "📋" },
              { id: "users", label: "Users", icon: "👥" },
              { id: "settings", label: "Settings", icon: "⚙️" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  activeNav === item.id ? "bg-accent text-white" : "text-accent hover:bg-primary"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Overview Section */}
          {activeNav === "overview" && (
            <div className="space-y-8">
              <h2 className="heading-medium text-accent">Dashboard Overview</h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DASHBOARD_STATS.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <Card key={index} className="p-6 flex items-start gap-4 bg-white border border-border">
                      <div className="p-3 bg-primary rounded-lg">
                        <Icon size={24} className={stat.color} />
                      </div>
                      <div>
                        <p className="text-sm text-accent-lighter">{stat.label}</p>
                        <p className="text-2xl font-bold text-accent mt-1">{stat.value}</p>
                      </div>
                    </Card>
                  )
                })}
              </div>

              {/* Recent Bookings Table */}
              <Card className="p-6 bg-white border border-border">
                <h3 className="font-serif text-xl font-bold text-accent mb-6">Recent Bookings</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-accent">Guest</th>
                        <th className="text-left py-3 px-4 font-semibold text-accent">Tour</th>
                        <th className="text-left py-3 px-4 font-semibold text-accent">Date</th>
                        <th className="text-left py-3 px-4 font-semibold text-accent">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RECENT_BOOKINGS.map((booking) => (
                        <tr key={booking.id} className="border-b border-border hover:bg-primary transition-colors">
                          <td className="py-3 px-4 text-accent">{booking.guest}</td>
                          <td className="py-3 px-4 text-accent">{booking.tour}</td>
                          <td className="py-3 px-4 text-accent-lighter">{booking.date}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                booking.status === "Confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : booking.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Tours Management */}
          {activeNav === "tours" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="heading-medium text-accent">Manage Tours</h2>
                <button className="btn-primary">Add New Tour</button>
              </div>
              <Card className="p-8 bg-white border border-border text-center">
                <p className="text-accent-lighter text-lg">Tour management interface coming soon</p>
                <p className="text-muted text-sm mt-2">Add, edit, and delete tour packages</p>
              </Card>
            </div>
          )}

          {/* Hotels Management */}
          {activeNav === "hotels" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="heading-medium text-accent">Manage Hotels</h2>
                <button className="btn-primary">Add New Hotel</button>
              </div>
              <Card className="p-8 bg-white border border-border text-center">
                <p className="text-accent-lighter text-lg">Hotel management interface coming soon</p>
                <p className="text-muted text-sm mt-2">Add, edit, and delete hotel listings</p>
              </Card>
            </div>
          )}

          {/* Blog Management */}
          {activeNav === "blog" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="heading-medium text-accent">Manage Blog Posts</h2>
                <button className="btn-primary">Write New Post</button>
              </div>
              <Card className="p-8 bg-white border border-border text-center">
                <p className="text-accent-lighter text-lg">Blog management interface coming soon</p>
                <p className="text-muted text-sm mt-2">Create, edit, and publish blog articles</p>
              </Card>
            </div>
          )}

          {/* Bookings Management */}
          {activeNav === "bookings" && (
            <div className="space-y-6">
              <h2 className="heading-medium text-accent">All Bookings</h2>
              <Card className="p-6 bg-white border border-border overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-accent">ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-accent">Guest</th>
                      <th className="text-left py-3 px-4 font-semibold text-accent">Package</th>
                      <th className="text-left py-3 px-4 font-semibold text-accent">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-accent">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-accent">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_BOOKINGS.map((booking) => (
                      <tr key={booking.id} className="border-b border-border hover:bg-primary transition-colors">
                        <td className="py-3 px-4 text-accent font-semibold">#{1001 + booking.id}</td>
                        <td className="py-3 px-4 text-accent">{booking.guest}</td>
                        <td className="py-3 px-4 text-accent text-sm">{booking.tour}</td>
                        <td className="py-3 px-4 text-accent font-semibold">${2500 + booking.id * 100}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              booking.status === "Confirmed"
                                ? "bg-green-100 text-green-700"
                                : booking.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-accent hover:text-accent-light transition-colors text-sm">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          )}

          {/* Users Management */}
          {activeNav === "users" && (
            <div className="space-y-6">
              <h2 className="heading-medium text-accent">Registered Users</h2>
              <Card className="p-8 bg-white border border-border text-center">
                <p className="text-accent-lighter text-lg">User management interface coming soon</p>
                <p className="text-muted text-sm mt-2">View and manage user accounts</p>
              </Card>
            </div>
          )}

          {/* Settings */}
          {activeNav === "settings" && (
            <div className="space-y-6">
              <h2 className="heading-medium text-accent">Admin Settings</h2>
              <Card className="p-8 bg-white border border-border text-center">
                <p className="text-accent-lighter text-lg">Settings panel coming soon</p>
                <p className="text-muted text-sm mt-2">Configure your business settings</p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
