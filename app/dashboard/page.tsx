import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your FinG Dashboard</h1>
      <p className="mb-4">Select an option from the sidebar or choose one of the quick links below:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/dashboard/invest" className="p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
          Invest
        </Link>
        <Link href="/dashboard/learn" className="p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
          Learn
        </Link>
        <Link href="/dashboard/news" className="p-4 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors">
          News
        </Link>
      </div>
    </div>
  )
}

