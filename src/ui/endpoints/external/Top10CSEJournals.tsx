import React from "react";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import CommonLayout from "../../components/layout/CommonLayout";

const Top10CSEJournals: React.FC = () => {
  return (
    <MetaDataWrapper
      titleDynamic="Top 10 Journals in Computer Science | High Impact Research"
      desciptionDynamic="Explore the top 10 journals in computer science. Publish your research in reputed, peer-reviewed, and globally recognized CS journals."
    >
      <CommonLayout>
        <section className="py-5">
          <h1 className="text-3xl font-bold mb-6">
            Indian Journal of Computer Science and Technology (INDJCST)
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            INDJCST is a bi-annual, peer-reviewed, open-access international
            journal dedicated to high-quality research across all domains of
            Computer Science and Technology. Recognized as one of the top 10
            journals in computer science, INDJCST provides a trusted platform
            for academicians, researchers, engineers, and industry professionals
            to share innovative research and practical applications of computing
            technologies.
          </p>
          <p className="mb-6">
            The journal publishes original research, theoretical advancements,
            and technological innovations across a wide range of computer
            science topics, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-8">
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Data Science & Big Data Analytics</li>
            <li>Internet of Things (IoT)</li>
            <li>Cloud & Edge Computing</li>
            <li>Cybersecurity & Cryptography</li>
            <li>Software Engineering & Programming Languages</li>
            <li>Computer Networks & Network Security</li>
            <li>Image Processing & Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Human-Computer Interaction</li>
            <li>Web Technologies & Mobile Computing</li>
            <li>Blockchain Technology</li>
            <li>Robotics & Automation</li>
            <li>Embedded Systems</li>
            <li>Computational Intelligence</li>
            <li>Bioinformatics & Health Informatics</li>
            <li>Information Systems & Database Management</li>
          </ul>
        </section>

        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟨 Why Choose INDJCST Journal?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>⚡ Rapid Peer Review – Decisions delivered within 3 days.</li>
            <li>🌍 Open Access Policy – Immediate online availability.</li>
            <li>✅ Efficient Process – Streamlined workflow from submission to publication.</li>
            <li>🔒 Plagiarism Protection – Rigorous screening for academic integrity.</li>
            <li>📜 COPE Compliance – Adheres to international publishing ethics.</li>
            <li>🌐 Impact Beyond Academia – Research that shapes policy and technology standards.</li>
          </ul>
        </section>

        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">🟧 Indexing & Abstracting</h2>
          <p className="mb-4">
            The journal is indexed in leading databases, ensuring maximum
            visibility on research paper publication sites globally:
          </p>
          <p>
            Google Scholar • Scribd • ISSUU • Elsevier Mendeley • EuroPub • DRJI
            • Academic Keys • Edocr • I2OR • PDFSR • ResearchBIB • SSRN •
            WorldCAT • Exlibris (Clarivate) • Thomson Reuters Research ID •
            Semantic Scholar • Dimensions • PlumX
          </p>
        </section>

        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟥 Streamlined Publication Process
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>📩 Submit Online – 24/7 through the editorial system</li>
            <li>⏳ Initial Response – Acknowledgment within 12 hours</li>
            <li>👨🏫 Expert Review – Completed in 2 days</li>
            <li>📢 Decision Notification – Acceptance or rejection within 3 days</li>
            <li>📜 Publication & Certificate – Instant PDF and digital certificate</li>
          </ul>
        </section>

        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">
            🟦 Article Processing Charges
          </h2>
          <p className="mb-4">
            Open-access ensures research is freely available online. Minimal
            fees apply after manuscript acceptance:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Indian Authors – Without DOI: ₹1200 + 18% GST</li>
            <li>Indian Authors – With DOI: ₹1400 + 18% GST</li>
            <li>International Authors – With DOI: $60 USD</li>
          </ul>
        </section>

        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟩 Advanced Editorial Management System
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Author Dashboard – Submission history and status updates</li>
            <li>Real-time Tracking – Monitor progress at every stage</li>
            <li>Automated Documents – Acceptance letters & copyright forms</li>
            <li>Easy Downloads – Certificates and published papers</li>
          </ul>
        </section>

        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">
            🟦 Why INDJCST is Among the Top 10 Journals in Computer Science
          </h2>
          <p>
            INDJCST is ranked among the top 10 journals in computer science due
            to rapid peer review, extensive indexing, open-access availability,
            and adherence to international standards. Publishing with INDJCST
            ensures maximum visibility, credibility, and impact in the global
            research community.
          </p>
        </section>
      </CommonLayout>
    </MetaDataWrapper>
  );
};

export default Top10CSEJournals;
