"use client";

import React, { useMemo, useState } from "react";
import { City, State } from "country-state-city";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fieldClass =
  "bg-[#1A1A1A] border-white/10 h-14 rounded-md text-white placeholder:text-white/45 focus-visible:ring-[#FDB813]/40 focus-visible:border-[#FDB813]";

const selectTriggerClass =
  "w-full bg-[#1A1A1A] border-white/10 h-14 rounded-md text-white data-[placeholder]:text-white/45 focus-visible:ring-[#FDB813]/40 focus-visible:border-[#FDB813]";

const selectContentClass =
  "border-white/10 bg-[#111111] text-white shadow-2xl";

const products = [
  "Steel Sink",
  "Granite Sink",
  "Kitchen Faucet",
  "Bathroom Faucet",
  "Hand Sprayer",
  "Food Disposer",
  "Other",
];

const ServiceRequest = () => {
  const [selectedState, setSelectedState] = useState("");

  const indianStates = useMemo(() => State.getStatesOfCountry("IN"), []);
  const cities = useMemo(() => {
    if (!selectedState) return [];
    return City.getCitiesOfState("IN", selectedState);
  }, [selectedState]);

  return (
    <div className="mx-auto max-w-5xl bg-black px-4 py-10 md:px-10">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
          Service Support Request
        </h2>
        <p className="text-sm text-white/55">
          Share the details and our support team will get back to you.
        </p>
      </div>

      <div className="border border-white/10 bg-[#111111] p-6 shadow-2xl md:p-10">
        <form className="space-y-7">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                First Name
              </Label>
              <Input placeholder="Enter First Name" className={fieldClass} />
            </div>
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                Last Name
              </Label>
              <Input placeholder="Enter Last Name" className={fieldClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                Phone Number
              </Label>
              <Input
                placeholder="e.g. +91 0000000000"
                className={fieldClass}
              />
            </div>
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                Email
              </Label>
              <Input
                type="email"
                placeholder="Enter Email"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                Pincode
              </Label>
              <Input placeholder="Enter Pincode" className={fieldClass} />
            </div>
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                State
              </Label>
              <Select
                value={selectedState}
                onValueChange={(value) => setSelectedState(value)}
              >
                <SelectTrigger className={selectTriggerClass}>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent className={selectContentClass}>
                  {indianStates.map((state) => (
                    <SelectItem key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                City
              </Label>
              <Select disabled={!selectedState}>
                <SelectTrigger className={selectTriggerClass}>
                  <SelectValue
                    placeholder={
                      selectedState ? "Select City" : "Select State First"
                    }
                  />
                </SelectTrigger>
                <SelectContent className={selectContentClass}>
                  {cities.map((city) => (
                    <SelectItem key={`${city.name}-${city.latitude}`} value={city.name}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                Address
              </Label>
              <Input placeholder="Enter Address" className={fieldClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                Select Product
              </Label>
              <Select>
                <SelectTrigger className={selectTriggerClass}>
                  <SelectValue placeholder="Select Product" />
                </SelectTrigger>
                <SelectContent className={selectContentClass}>
                  {products.map((product) => (
                    <SelectItem key={product} value={product}>
                      {product}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="ml-1 text-xs font-semibold text-white">
                Model
              </Label>
              <Input placeholder="Enter Model" className={fieldClass} />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="ml-1 text-xs font-semibold text-white">
              Problem Description
            </Label>
            <textarea
              className="min-h-36 w-full rounded-md border border-white/10 bg-[#1A1A1A] p-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#FDB813] focus:ring-1 focus:ring-[#FDB813]/40"
              placeholder="Describe the issue you are having"
            />
          </div>

          {/* <div className="space-y-3">
            <Label className="ml-1 text-xs font-semibold text-white">
              Message
            </Label>
            <Input type="text" className={fieldClass} />
          </div> */}

          <Button className="h-14 w-full rounded-md bg-[#FFB81C] text-base font-bold text-black transition-all duration-300 hover:bg-[#e6a619]">
            Request Service
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequest;
