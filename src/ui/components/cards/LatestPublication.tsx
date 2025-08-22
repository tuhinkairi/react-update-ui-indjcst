import { Link } from "react-router-dom";

const publications = [
  {
    title: 'Unmasking the Android Scam in Apps: Tactics, Ecosystem and Threats',
    id: '966',
    ink: "/archives/paper-details?paperid=966&papertitle=Unmasking-the-Android-Scam-in-Apps%3A-Tactics%2C-Ecosystem-and-Threats"
  },
  {
    title: 'Crystal shield Email Attachment Protection System',
    id: '967',
    ink: "/archives/paper-details?paperid=967&papertitle=Crystal-shield-Email-Attachment-Protection-System"
  },
  {
    title: 'Investigation and Optimization of Perovskite Solar Cells with an Approach to Reducing Optical Losses and Enhancing Stability and Efficiency',
    id: '968',
    ink: "/archives/paper-details?paperid=968&papertitle=Investigation-and-Optimization-of-Perovskite-Solar-Cells-with-an-Approach-to-Reducing-Optical-Losses-and-Enhancing-Stability-and-Efficiency"
  },
];

export default function LatestPublication() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6 space-y-6">
      <h2 className="text-center text-lg xl:text-xl capitalize font-semibold text-dark">Latest Publication</h2>

      {publications.map((pub, index) => (
        <div key={index} className="space-y-2">
          <Link aria-label="link" to={pub.ink}>
            <h3 className="text-sm 2xl:text-base text-gray-800">{pub.title}</h3>
            <h3 className="text-sm 2xl:text-base font-medium text-primary">Paper ID : {pub.id}</h3>
            {index !== publications.length - 1 && (
              <hr className="border-gray-300 mt-2" />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
