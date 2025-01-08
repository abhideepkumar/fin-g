'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer
} from 'recharts'
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'

// Sample data for stock cards
const stockCards = [
  { symbol: 'AAPL', price: 150.25, change: '+1.50%', volume: '3,000,000' },
  { symbol: 'GOOGL', price: 2750.32, change: '-0.30%', volume: '1,500,000' },
  { symbol: 'AMZN', price: 3450.00, change: '-0.25%', volume: '1,800,000' },
  { symbol: 'TSLA', price: 720.10, change: '-1.00%', volume: '2,000,000' },
  { symbol: 'HDFC', price: 2650.00, change: '+1.50%', volume: '800,000' },
  { symbol: 'INFY', price: 1450.00, change: '+0.50%', volume: '950,000' },
  { symbol: 'TCS', price: 3200.00, change: '+0.90%', volume: '500,000' },
  { symbol: 'RELIANCE', price: 2450.00, change: '+3.00%', volume: '1,200,000' },
]

const investmentHistory = [
  { id: 1, name: 'Apple Inc.', price: 145, status: 'up', date: '2024-01-01', profitLoss: 20, sharesBought: 10 },
  { id: 2, name: 'Google LLC', price: 2800, status: 'down', date: '2024-01-02', profitLoss: -150, sharesBought: 5 },
  { id: 3, name: 'Amazon.com Inc.', price: 3300, status: 'down', date: '2024-01-04', profitLoss: -100, sharesBought: 2 },
  { id: 4, name: 'Microsoft Corp.', price: 299, status: 'up', date: '2024-01-05', profitLoss: 30, sharesBought: 8 },
  { id: 5, name: 'Meta Platforms', price: 350, status: 'down', date: '2024-01-06', profitLoss: -20, sharesBought: 6 },
  { id: 6, name: 'NVIDIA Corp.', price: 220, status: 'up', date: '2024-01-07', profitLoss: 15, sharesBought: 4 },
]

const stockAnalytics = [
  { name: 'AAPL', recommendation: 'Strong Buy', targetPrice: '$180' },
  { name: 'GOOGL', recommendation: 'Hold', targetPrice: '$2900' },
]

const stockDistributionData = [
  { name: 'AAPL', value: 400 },
  { name: 'GOOGL', value: 300 },
  { name: 'AMZN', value: 300 },
  { name: 'TSLA', value: 200 },
  { name: 'HDFC', value: 250 },
  { name: 'INFY', value: 150 },
  { name: 'TCS', value: 200 },
  { name: 'RELIANCE', value: 300 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff7300']

export default function InvestmentPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Personalized Investment Dashboard</h1>
      
      {/* Stock Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stockCards.map((stock) => (
          <Card key={stock.symbol}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{stock.symbol}</h3>
                  <p className="text-sm text-muted-foreground">Price: ₹{stock.price}</p>
                </div>
                <span className={`text-sm ${stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.change}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Volume: {stock.volume}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Investment History */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Investment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sr. No.</TableHead>
                  <TableHead>Share Name</TableHead>
                  <TableHead>Price (₹)</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Profit/Loss (Per Share)</TableHead>
                  <TableHead>Shares Bought</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {investmentHistory.map((item) => (
                  <TableRow key={item.id} className={item.profitLoss >= 0 ? 'bg-green-50' : 'bg-red-50'}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      {item.status === 'up' ? (
                        <ArrowUpIcon className="text-green-500" />
                      ) : (
                        <ArrowDownIcon className="text-red-500" />
                      )}
                    </TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell className={item.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}>
                      {item.profitLoss}
                    </TableCell>
                    <TableCell>{item.sharesBought}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stock Distribution Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Stock Price Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stockDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {stockDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Stock Volume Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Stock Volume Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stockCards}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="symbol" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="volume" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stock Analytics Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Stock Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stockAnalytics.map((stock) => (
              <div key={stock.name} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{stock.name}</h4>
                    <p className="text-sm text-muted-foreground">Recommendation: {stock.recommendation}</p>
                  </div>
                  <div>
                    <p className="text-sm">Target Price: {stock.targetPrice}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Find the Best and Affordable Stocks to Invest!</h3>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search stocks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

