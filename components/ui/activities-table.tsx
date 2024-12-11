"use client";

import { b2i } from "@/hooks/usePresale";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";
import { formatDate, shortenAddress } from "@/lib/utils";
import { useState } from "react";

export interface Activity {
  id: any;
  tokenAmt: any;
  mode: any;
}

interface ActivitiesTableProps {
  activities: Activity[];
}

export function ActivitiesTable({ activities }: ActivitiesTableProps) {
  const rowsPerPage = 10; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(activities.length / rowsPerPage);

  // Get current page activities
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentActivities = activities.slice(startIndex, startIndex + rowsPerPage);

  // Pagination handlers
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="rounded-xl border border-[#F0B90B]/20 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#F0B90B]/20">
            {/* <TableHead className="text-gray-400">Date</TableHead>
            <TableHead className="text-gray-400">Wallet</TableHead> */}
            <TableHead className="text-gray-400">User ID</TableHead>
            <TableHead className="text-gray-400">Type</TableHead>
            <TableHead className="text-right text-gray-400">Reward</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity,id) => (
            <TableRow 
              key={id}
              className="border-b text-left border-[#F0B90B]/20 bg-black/20 hover:bg-[#F0B90B]/5"
            >
              {/* <TableCell className="font-medium">{formatDate(activity.date)}</TableCell>
              <TableCell>
                <a 
                  href={`https://bscscan.com/address/${activity.walletAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0B90B] hover:underline"
                >
                  {shortenAddress(activity.walletAddress)}
                </a>
              </TableCell> */}
              <TableCell>
                {parseInt(activity.id.toString())}
              </TableCell>
              <TableCell>
                <span className="capitalize">{(activity.mode) == 0 ? "Investment": ((activity.mode) == 1 ? "Referral": "Dividend")}</span>
              </TableCell>
              <TableCell className="text-right font-medium text-[#F0B90B]">
                {b2i(activity.tokenAmt)} UCC
              </TableCell>
            </TableRow>))}
          </TableBody>
         
        </Table>
      </div>

     
  );
}