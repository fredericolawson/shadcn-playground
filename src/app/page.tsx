"use client";

import { useState } from "react";
import { FormComponentsDemo } from "@/components/demos/form-components-demo";
import { DataDisplayDemo } from "@/components/demos/data-display-demo";
import { NavigationDemo } from "@/components/demos/navigation-demo";
import { OverlayDemo } from "@/components/demos/overlay-demo";
import { FeedbackDemo } from "@/components/demos/feedback-demo";
import { PageHeader } from "@/components/demos/page-header";
import { cn } from "@/lib/utils";

export default function Home() {
  const [activeSection, setActiveSection] = useState("forms");

  const sections = [
    { id: "forms", label: "Form Components", component: FormComponentsDemo },
    { id: "data", label: "Data Display", component: DataDisplayDemo },
    { id: "navigation", label: "Navigation", component: NavigationDemo },
    { id: "overlays", label: "Overlays", component: OverlayDemo },
    { id: "feedback", label: "Feedback", component: FeedbackDemo },
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || FormComponentsDemo;

  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-wrap gap-2 mb-8 border-b pb-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="max-w-6xl mx-auto">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}
