"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const invoices = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
];

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export function DataDisplayDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Data Display Components</h2>
        <p className="text-muted-foreground mb-6">
          Components for displaying data, media, and structured information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Avatars</CardTitle>
            <CardDescription>User profile pictures and initials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8">
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-green-500">Success</Badge>
              <Badge className="bg-yellow-500">Warning</Badge>
              <Badge className="bg-blue-500">Info</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress Bars</CardTitle>
            <CardDescription>Visual progress indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>25%</span>
              </div>
              <Progress value={25} className="w-full" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Loading</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="w-full" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Complete</span>
                <span>100%</span>
              </div>
              <Progress value={100} className="w-full" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aspect Ratio</CardTitle>
            <CardDescription>Responsive image containers</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
              <div className="flex items-center justify-center h-full text-muted-foreground">
                16:9 Aspect Ratio
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Data Table</CardTitle>
            <CardDescription>Structured data presentation</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>
                      <Badge variant={
                        invoice.paymentStatus === "Paid" ? "default" :
                        invoice.paymentStatus === "Pending" ? "secondary" : "destructive"
                      }>
                        {invoice.paymentStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scroll Area</CardTitle>
            <CardDescription>Scrollable content container</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72 w-full rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                  <div key={tag}>
                    <div className="text-sm">{tag}</div>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Card</CardTitle>
            <CardDescription>User information display</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">shadcn</h4>
                <p className="text-sm text-muted-foreground">
                  Creator of shadcn/ui
                </p>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Developer</Badge>
                  <Badge variant="outline">Open Source</Badge>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profile completion</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}