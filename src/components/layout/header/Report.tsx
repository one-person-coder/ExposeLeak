"use client";

import React, { useState } from "react";
import Button from "../../ui/Button";
import { Bug, Send, X } from "lucide-react";
import Separator from "../../ui/Separator";
import FeatureHeader from "@/components/common/FeatureHeader";
import { FormFields, InputField } from "@/components/common/FormFields";
import DialogTriggerWrapper from "@/components/common/DialogTriggerWrapper";

function Report() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDialog = (): void => setIsOpen(!isOpen);

  return (
    <div>
      <DialogTriggerWrapper
        icon={<Bug size={22} />}
        label="Report"
        className="!bg-danger hover:!bg-danger-hover"
      >
        <div>
          <FeatureHeader
            svg={<Bug size={26} />}
            heading="Report Bug"
            subHeading="Report a bug or issue with the website"
          />
          <Separator />
          <ReportContent toggleDialog={toggleDialog} />
        </div>
      </DialogTriggerWrapper>
    </div>
  );
}

const ReportContent = ({ toggleDialog }: { toggleDialog: () => void }) => {
  const inputFields: InputField[] = [
    {
      type: "select",
      name: "bugType",
      label: "Choose Type",
      options: [
        {
          label: "General",
          value: "general",
        },
        {
          label: "Video Player",
          value: "player",
        },
        {
          label: "Search",
          value: "search",
        },
        {
          label: "Mobile",
          value: "mobile",
        },
        {
          label: "Responsive",
          value: "responsive",
        },
      ],
    },
    {
      type: "textarea",
      name: "bugDescription",
      label: "Description",
      placeholder: "Describe the issue clearly",
    },
  ];

  return (
    <div className="sm-box">
      <form className="space-y-6">
        <FormFields fields={inputFields} />

        <div className="flex flex-wrap gap-2 sm:gap-4">
          <Button
            onClick={toggleDialog}
            className="flex-grow !bg-danger hover:!bg-danger-hover !rounded-lg flex justify-center items-center gap-2"
          >
            <X strokeWidth={2.5} />
            Cancel
          </Button>
          <Button className="flex-grow !rounded-lg flex justify-center items-center gap-2">
            <Send />
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Report;
