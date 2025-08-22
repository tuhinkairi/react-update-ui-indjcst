import { Eye, FileText, Lock } from "lucide-react"; // Swap with your icons or use image paths
import Title2h2 from "../other/Title2h2";

const editorialData = [
  {
    title: "Real-time Tracking",
    icon: <Eye className="text-primary" size={26} />,
    desc: "Monitor your submission's progress through every stage of the review process.",
    bullets: [
      "Article status updates",
      "Review progress tracking",
      "Task completion alerts",
    ],
  },
  {
    title: "Automated Documents",
    icon: <FileText className="text-primary" size={26} />,
    desc: "Instant generation of all necessary publication documents.",
    bullets: [
      "Automated acceptance letters",
      "Simplified copyright forms",
      "Instant publication certificates",
    ],
  },
  {
    title: "Easy Access",
    icon: <Lock className="text-primary" size={26} />,
    desc: "All your publication materials available in one place.",
    bullets: [
      "Published PDF downloads",
      "Certificate access",
      "Reviewer reports",
    ],
  },
];

export default function EditorialManagement() {
  return (
    <section className="pt-8  px-6 lg:px-16 ">
      <div className=" mb-10">
        {/* <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Advanced Editorial Management
        </h2> */}
        <Title2h2>
          Advanced Editorial Management
        </Title2h2>
        <p className="text-gray-600 mt-2">
          Our state-of-the-art platform provides complete transparency and control throughout the publication process
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {editorialData.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col text-left hover:bg-[#5C6BC01A] transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg  2xl:text-lg text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm 2xl:text-base mb-3">{item.desc}</p>
            <ul className="list-disc pl-5 text-gray-600 text-sm 2xl:text-base space-y-1">
              {item.bullets.map((bullet, j) => (
                <li key={j} className="leading-snug">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
