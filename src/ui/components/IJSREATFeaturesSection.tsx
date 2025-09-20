// components/IJSREATFeaturesSection.tsx

import { CheckCircle } from 'lucide-react'; // or use your own SVGs
import Title2h2 from '../other/Title2h2';

const features = [
  "Peer-reviewed refereed journal recognized as one of the top 10 journals in computer science",
  "Simple, fast, and transparent paper publication process",
  "Rapid/fast track publication dedicated to author convenience",
  "Strict plagiarism policy ensuring research integrity",
  "High impact factor with a reputed editorial board",
  "Compliance with COPE guidelines and Creative Commons licensing",
  "Online submission with 24/7 access"
];


export default function IJSREATFeaturesSection() {
  return (
    <section className="bg-white pt-4 px-6 lg:px-16">

      {/* Features + Illustration */}
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Features List */}
        <div>
          {/* <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">INDJCST Features</h2> */}
          <Title2h2 className='mb-4'>INDJCST Features</Title2h2>
          <ul className="space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700 text-base 2xl:text-base">
                <CheckCircle className="text-primary w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="/feature/features2.webp" // Ensure this is correctly placed under public/assets/illustrations/
            alt="Team Illustration"
            className="w-full max-w-md xl:max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
