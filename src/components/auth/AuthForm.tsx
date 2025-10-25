import { Lock, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { AuthType } from "@/types/global";

function AuthForm({ mode }: { mode: AuthType }) {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue={mode} className="flex justify-center items-center">
        <TabsList className="rounded-full p-1.5 h-14 sm:w-[360px] bg-background/80 dark:bg-background">
          <TabsTrigger
            value="login"
            className="bg-transparent rounded-full h-full data-[state=active]:!bg-primary dark:text-white data-[state=active]:text-white text-[1rem] items-center justify-center"
          >
            <Lock className="!w-5 !h-5" />
            <span>Login</span>
          </TabsTrigger>
          <TabsTrigger
            value="register"
            className="bg-transparent rounded-full h-full data-[state=active]:!bg-primary dark:text-white data-[state=active]:text-white text-[1rem] items-center justify-center"
          >
            <User className="!w-5 !h-5" />
            <span>Register</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="w-full">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register" className="w-full">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AuthForm;
