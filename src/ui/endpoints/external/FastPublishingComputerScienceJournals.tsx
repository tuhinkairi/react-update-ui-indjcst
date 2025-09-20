import React from "react";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import CommonLayout from "../../components/layout/CommonLayout";

const FastPublishingComputerScienceJournals: React.FC = () => {
  return (
    <MetaDataWrapper
      titleDynamic="Fast Publishing Computer Science Journals | Quick Indexing"
      desciptionDynamic="Publish in fast publishing computer science journals with rapid peer review, quick indexing, and international recognition."
    >
      <CommonLayout>
        {/* About Section */}
        <section className="py-5">
          <h1 className="text-3xl font-bold mb-6">
            🟩 Fast Publishing Computer Science Journals – INDJCST
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            The Indian Journal of Computer Science and Technology (INDJCST) is a
            leading CSE journal recognized in the category of fast publishing
            computer science journals. Published three times a year, INDJCST
            provides an open-access, peer-reviewed platform for academicians,
            researchers, engineers, and industry professionals to share
            innovative research across all domains of Computer Science and
            Technology.
          </p>
          <p className="mb-6">
            Our journal adheres to UGC-CARE guidelines and follows a rigorous
            peer-review process, ensuring credibility, scholarly excellence, and
            global visibility.
          </p>

          <h2 className="text-2xl font-semibold mb-4">🔹 Topics Covered</h2>
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
          <p>
            We encourage interdisciplinary submissions and research
            demonstrating practical applications of computing technologies.
          </p>
        </section>

        {/* Why Choose Section */}
        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟩 Why Choose INDJCST – Fast Publishing CSE Journal?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              ⚡ Rapid Peer Review – Decisions within 3 days, placing us in the
              top fast publishing computer science journals.
            </li>
            <li>🌍 Open Access – Immediate global reach for your research.</li>
            <li>
              ✅ Efficient Publication Process – Quick responses from submission
              to publication.
            </li>
            <li>
              🔒 Plagiarism Protection – Ensuring academic integrity with
              advanced detection tools.
            </li>
            <li>📜 COPE Compliance – Maintaining the highest publication ethics.</li>
            <li>
              🌐 Global Impact – Research that shapes thinking, policy, and
              technological innovation.
            </li>
          </ul>
        </section>

        {/* Indexing Section */}
        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">🟨 Indexing & Abstracting</h2>
          <p className="mb-4">INDJCST is indexed in leading scholarly databases:</p>
          <p>
            Google Scholar • Scribd • ISSUU • Elsevier Mendeley • EuroPub • DRJI •
            Academic Keys • Edocr • I2OR • PDFSR • ResearchBIB • SSRN • WorldCAT •
            Exlibris (Clarivate) • Thomson Reuters Research ID • Semantic Scholar •
            Dimensions • PlumX
          </p>
        </section>

        {/* Publication Process */}
        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟧 Streamlined Publication Process
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>📩 Submit Online – 24/7 via our editorial system</li>
            <li>⏳ Initial Response – Within 12 hours</li>
            <li>👨🏫 Expert Review – Completed in 2 days</li>
            <li>📢 Decision Notification – Acceptance/rejection within 3 days</li>
            <li>📜 Publication & Certificate – Instant PDF access and digital certificate</li>
          </ul>
        </section>

        {/* Charges */}
        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">🟥 Article Processing Charges</h2>
          <p className="mb-4">
            Open-access journal with minimal fees post-acceptance:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Indian Authors – Without DOI: ₹1200 + 18% GST</li>
            <li>Indian Authors – With DOI: ₹1400 + 18% GST</li>
            <li>International Authors – With DOI: $60 USD</li>
          </ul>
        </section>

        {/* Editorial System */}
        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">🟦 Advanced Editorial Management System</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Author Dashboard – Submission history & status tracking</li>
            <li>Real-time Tracking – Monitor every stage of your paper</li>
            <li>
              Automated Documents – Instant acceptance letters & copyright forms
            </li>
            <li>Easy Downloads – Certificates and published papers with one click</li>
          </ul>
        </section>
      </CommonLayout>
    </MetaDataWrapper>
  );
};

export default FastPublishingComputerScienceJournals;
