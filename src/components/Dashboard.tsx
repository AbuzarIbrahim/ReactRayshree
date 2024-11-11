"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Search,
  DollarSign,
  Users,
  UserPlus,
  Calendar,
  // TrendingUp,
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const incomeExpenseData = [
  { month: "Jan", income: 3000, expenses: 2000 },
  { month: "Feb", income: 3200, expenses: 2200 },
  { month: "Mar", income: 2800, expenses: 2100 },
  { month: "Apr", income: 3500, expenses: 2300 },
  { month: "May", income: 4000, expenses: 2500 },
  { month: "Jun", income: 4200, expenses: 2600 },
  { month: "Jul", income: 3700, expenses: 2400 },
  { month: "Aug", income: 4500, expenses: 2800 },
  { month: "Sep", income: 4800, expenses: 2900 },
  { month: "Oct", income: 5200, expenses: 3100 },
  { month: "Nov", income: 5000, expenses: 3000 },
  { month: "Dec", income: 5300, expenses: 3200 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
};

export default function Dashboard() {
  return (
    <div className="flex-grow p-6 w-full">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SidebarTrigger />
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[180px] lg:w-[300px] bg-white"
            />
            <Button>
              <Search />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Existing cards */}
          <Card className="w-full h-[140px] max-w-xxs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm sm:text-base font-medium">
                Today's Earnings
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl font-bold">$5,231</div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                +20.1% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="w-full h-[140px] max-w-xxs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm md:text-base font-medium">
                Patients
              </CardTitle>
              <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl md:text-2xl font-bold">
                +573
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                +201 since last week
              </p>
            </CardContent>
          </Card>

          <Card className="w-full h-[140px] max-w-xxs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm md:text-base font-medium">
                Staff
              </CardTitle>
              <UserPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl md:text-2xl font-bold">
                +36
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                +4 since last month
              </p>
            </CardContent>
          </Card>

          <Card className="w-full h-[140px] max-w-xxs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm md:text-base font-medium">
                Today's Appointments
              </CardTitle>
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl md:text-2xl font-bold">42</div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                +15% from yesterday
              </p>
            </CardContent>
          </Card>

          {/* Income and Expenses Chart Card */}
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Income and Expenses</CardTitle>
              <CardDescription>Data for the last 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <AreaChart
                  width={500} // Set a fixed width for smaller chart size
                  height={200} // Adjust the height as needed
                  data={incomeExpenseData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={true}
                    axisLine={false}
                    tickMargin={5}
                  />
                  <ChartTooltip
                    cursor={true}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Area
                    dataKey="income"
                    type="natural"
                    fill="hsl(210, 90%, 70%)"
                    fillOpacity={0.4}
                    stroke="hsl(210, 90%, 50%)"
                    name="Income"
                  />
                  <Area
                    dataKey="expenses"
                    type="natural"
                    fill="hsl(10, 80%, 70%)"
                    fillOpacity={0.4}
                    stroke="hsl(10, 80%, 50%)"
                    name="Expenses"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  {/* <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    January - December 2024
                  </div> */}
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Patients</CardTitle>
              {/* <CardDescription></CardDescription> */}
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(8)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        INV00{index + 2}
                      </TableCell>
                      <TableCell>
                        {index % 2 === 0 ? "Paid" : "Pending"}
                      </TableCell>
                      <TableCell>
                        {index % 2 === 0 ? "Spine" : "Piles"}
                      </TableCell>
                      <TableCell className="text-right">
                        ${(index + 1) * 100}.00
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>{/*  */}</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
