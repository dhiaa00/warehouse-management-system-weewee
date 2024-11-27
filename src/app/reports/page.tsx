"use client";

import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { BarChart, LineChart } from "../../components/charts";

export default function Reports() {
  const [reportType, setReportType] = useState("weekly");

  const generateReport = (type: string) => {
    // In a real application, this would trigger a report generation process
    console.log(`Generating ${type} report...`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Reports and Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Stock Trends</h3>
            <LineChart />
          </div>
        </Card>
        <Card>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Vehicle Utilization</h3>
            <BarChart />
          </div>
        </Card>
      </div>
      <Card className="mb-8">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Generate Reports</h3>
          <div className="flex space-x-4">
            <Button onClick={() => generateReport("weekly")}>
              Weekly Report
            </Button>
            <Button onClick={() => generateReport("monthly")}>
              Monthly Report
            </Button>
            <Button onClick={() => generateReport("custom")}>
              Custom Report
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">
            Key Performance Indicators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded">
              <h4 className="font-semibold">Average Processing Time</h4>
              <p className="text-2xl font-bold">2.5 hours</p>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <h4 className="font-semibold">On-Time Delivery Rate</h4>
              <p className="text-2xl font-bold">98.5%</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded">
              <h4 className="font-semibold">Inventory Turnover Rate</h4>
              <p className="text-2xl font-bold">12.3</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
