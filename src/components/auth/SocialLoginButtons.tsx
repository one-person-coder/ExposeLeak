import { Button } from "@/components/ui/button";

function GoogleLoginButton() {
  return (
    <div className="flex justify-center items-center rounded-sm overflow-hidden w-fit">
      <Button
        className="rounded-none bg-destructive/95 hover:bg-destructive dark:bg-destructive/80 dark:hover:bg-destructive/75 !px-3"
        size={"lg"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="!h-5.5 !w-5.5" viewBox="0 0 488 512" fill="currentColor">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
        </svg>
      </Button>
      <Button
        className="rounded-none bg-destructive/80 hover:bg-destructive/85 dark:bg-destructive dark:hover:bg-destructive/90 text-[1rem] px-3"
        size={"lg"}
      >
        Login With Google
      </Button>
    </div>
  );
}

export default GoogleLoginButton;
