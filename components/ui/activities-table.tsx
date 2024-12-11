"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";
import { formatDate, shortenAddress } from "@/lib/utils";

export interface Activity {
  id: string;
  date: Date;
  walletAddress: string;
  reward: string;
  type: 'referral' | 'staking' | 'dividend';
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
    <div>
      <div className="rounded-xl border border-[#F0B90B]/20 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#F0B90B]/20">
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="text-gray-400">Wallet</TableHead>
              <TableHead className="text-gray-400">Type</TableHead>
              <TableHead className="text-right text-gray-400">Reward</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentActivities.map((activity) => (
              <TableRow
                key={activity.id}
                className="border-b text-left border-[#F0B90B]/20 bg-black/20 hover:bg-[#F0B90B]/5"
              >
                <TableCell className="font-medium">{formatDate(activity.date)}</TableCell>
                <TableCell>
                  <a
                    href={`https://bscscan.com/address/${activity.walletAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F0B90B] hover:underline"
                  >
                    {shortenAddress(activity.walletAddress)}
                  </a>
                </TableCell>
                <TableCell>
                  <span className="capitalize">{activity.type}</span>
                </TableCell>
                <TableCell className="text-right font-medium text-[#F0B90B]">
                  {activity.reward}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#F0B90B] text-black rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-400">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#F0B90B] text-black rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}