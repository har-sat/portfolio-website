import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <>
      <h1> Projects Page</h1>
      <ProjectCard
        href="https://github.com/har-sat/portfolio-website/blob/main/app/about/page.tsx"
        title="Portfolio Website"
        description="A website showcasing my work"
        techStack={[{image: ".next/static/media/Logo.a0f790d0.svg", name: "NextJS"}]}
      />
    </>
  );
}
