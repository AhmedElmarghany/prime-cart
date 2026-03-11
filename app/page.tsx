import { CardDemo } from "@/components/CardDemo"
import Header from "@/components/common/Header";
import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <Header />
    <div className="p-6 w-1/2 bg-background">
      <h1>Hello</h1>
      <Logo />
      <div>
        <Button>Pay</Button>
        <Button variant={"default"}>default</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"link"}>link</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"secondary"}>secondary</Button>
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
