"use client";

import { useState } from "react";
import { Search, Edit, ArrowRight, Plus } from "lucide-react";
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
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for demonstration
const initialEnquiries = [
  {
    id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    source: "Website",
    address: "123 Main St",
    dateTime: "2023-05-01 10:00",
    status: "New",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "098-765-4321",
    source: "Referral",
    address: "456 Elm St",
    dateTime: "2023-05-02 11:30",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Bob Johnson",
    phone: "555-555-5555",
    source: "Walk-in",
    address: "789 Oak St",
    dateTime: "2023-05-03 14:15",
    status: "Completed",
  },
  {
    id: 4,
    name: "Alice Brown",
    phone: "111-222-3333",
    source: "Phone",
    address: "321 Pine St",
    dateTime: "2023-05-04 09:45",
    status: "New",
  },
  {
    id: 5,
    name: "Charlie Davis",
    phone: "444-444-4444",
    source: "Email",
    address: "654 Birch St",
    dateTime: "2023-05-05 13:00",
    status: "In Progress",
  },
  {
    id: 6,
    name: "Eva Wilson",
    phone: "777-888-9999",
    source: "Website",
    address: "987 Cedar St",
    dateTime: "2023-05-06 15:30",
    status: "Completed",
  },
  {
    id: 7,
    name: "Frank Thomas",
    phone: "222-333-4444",
    source: "Referral",
    address: "135 Maple St",
    dateTime: "2023-05-07 10:45",
    status: "New",
  },
  {
    id: 8,
    name: "Grace Lee",
    phone: "666-777-8888",
    source: "Walk-in",
    address: "246 Walnut St",
    dateTime: "2023-05-08 12:15",
    status: "In Progress",
  },
  {
    id: 9,
    name: "Henry Clark",
    phone: "999-000-1111",
    source: "Phone",
    address: "369 Spruce St",
    dateTime: "2023-05-09 16:00",
    status: "Completed",
  },
  {
    id: 10,
    name: "Ivy Martin",
    phone: "333-444-5555",
    source: "Email",
    address: "159 Ash St",
    dateTime: "2023-05-10 11:00",
    status: "New",
  },
  {
    id: 11,
    name: "Jack Wilson",
    phone: "111-999-8888",
    source: "Website",
    address: "753 Oak St",
    dateTime: "2023-05-11 14:30",
    status: "In Progress",
  },
  {
    id: 12,
    name: "Karen Brown",
    phone: "222-888-7777",
    source: "Referral",
    address: "951 Pine St",
    dateTime: "2023-05-12 10:15",
    status: "Completed",
  },
  {
    id: 13,
    name: "Liam Davis",
    phone: "333-777-6666",
    source: "Walk-in",
    address: "357 Elm St",
    dateTime: "2023-05-13 11:45",
    status: "New",
  },
  {
    id: 14,
    name: "Mia Johnson",
    phone: "444-666-5555",
    source: "Phone",
    address: "159 Maple St",
    dateTime: "2023-05-14 13:30",
    status: "In Progress",
  },
  {
    id: 15,
    name: "Noah Smith",
    phone: "555-444-3333",
    source: "Email",
    address: "753 Birch St",
    dateTime: "2023-05-15 15:00",
    status: "Completed",
  },
];

export default function Enquiries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearch = () => {
    const filteredEnquiries = initialEnquiries.filter((enquiry) =>
      Object.values(enquiry).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setEnquiries(filteredEnquiries);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = enquiries.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(enquiries.length / itemsPerPage);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Enquiries :</h1>
        <Button>
          <Plus />
          New Enquiry
        </Button>
      </div>
      <div className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-white"
        />
        <Button
          variant="secondary"
          className="bg-white border-1 border-gray-500"
          onClick={handleSearch}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-full overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[5%]">No.</TableHead>
              <TableHead className="w-[15%]">Name</TableHead>
              <TableHead className="w-[12%]">Phone</TableHead>
              <TableHead className="w-[10%]">Source</TableHead>
              <TableHead className="w-[20%]">Address</TableHead>
              <TableHead className="w-[12%]">Date & Time</TableHead>
              <TableHead className="w-[10%]">Status</TableHead>
              <TableHead className="w-[16%]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((enquiry, index) => (
              <TableRow key={enquiry.id}>
                <TableCell>{indexOfFirstItem + index + 1}</TableCell>
                <TableCell>{enquiry.name}</TableCell>
                <TableCell>{enquiry.phone}</TableCell>
                <TableCell>{enquiry.source}</TableCell>
                <TableCell>{enquiry.address}</TableCell>
                <TableCell>{enquiry.dateTime}</TableCell>
                <TableCell>{enquiry.status}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4 bg-white" /> Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={enquiry.status === "Completed"}
                    >
                      <ArrowRight className="mr-2 h-4 w-4 bg-white" /> Move
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="cursor-pointer"
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={() => setCurrentPage(i + 1)}
                isActive={currentPage === i + 1}
                className="cursor-pointer"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
