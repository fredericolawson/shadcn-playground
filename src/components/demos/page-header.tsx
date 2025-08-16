import { Badge } from "@/components/ui/badge";

export function PageHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">shadcn/ui Components</h1>
            <Badge variant="secondary">Demo</Badge>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Explore our comprehensive collection of accessible, customizable components built with Radix UI and Tailwind CSS.
          </p>
        </div>
      </div>
    </header>
  );
}