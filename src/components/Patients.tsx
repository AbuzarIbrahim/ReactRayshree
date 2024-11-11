import { useState } from "react";
import { ArrowRightFromLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Define the Patient type
interface Patient {
  id: number;
  opdNo: string;
  name: string;
  phone: string;
  age: number;
  notes: string;
  location: string;
  source: string;
  type: string;
}

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



export default function Patients() {
  const [patients] = useState<Patient[]>(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null); // Define selectedPatient type

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-zinc-900">Patients:</h1>
     
      <div className="flex w-full">
        {/* Table Section (75% width) */}
        <div className="w-3/4 pr-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/10 py-3">OPD No</TableHead>
                <TableHead className="w-1/3 px-4 py-3">Name</TableHead>
                <TableHead className="w-1/3 px-4 py-3">Phone</TableHead>
                <TableHead className="w-1/3 px-4 py-3">OPD Type</TableHead>
                <TableHead className="w-1/3 px-4 py-3">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="py-3 whitespace-nowrap overflow-hidden">{patient.opdNo}</TableCell>
                  <TableCell className="px-4 py-3 whitespace-nowrap overflow-hidden">{patient.name}</TableCell>
                  <TableCell className="px-4 py-3 whitespace-nowrap overflow-hidden">{patient.phone}</TableCell>
                  <TableCell className="px-4 py-3 whitespace-nowrap overflow-hidden">{patient.type}</TableCell>
                  <TableCell className="px-4 py-3 whitespace-nowrap overflow-hidden">
                    <Button variant="ghost" onClick={() => handlePatientSelect(patient)}>
                      <ArrowRightFromLine />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Always visible pane (25% width) */}
        <div className="w-1/4 border-l-2 border-gray-200 pl-4">
          <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
          {selectedPatient ? (
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">OPD No</TableCell>
                  <TableCell>{selectedPatient.opdNo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Name</TableCell>
                  <TableCell>{selectedPatient.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Phone</TableCell>
                  <TableCell>{selectedPatient.phone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Age</TableCell>
                  <TableCell>{selectedPatient.age}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Notes</TableCell>
                  <TableCell>{selectedPatient.notes}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Location</TableCell>
                  <TableCell>{selectedPatient.location}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Source</TableCell>
                  <TableCell>{selectedPatient.source}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Type</TableCell>
                  <TableCell>{selectedPatient.type}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ) : (
            <p className="text-gray-500">No patient selected</p>
          )}
        </div>
      </div>
    </div>
  );
}
