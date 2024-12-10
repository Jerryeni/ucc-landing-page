"use client";

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
  return (
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
          {activities.map((activity) => (
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
  );
}