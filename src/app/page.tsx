import ItemCard from "@/components/profile/item-card";

export default function Home() {
  const items = [
    {
      title: "Notice",
      link: "/notice",
      description: "All the updates in one place",
    },
    {
      title: "Faculty",
      link: "/faculty",
      description: "List of faculty members",
    },
    {
      title: "Students",
      link: "/students",
      description: "List of students",
    },
    {
      title: "Notes",
      link: "/notes",
      description: "Collections of notes",
    },
    {
      title: "Courses",
      link: "/courses",
      description: "Track the courses",
    },
    {
      title: "Department Info AI",
      link: "/ai-info",
      description: "Notices, Results, Faculty",
    },
    {
      title: "Problem Solver AI",
      link: "/ai-solver",
      description: "Solves any physics and math problem",
    },
  ];
  return (
    <main className="flex flex-wrap gap-2 p-2 justify-center cursor-pointer">
      {items.map((item) => (
        <ItemCard item={item} key={item.title} />
      ))}
    </main>
  );
}
