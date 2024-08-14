import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function Home() {
  return (
   <>
   < div className ="position shadow-2xl bg-gray-900 bg-opacity-70  w-96 h-96 border-none rounded-2xl  " >
    <h1  >
      login here
    </h1>
    <div className=" shadin grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
    <Button>Click me</Button>
   



   </div>
   </>
  );
}
