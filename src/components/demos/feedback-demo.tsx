"use client";

import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Terminal, AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export function FeedbackDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Feedback Components</h2>
        <p className="text-muted-foreground mb-6">
          Components for user feedback, loading states, and status information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>Status messages and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>

            <Alert className="border-green-200 bg-green-50 text-green-800">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your profile has been updated successfully.
              </AlertDescription>
            </Alert>

            <Alert className="border-blue-200 bg-blue-50 text-blue-800">
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This feature is currently in beta. Please report any issues.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                You are approaching your usage limit. Consider upgrading your plan.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loading Skeletons</CardTitle>
            <CardDescription>Placeholders for loading content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Button onClick={simulateLoading} disabled={isLoading}>
                {isLoading ? "Loading..." : "Simulate Loading"}
              </Button>
            </div>

            {isLoading ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="h-[125px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                    JD
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <div className="h-[125px] w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  Loaded Content
                </div>
                <div className="space-y-2">
                  <p className="text-sm">This is the actual content that appears after loading.</p>
                  <p className="text-sm">It replaces the skeleton placeholders.</p>
                  <p className="text-sm">The loading simulation demonstrates the skeleton effect.</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Toast Notifications</CardTitle>
            <CardDescription>Temporary feedback messages (using Sonner)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() =>
                  toast("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }
              >
                Default Toast
              </Button>
              
              <Button
                onClick={() =>
                  toast.success("Profile updated successfully!")
                }
                variant="outline"
              >
                Success Toast
              </Button>
              
              <Button
                onClick={() =>
                  toast.error("Something went wrong", {
                    description: "Please try again later.",
                  })
                }
                variant="outline"
              >
                Error Toast
              </Button>
              
              <Button
                onClick={() =>
                  toast.warning("Are you sure?", {
                    description: "This action cannot be undone.",
                  })
                }
                variant="outline"
              >
                Warning Toast
              </Button>
              
              <Button
                onClick={() =>
                  toast.info("New feature available", {
                    description: "Check out the new dashboard design.",
                  })
                }
                variant="outline"
              >
                Info Toast
              </Button>
              
              <Button
                onClick={() =>
                  toast.loading("Uploading...", {
                    id: "upload-toast",
                  })
                }
                variant="outline"
              >
                Loading Toast
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Collapsible</CardTitle>
            <CardDescription>Expandable and collapsible content</CardDescription>
          </CardHeader>
          <CardContent>
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <span className="sr-only">Toggle</span>
                    {isOpen ? "−" : "+"}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Accordion</CardTitle>
            <CardDescription>Expandable content sections</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern and is fully accessible
                  with proper keyboard navigation and screen reader support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match the other components' aesthetic.
                  You can also customize the styles according to your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                  The animations are smooth and performant using CSS transitions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I use it in production?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! These components are battle-tested and used in production
                  applications. They follow best practices for performance and accessibility.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}