"use client";

import { useState } from "react";
import { ArrowRightFromLine, FileText, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Patient {
  id: number;
  PrescriptionNo: number;
  name: string;
}

const initialPatients = [
  {
    id: 1,
    PrescriptionNo: 1234,
    name: "John Doe",
  },
  {
    id: 2,
    PrescriptionNo: 1234,
    name: "Jane Smith",
  },
  {
    id: 3,
    PrescriptionNo: 1234,
    name: "Bob Johnson",
  },
  {
    id: 4,
    PrescriptionNo: 1234,
    name: "Alice Brown",
  },
  {
    id: 5,
    PrescriptionNo: 1234,
    name: "Charlie Davis",
  },
  {
    id: 6,
    PrescriptionNo: 1234,
    name: "David Wilson",
  },
  {
    id: 7,
    PrescriptionNo: 1234,
    name: "Emma Thomas",
  },
  {
    id: 8,
    PrescriptionNo: 1234,
    name: "Olivia Martinez",
  },
  {
    id: 9,
    PrescriptionNo: 1234,
    name: "Liam Garcia",
  },
  {
    id: 10,
    PrescriptionNo: 1234,
    name: "Sophia Martinez",
  },
];

export default function SoldMedicine() {
  const [patients] = useState<Patient[]>(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-zinc-900">Medicine Sale:</h1>

      <div className="flex w-full">
        <div className="w-2/4 pr-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/10 py-3">Prescription No</TableHead>
                <TableHead className="w-1/3 px-4 py-3">Name</TableHead>
                <TableHead className="w-1/3 px-4 py-3">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="py-3 whitespace-nowrap overflow-hidden">
                    {patient.PrescriptionNo}
                  </TableCell>
                  <TableCell className="px-4 py-3 whitespace-nowrap overflow-hidden">
                    {patient.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 whitespace-nowrap overflow-hidden">
                    <Button
                      variant="ghost"
                      onClick={() => handlePatientSelect(patient)}
                    >
                      <ArrowRightFromLine />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="w-2/4 border-l-2 border-gray-200 pl-4">
          <h6 className="text-2xl mb-4">Prescription Details</h6>
          {selectedPatient ? (
            <Tabs defaultValue="bill" className="w-full max-w-4xl">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger
                  value="bill"
                  className="flex items-center justify-center"
                >
                  <ClipboardList className="mr-2 h-4 w-4" />
                  Bill
                </TabsTrigger>
                <TabsTrigger
                  value="invoice"
                  className="flex items-center justify-center"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Invoice
                </TabsTrigger>
              </TabsList>
              <TabsContent value="bill">
                <Card>
                  <CardHeader>
                    <CardTitle>Bill Of Supply</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h1>fill the content here</h1>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="invoice">
                <Card></Card>
              </TabsContent>
            </Tabs>
          ) : (
            <p className="text-gray-500">No Prescription selected</p>
          )}
        </div>
      </div>
    </div>
  );
}
