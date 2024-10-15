import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <main className="p-24">
      <Button appName="main-site" className="px-5 py-2 rounded-full bg-blue-400 text-white">
        Click Me
      </Button>
    </main>
  );
}
