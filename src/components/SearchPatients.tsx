"use client";

import { useState } from "react";
import { Search, Eye, FileDown, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for demonstration
const initialPatients = [
  {
    id: 1,
    opdNo: "OPD001",
    name: "John Doe",
    phone: "123-456-7890",
    age: 35,
    notes: "Regular checkup",
    location: "New York",
    source: "Referral",
    type: "Spine",
  },
  {
    id: 2,
    opdNo: "OPD002",
    name: "Jane Smith",
    phone: "098-765-4321",
    age: 28,
    notes: "Follow-up",
    location: "Los Angeles",
    source: "Walk-in",
    type: "Piles",
  },
  {
    id: 3,
    opdNo: "OPD003",
    name: "Bob Johnson",
    phone: "555-555-5555",
    age: 42,
    notes: "New patient",
    location: "Chicago",
    source: "Online",
    type: "Spine",
  },
  {
    id: 4,
    opdNo: "OPD004",
    name: "Alice Brown",
    phone: "111-222-3333",
    age: 50,
    notes: "Chronic condition",
    location: "Houston",
    source: "Referral",
    type: "Piles",
  },
  {
    id: 5,
    opdNo: "OPD005",
    name: "Charlie Davis",
    phone: "444-444-4444",
    age: 33,
    notes: "Routine checkup",
    location: "Phoenix",
    source: "Walk-in",
    type: "Spine",
  },
  {
    id: 6,
    opdNo: "OPD006",
    name: "David Wilson",
    phone: "222-333-4444",
    age: 45,
    notes: "Consultation",
    location: "San Francisco",
    source: "Referral",
    type: "Spine",
  },
  {
    id: 7,
    opdNo: "OPD007",
    name: "Emma Thomas",
    phone: "333-444-5555",
    age: 29,
    notes: "Follow-up",
    location: "Seattle",
    source: "Walk-in",
    type: "Piles",
  },
  {
    id: 8,
    opdNo: "OPD008",
    name: "Olivia Martinez",
    phone: "444-555-6666",
    age: 38,
    notes: "Routine checkup",
    location: "Denver",
    source: "Online",
    type: "Spine",
  },
  {
    id: 9,
    opdNo: "OPD009",
    name: "Liam Garcia",
    phone: "555-666-7777",
    age: 52,
    notes: "Chronic condition",
    location: "Miami",
    source: "Referral",
    type: "Piles",
  },
  {
    id: 10,
    opdNo: "OPD010",
    name: "Sophia Martinez",
    phone: "666-777-8888",
    age: 31,
    notes: "New patient",
    location: "Boston",
    source: "Walk-in",
    type: "Spine",
  },
];

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("notes");
  const [patients, setPatients] = useState(initialPatients);

  const handleSearch = () => {
    const filteredPatients = initialPatients.filter((patient) => {
      const searchValue = patient[filterBy as keyof typeof patient];
      return (
        typeof searchValue === "string" &&
        searchValue.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setPatients(filteredPatients);
  };

  const handleDelete = (id: number) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-zinc-900">Search Patients :</h1>
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-white"
        />
        <Select value={filterBy} onValueChange={setFilterBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="notes">Notes</SelectItem>
            <SelectItem value="location">Location</SelectItem>
            <SelectItem value="source">Source</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
      <div className="w-full overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/6 px-4 py-3">OPD No</TableHead>
              <TableHead className="w-1/4 px-4 py-3">Name</TableHead>
              <TableHead className="w-1/6 px-4 py-3">Phone</TableHead>
              <TableHead className="w-1/6 px-4 py-3">Type</TableHead>
              <TableHead className="w-1/12 px-4 py-3">Age</TableHead>
              <TableHead className="w-1/4 px-4 py-3">
                <Button
                  className="shadow hover:shadow-lg transition-shadow duration-300 ease-in-out flex items-center gap-2"
                  variant="outline"
                >
                  <img
                    src="./src/assets/2504768.png"
                    alt="icon"
                    className="w-5 h-5"
                  />
                  Download ExcelSheet
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="px-4 py-3">{patient.opdNo}</TableCell>
                <TableCell className="px-4 py-3">{patient.name}</TableCell>
                <TableCell className="px-4 py-3">{patient.phone}</TableCell>
                <TableCell className="px-4 py-3">{patient.type}</TableCell>
                <TableCell className="px-4 py-3">{patient.age}</TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" /> View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(patient.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
