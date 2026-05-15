/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Select } from "@/components/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Loader2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import ProductPagination from "@/components/pagination";
import PaymentTable from "./paymentTable";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useDebounce } from "@/components/debouceSearch";
import { useUpdateQuery } from "@/components/filter";

const PAYMENT_STATUS = [
  { value: "success", label: "Success" },
  { value: "pending", label: "Pending" },
  { value: "failed", label: "Failed" },
];

interface Props {
  rows: any[];
  total: number;
  currentPage: number;
  pageSize: number;
  paymentStatus: string;
}

const PaymentClient = ({
  rows,
  total,
  currentPage,
  pageSize,
  paymentStatus,
}: Props) => {
  const [isPending, startTransition] = useTransition();
  const updateQuery = useUpdateQuery();
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>();
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 800);

  useEffect(() => {
    startTransition(() => {
      updateQuery("payment_status", selectedStatus);
    });
  }, [selectedStatus]);

  useEffect(() => {
    startTransition(() => {
      updateQuery("search", debouncedSearch);
    });
  }, [debouncedSearch]);

  useEffect(() => {
    setSelectedStatus(paymentStatus || undefined);
  }, [paymentStatus]);

  return (
    <div className="w-full p-1">
      <Card>
        <CardHeader>
          <CardTitle>Purchase payments</CardTitle>
          <CardDescription>
            Payments recorded when customers complete checkout (linked to orders).
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="w-full max-w-xl">
              <InputGroup className="flex items-center bg-white rounded-full py-2 shadow-none">
                <InputGroupAddon>
                  <Search className="text-gray-500" />
                </InputGroupAddon>
                <InputGroupInput
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  type="text"
                  placeholder="Search by order ID, email, name, or gateway IDs"
                  className="bg-transparent focus:outline-none w-full sm:w-56 sm:focus:w-72 transition-all duration-200"
                />
              </InputGroup>
            </div>

            <Select
              placeholder="Payment status"
              label="Payment status"
              selectItems={PAYMENT_STATUS}
              value={selectedStatus}
              onValueChange={setSelectedStatus}
            />
          </div>

          <div className="relative overflow-x-auto">
            {isPending && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-[1px]">
                <Loader2 className="animate-spin w-6 h-6 text-primary" />
              </div>
            )}
            <PaymentTable page={currentPage} rows={rows} pageSize={pageSize} />
          </div>
          <ProductPagination currentPage={currentPage} totalPages={total} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentClient;
