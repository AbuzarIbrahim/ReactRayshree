"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowRightFromLine,
  FileText,
  SquarePen,
  Files,
  Settings,
  Pill,
  Eye,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";

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

export default function MedicalDashboard() {
  const [patients] = useState<Patient[]>(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [docContent, setDocContent] = useState("");
  const { register: registerEdit, handleSubmit: handleSubmitEdit } = useForm();
  const { register, handleSubmit, control, setValue } = useForm();
  const currentDate = new Date().toLocaleDateString();
  const handleVitalsSubmit = (data: any) => {
    // Handle the vitals data here, e.g., sending it to the backend or logging it
    console.log("Vitals Data:", data);
  };

  const onEditSubmit = (data: any) => console.log(data);

  const loadDocFromLocalStorage = () => {
    const savedDoc = localStorage.getItem("medicalDoc");
    if (savedDoc) {
      setDocContent(savedDoc);
    } else {
      setDocContent("No documentation found in local storage.");
    }
  };

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-zinc-900">Patients:</h1>

      <div className="flex w-full">
        <div className="w-2/4 pr-4">
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
                  <TableCell className="py-3 whitespace-nowrap overflow-hidden">
                    {patient.opdNo}
                  </TableCell>
                  <TableCell className="px-4 py-3 whitespace-nowrap overflow-hidden">
                    {patient.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 whitespace-nowrap overflow-hidden">
                    {patient.phone}
                  </TableCell>
                  <TableCell className="px-4 py-3 whitespace-nowrap overflow-hidden">
                    {patient.type}
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
          <h6 className="text-2xl mb-4">Patient Details</h6>
          {selectedPatient ? (
            <Tabs defaultValue="edit" className="w-full max-w-4xl">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger
                  value="edit"
                  className="flex items-center justify-center"
                >
                  <SquarePen className="mr-2 h-4 w-4" />
                  Edit
                </TabsTrigger>
                <TabsTrigger
                  value="prescription"
                  className="flex items-center justify-center"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Prescription
                </TabsTrigger>
                <TabsTrigger
                  value="doc"
                  className="flex items-center justify-center"
                >
                  <Files className="mr-2 h-4 w-4" />
                  Doc
                </TabsTrigger>
                <TabsTrigger
                  value="vitals"
                  className="flex items-center justify-center"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Update Vitals
                </TabsTrigger>
              </TabsList>
              <TabsContent value="edit">
                <Card>
                  <CardHeader>
                    <CardTitle>Edit Patient Information</CardTitle>
                    <CardDescription>
                      Make changes to the patient's details here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitEdit(onEditSubmit)}>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="patientName">Patient's Name</Label>
                          <Input
                            id="patientName"
                            {...registerEdit("patientName")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gaurdianName">Gaurdian's Name</Label>
                          <Input
                            id="gaurdianName"
                            {...registerEdit("gaurdianName")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gaurdianType">Gaurdian Type</Label>
                          <Input
                            id="gaurdianType"
                            {...registerEdit("gaurdianType")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Mobile No.</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...registerEdit("phone")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="patientage">Patient's Age</Label>
                          <Input
                            id="patientage"
                            {...registerEdit("patientage")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Input id="gender" {...registerEdit("gender")} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date Of Birth</Label>
                          <Input id="dob" {...registerEdit("dob")} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="Occupation">Occupation</Label>
                          <Input
                            id="Occupation"
                            {...registerEdit("Occupation")}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email"> Patient's Email</Label>
                          <Input
                            id="email"
                            type="email"
                            {...registerEdit("email")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address"> Patient's Address</Label>
                          <Input
                            id="address"
                            type="string"
                            {...registerEdit("address")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country"> Select Country</Label>
                          <Input
                            id="country"
                            type="string"
                            {...registerEdit("country")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">Select State</Label>
                          <Input
                            id="state"
                            type="string"
                            {...registerEdit("state")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pincode">Pin Code</Label>
                          <Input id="pincode" {...registerEdit("pincode")} />
                        </div>
                      </div>
                      <Button type="submit" className="mt-4 w-full">
                        Save Changes
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prescription">
                <Card>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      {/* Date section on the left */}
                      <div className="text-lg font-semibold">{currentDate}</div>

                      {/* Action buttons on the right */}
                      <div className="flex space-x-4 justify-end">
                        {/* Link wraps the button to navigate to another route */}
                        <Link to="/medicinesale">
                          {" "}
                          {/* Replace '/new-page' with your target route */}
                          <Button className="p-2">
                            <Pill size={20} />
                          </Button>
                        </Link>

                        {/* Printer button with an action */}
                        <Button
                          onClick={() => console.log("Printer clicked")}
                          className="p-2"
                        >
                          <Printer size={20} />
                        </Button>

                        {/* Eye button with an action */}
                        <Button
                          onClick={() => console.log("Eye clicked")}
                          className="p-2"
                        >
                          <Eye size={20} />
                        </Button>
                      </div>
                    </div>

                    {/* Patient Details Section */}
                    <div className="flex flex-wrap ">
                      <div className="w-1/3">
                        <p>
                          <strong>Prescription:</strong> Spine
                        </p>
                      </div>
                      <div className="w-1/3">
                        <p>
                          <strong>Name:</strong> John Doe
                        </p>
                      </div>
                      <div className="w-1/3">
                        <p>
                          <strong>Age:</strong> 30
                        </p>
                      </div>
                      <div className="w-1/3">
                        <p>
                          <strong>Diagnosis:</strong> Hypertension
                        </p>
                      </div>
                      <div className="w-1/2">
                        <p>
                          <strong>Medications:</strong> Metoprolol, Lisinopril
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="doc">
                <Card>
                  <CardHeader>
                    <CardTitle>Doctor's Notes</CardTitle>
                    <CardDescription>
                      Access and update medical records.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button onClick={loadDocFromLocalStorage} className="mb-4">
                      Load Documentation
                    </Button>
                    <div className="border p-4 min-h-[200px]">{docContent}</div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="vitals">
                <Card>
                  <CardHeader>
                    <CardTitle>Update Vitals</CardTitle>
                    <CardDescription>
                      Record and monitor patient vitals.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(handleVitalsSubmit)}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bpSystolic">BP (Systolic) mmHg</Label>
                          <Input
                            id="bpSystolic"
                            type="number"
                            {...register("bpSystolic")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bpDiastolic">
                            BP (Diastolic) mmHg
                          </Label>
                          <Input
                            id="bpDiastolic"
                            type="number"
                            {...register("bpDiastolic")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pulse">Pulse (bpm)</Label>
                          <Input
                            id="pulse"
                            type="number"
                            {...register("pulse")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="height">Height (cm)</Label>
                          <Input
                            id="height"
                            type="number"
                            step="0.1"
                            {...register("height")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="weight">Weight (kg)</Label>
                          <Input
                            id="weight"
                            type="number"
                            step="0.1"
                            {...register("weight")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bmi">BMI (kg/m²)</Label>
                          <Input
                            id="bmi"
                            type="number"
                            step="0.01"
                            {...register("bmi")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="spo2">SpO2 (%)</Label>
                          <Input
                            id="spo2"
                            type="number"
                            max="100"
                            {...register("spo2")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="rbs">RBS (mmol/L)</Label>
                          <Input
                            id="rbs"
                            type="number"
                            step="0.1"
                            {...register("rbs")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="abdGirth">ABD Girth (cm)</Label>
                          <Input
                            id="abdGirth"
                            type="number"
                            step="0.1"
                            {...register("abdGirth")}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="paymentStatus">Payment Status</Label>
                          <Controller
                            name="paymentStatus"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select payment status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="paid">Paid</SelectItem>
                                  <SelectItem value="unpaid">Unpaid</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="opdType">OPD Type</Label>
                          <Controller
                            name="opdType"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select OPD type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="spine">Spine</SelectItem>
                                  <SelectItem value="piles">Piles</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="Doctor">Select Doctor</Label>
                          <Controller
                            name="Doctor"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Doctor" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="spine">
                                    Dr Manish Yadav{" "}
                                  </SelectItem>
                                  <SelectItem value="piles">Dr Who</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                      </div>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button type="submit" className="mt-4 w-full">
                            Save
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <p className="text-gray-500">No patient selected</p>
          )}
        </div>
      </div>
    </div>
  );
}
