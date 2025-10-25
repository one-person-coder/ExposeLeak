"use client";

import React, { useState } from "react";
import Label from "../ui/Label";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Input from "../ui/Input";
import { Eye, EyeOff } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

type InputType = "text" | "password" | "email" | "textarea" | "select";

export type InputField = {
  type: InputType;
  name: string;
  label: string;
  options?: Option[];
  placeholder?: string;
};

interface FormFieldsProps {
  fields: InputField[];
}

export function FormFields(props: FormFieldsProps) {
  const { fields } = props;
  const [visiblePasswords, setVisiblePasswords] = useState<
    Record<string, boolean>
  >({});

  const toggleVisibility = (name: string) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const renderField = (field: InputField) => {
    switch (field.type) {
      case "text":
      case "email":
        return (
          <Input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
          />
        );
      case "password":
        return (
          <div className="relative">
            <Input
              type={visiblePasswords[field.name] ? "text" : "password"}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
            />
            <button
              type="button"
              onClick={() => toggleVisibility(field.name)}
              className="bg-base cursor-pointer absolute rounded-r-lg right-0.5 top-1/2 -translate-y-1/2 text-sm py-2.5 px-3.5"
            >
              {visiblePasswords[field.name] ? (
                <Eye
                  size={20}
                  className="!stroke-text-secondary hover:!stroke-white"
                />
              ) : (
                <EyeOff
                  size={20}
                  className="!stroke-text-secondary hover:!stroke-white"
                />
              )}
            </button>
          </div>
        );
      case "textarea":
        return (
          <Textarea
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            className="min-h-36"
          />
        );
      case "select":
        return (
          <Select id={field.name} name={field.name}>
            {field.options?.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-1">
          <Label htmlFor={field.name} className="font-semibold">
            {field.label}
          </Label>
          {renderField(field)}
        </div>
      ))}
    </div>
  );
}
