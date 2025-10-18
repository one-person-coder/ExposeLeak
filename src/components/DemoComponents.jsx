// DemoComponentsShadcn.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

function DemoComponentsShadcn() {
  return (
    <div className="min-h-screen p-8 space-y-10">
      {/* Typography */}
      <section>
        <h2 className="font-bold mb-4">🔹 Typography</h2>
        <h1 className="font-bold mb-2">Heading 1</h1>
        <h2 className="font-semibold mb-2">Heading 2</h2>
        <p className="text-base mb-2">
          Ye example shadcn components ke sath styling ko dikhata hai — Tailwind classes aur dark: variants dono chal
          rahe hain.
        </p>
        <a href="#" className=" underline">
          Link Example
        </a>
      </section>

      {/* Buttons */}
      <section>
        <h2 className=" font-bold mb-4">🔹 Buttons</h2>
        <div className="flex gap-3">
          <Button>Primary</Button>
          <Button variant="secondary" className="border">
            Secondary
          </Button>
          <Button variant="outline" className="bg-card">
            Outline
          </Button>
        </div>
      </section>

      {/* Card */}
      <section>
        <h2 className=" font-bold mb-4">🔹 Card</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Shadcn card ka example — inside ka content tailwind dark ke sath adjust hota hai.
            </p>
            <Button size="sm">Action</Button>
          </CardContent>
          <CardFooter />
        </Card>
      </section>

      {/* Form Inputs */}
      <section>
        <h2 className=" font-bold mb-4">🔹 Form Inputs</h2>
        <div className="space-y-3 max-w-sm">
          <Input placeholder="Text Input" className="bg-card" />
          <Select>
            <SelectTrigger className="w-full bg-card">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <Textarea placeholder="Textarea" className="bg-card" />
          <label className="flex items-center space-x-2">
            <Checkbox className="bg-card" />
            <span>Remember me</span>
          </label>
        </div>
      </section>

      {/* Alerts / Badges */}
      <section>
        <h2 className=" font-bold mb-4">🔹 Alerts / Badges</h2>
        <div className="space-y-3 max-w-md">
          <Alert>
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Operation completed successfully.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>There was a problem.</AlertDescription>
          </Alert>
        </div>

        <div className="flex gap-2 mt-4">
          <Badge>Info</Badge>
          <Badge variant="outline" className="bg-chart-2 text-card">
            Success
          </Badge>
        </div>
      </section>

      {/* Layout examples */}
      <section>
        <h2 className=" font-bold mb-4">🔹 Flex / Grid Layouts</h2>
        <div className="flex gap-4">
          <div className="flex-1 p-4 rounded-md">Flex 1</div>
          <div className="flex-1 p-4 rounded-md">Flex 2</div>
          <div className="flex-1 p-4 rounded-md">Flex 3</div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-4 rounded-md">Grid 1</div>
          <div className="p-4 rounded-md">Grid 2</div>
          <div className="p-4 rounded-md">Grid 3</div>
        </div>
      </section>
    </div>
  );
}

export default DemoComponentsShadcn;
