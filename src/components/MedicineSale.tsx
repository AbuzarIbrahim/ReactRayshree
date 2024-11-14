import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SoldMedicine from "./SoldMedicine";
const MedicineSale = () => {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Add Sale</TabsTrigger>
        <TabsTrigger value="password">Sold Medicine List</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        <SoldMedicine />
      </TabsContent>
    </Tabs>
  );
};

export default MedicineSale;
