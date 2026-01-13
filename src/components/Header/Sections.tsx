import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Stack from "./Stack";
import { IconFoldersFilled, IconLibraryFilled } from "@tabler/icons-react";
import Projects from "./Projects";
import Education from "./Education";

export function Sections() {
  return (
    <div className="flex w-full  flex-col gap-6 flex-2">
      <Tabs defaultValue="stack">
        <TabsList>
          <TabsTrigger value="stack">Stack</TabsTrigger>
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
