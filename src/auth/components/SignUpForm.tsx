import { useState } from "react";
import { Link } from "react-router";
import { CalendarIcon } from "lucide-react";

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export const SignUpForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col w-180 gap-6">
        <p className="text-4xl font-medium my-8" role="heading">
          Create an account
        </p>

        {/* First-name & Last-name */}
        <div className="flex gap-3">
          <div className="space-y-3 w-full">
            <Label htmlFor="first-name" className="text-gray-700">
              First Name
            </Label>
            <Input
              placeholder="Enter your First Name"
              id="first-name"
              className="h-10"
            />
          </div>
          <div className="space-y-3 w-full">
            <Label htmlFor="last-name" className="text-gray-700">
              Last Name
            </Label>
            <Input
              placeholder="Enter your Last Name"
              id="last-name"
              className="h-10"
            />
          </div>
        </div>

        {/* Email & City */}
        <div className="flex gap-3">
          <div className="space-y-3 w-full">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input placeholder="Enter your Email" id="email" className="h-10" />
          </div>
          <div className="space-y-3 w-full">
            <Label htmlFor="city" className="text-gray-700">
              City
            </Label>
            <Input placeholder="Enter your City" id="city" className="h-10" />
          </div>
        </div>

        {/* State & Address */}
        <div className="flex gap-3">
          <div className="space-y-3 w-full">
            <Label htmlFor="state" className="text-gray-700">
              State
            </Label>
            <Input placeholder="Enter your State" id="state" className="h-10" />
          </div>
          <div className="space-y-3 w-full">
            <Label htmlFor="address" className="text-gray-700">
              Address
            </Label>
            <Input
              placeholder="Enter your Address"
              id="address"
              className="h-10"
            />
          </div>
        </div>

        {/* Age & Gender */}
        <div className="flex gap-3">
          <div className="space-y-3 w-full">
            <Label htmlFor="age" className="text-gray-700">
              Age
            </Label>
            <Input
              placeholder="Enter your Age"
              id="age"
              className="h-10"
              type="number"
            />
          </div>
          <div className="space-y-3 w-full">
            <Label htmlFor="gender" className="text-gray-700">
              Gender
            </Label>
            <Select>
              <SelectTrigger id="gender" className="w-full py-[18.5px]">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Contact Number & Profile Image */}
        <div className="flex gap-3">
          <div className="space-y-3 w-full">
            <Label htmlFor="contact-number" className="text-gray-700">
              Contact Number
            </Label>
            <Input
              placeholder="Enter your Contact Number"
              id="contact-number"
              className="h-10"
              type="number"
            />
          </div>
          <div className="space-y-3 w-full">
            <Label htmlFor="picture" className="text-gray-700">
              Profile Picture
            </Label>
            <Input
              id="picture"
              type="file"
              className="h-10 text-gray-700 cursor-pointer"
            />
          </div>
        </div>

        {/* BirthDate & Password */}
        <div className="flex gap-3">
          <div className="space-y-3 w-full">
            <Label htmlFor="birth-date" className="text-gray-700">
              Birth Date
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  id="birth-date"
                  variant="outline"
                  className="w-full justify-start font-normal cursor-pointer h-10"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Select Your Birth Date
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-3 w-full">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <Input
                placeholder="Enter Password"
                id="password"
                type="password"
                className="h-10 text-gray-700 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="w-1/2 pr-2 space-y-3">
          <Label htmlFor="confirm-password" className="text-gray-700">
            Confirm Password
          </Label>
          <Input
            placeholder="Confirm Password"
            id="confirm-password"
            type="password"
            className="h-10 text-gray-700 cursor-pointer"
          />
        </div>

        <div>
          <Button className="bg-blue-800 text-[16px] w-full py-5 cursor-pointer hover:bg-blue-800/80">
            Create Account
          </Button>
        </div>
        <div>
          <p>
            Already Have An Account?{" "}
            <Link to="/">
              <span className="text-blue-600 ml-1.5">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
