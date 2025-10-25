import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheckIcon } from "lucide-react";

function RegisterForm() {
  return (
    <Card className="w-full shadow-none border-none py-3">
      <CardContent className="grid gap-6 p-0">
        <div className="grid gap-1">
          <Label htmlFor="fullName" className="text-[1rem]">
            Full Name
          </Label>
          <Input className="input-style" id="fullName" placeholder="Enter Full Name" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="username" className="text-[1rem]">
            Username
          </Label>
          <Input className="input-style" id="username" placeholder="Enter Username" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="password" className="text-[1rem]">
            Password
          </Label>
          <Input className="input-style" id="password" placeholder="Enter Password" />
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Button size={"lg"} className="text-lg h-11.5 rounded-full w-full">
          <ShieldCheckIcon className="!w-auto !h-6" />
          <span>Get Started</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RegisterForm;
