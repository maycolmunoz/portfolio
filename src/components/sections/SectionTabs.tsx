import {
  IconFoldersFilled,
  IconLibraryFilled,
  IconStack2Filled,
} from "@tabler/icons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./Education";
import Projects from "./Projects";
import Stack from "./Stack";

export function SectionTabs() {
  return (
    <div className="flex w-full flex-2 flex-col gap-6">
      <Tabs defaultValue="stack">
        <TabsList>
          <TabsTrigger value="stack">
            <IconStack2Filled />
            Stack
          </TabsTrigger>
          <TabsTrigger value="projects">
            <IconFoldersFilled />
            Projects
          </TabsTrigger>
          <TabsTrigger value="education">
            <IconLibraryFilled />
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="stack">
          <Stack />
        </TabsContent>
        <TabsContent value="projects">
          <Projects />
        </TabsContent>
        <TabsContent value="education">
          <Education />
        </TabsContent>
      </Tabs>
    </div>
  );
}
