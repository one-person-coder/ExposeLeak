"use client";

import Button from "../../ui/Button";
import { Lock, ShieldCheck, User } from "lucide-react";
import Separator from "../../ui/Separator";
import FeatureHeader from "@/components/common/FeatureHeader";
import { InputField, FormFields } from "@/components/common/FormFields";
import DialogTriggerWrapper from "@/components/common/DialogTriggerWrapper";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

function Login() {
  const [activeTab, setActiveTab] = useState<string>("login");
  return (
    <div>
      <DialogTriggerWrapper icon={<User size={22} />} label="Login / Register" className="!bg-base hover:!bg-base/80">
        <div>
          <FeatureHeader
            svg={<User size={26} />}
            heading="Let's Get Started"
            subHeading="Login or create an account to continue."
            className="!bg-secondary"
          />
          <Separator />
          <Tabs>
            <TabList>
              <TabTrigger value="login" activeTab={activeTab} setActiveTab={setActiveTab}>
                <Lock size={20} />
                Login
              </TabTrigger>
              <TabTrigger value="register" activeTab={activeTab} setActiveTab={setActiveTab}>
                <User size={20} />
                Register
              </TabTrigger>
            </TabList>
          </Tabs>
          <LoginRegisterContent activeTab={activeTab} />
        </div>
        <OtherLogin />
      </DialogTriggerWrapper>
    </div>
  );
}

const LoginRegisterContent = ({ activeTab }: { activeTab: string }) => {
  let inputFields: InputField[];

  if (activeTab === "login") {
    inputFields = [
      {
        type: "text",
        name: "username",
        label: "Username",
        placeholder: "Enter username",
      },
      {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Enter Password",
      },
    ];
  } else {
    inputFields = [
      {
        type: "text",
        name: "fullName",
        label: "Full Name",
        placeholder: "Enter Full Name",
      },
      {
        type: "text",
        name: "username",
        label: "Username",
        placeholder: "Enter username",
      },
      {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Enter Password",
      },
    ];
  }

  return (
    <div className="app-container">
      <form className="space-y-6">
        <FormFields fields={inputFields} />

        <div className="flex flex-wrap gap-2 sm:gap-4">
          <Button className="flex-grow py-2 font-heading !rounded-lg flex justify-center items-center gap-2">
            <ShieldCheck />
            Login to continue
          </Button>
        </div>
      </form>
    </div>
  );
};

const OtherLogin = () => {
  return (
    <div>
      <Separator label={"Or continue with"} className="my-2" />
      <div className="app-container mt-4 mx-auto w-fit">
        <GoogleLogin />
      </div>
    </div>
  );
};

const GoogleLogin = () => {
  return (
    <Button className="!rounded-md flex w-54 group !bg-base overflow-hidden items-center h-10 !p-0  hover:!bg-base/80 ">
      <span className="bg-danger/65 h-full content-center px-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5" viewBox="0 0 488 512" fill="white">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      </span>
      <span className="px-3 text-text-primary w-full font-heading !bg-danger group-hover:!bg-danger/85 h-full content-center">
        Login With Google
      </span>
    </Button>
  );
};

interface TabTriggerProps {
  children: ReactNode;
  value: string;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const TabTrigger = (props: TabTriggerProps) => {
  const { children, value, activeTab, setActiveTab } = props;
  const activeClass = `${activeTab === value ? "bg-primary" : "!bg-base"}`;
  return (
    <Button
      onClick={() => setActiveTab(value)}
      className={`!rounded-full font-heading flex justify-center items-center gap-2 w-40 py-2 ${activeClass}`}
    >
      {children}
    </Button>
  );
};

const TabList = ({ children }: { children: ReactNode }) => {
  return <div className="flex justify-center bg-base w-fit mx-auto p-1.5 rounded-full">{children}</div>;
};

const Tabs = ({ children }: { children: ReactNode }) => {
  return <div className="app-container">{children}</div>;
};

export default Login;
