import { Card, CardContent, CardFooter } from "@/components/ui/card";
import FooterHeader from "./FooterHeader";
import { Separator } from "../ui/separator";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="">
      <Card className="rounded-none shadow-none gap-4 border-none px-0">
        <CardContent className="app-container flex flex-wrap lg:flex-nowrap gap-5 justify-between items-center app-padding">
          <FooterHeader />
        </CardContent>
        <Separator />
        <CardFooter>
          <FooterBottom />
        </CardFooter>
      </Card>
    </footer>
  );
}

export default Footer;
