import { CardDemo } from "@/components/CardDemo"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <div className="p-6 w-1/2 bg-background">
      <h1>Hello</h1>
      <div>
        <Button>Pay</Button>
        <Button variant={"default"}>Pay</Button>
        <Button variant={"destructive"}>Edit</Button>
        <Button variant={"ghost"}>Edit</Button>
        <Button variant={"link"}>Edit</Button>
        <Button variant={"outline"}>Edit</Button>
        <Button variant={"secondary"}>Edit</Button>
        <Button>Pay</Button>
        <Button>Create Codespace</Button>
      </div>
      <br />
      <CardDemo />
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, facilis! Illum fugiat consequatur ad atque ab amet vitae molestiae debitis porro optio? Alias tempora quidem nostrum necessitatibus odit? Aspernatur, dolores autem aliquid earum atque odit. Veritatis rerum, facere possimus necessitatibus reiciendis corrupti neque quaerat esse dolore totam deserunt inventore nisi?</p>
    </div>
    </>
  );
}
