import React from "react";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import CommonLayout from "../../components/layout/CommonLayout";

const CseJournalForComputerScienceResearchIndjcst: React.FC = () => {
  return (
    <MetaDataWrapper
      titleDynamic="Journal for Computer Science Research | Publish CS Papers"
      desciptionDynamic="Submit your papers to a journal for computer science research. Indexed, peer-reviewed, and widely recognized in the academic community."
    >
      <CommonLayout>
        {/* About Section */}
        <section className="py-5">
          <h1 className="text-3xl font-bold mb-6">
            🟩 Trusted Journal for Computer Science Research
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            The Indian Journal of Computer Science and Technology (INDJCST) is a
            leading CSE journal and a renowned journal for computer science
            research. Published three times a year, INDJCST provides an
            open-access, peer-reviewed platform for academicians, educators,
            researchers, engineers, and industry professionals to share
            innovative research across all domains of Computer Science and
            emerging technologies.
          </p>
          <p className="mb-6">
            Adhering strictly to UGC-CARE guidelines, INDJCST ensures every
            manuscript undergoes a thorough peer-review process, maintaining
            credibility, integrity, and scholarly excellence. This makes it a
            preferred journal for computer science scholars and professionals
            globally.
          </p>

          <h2 className="text-2xl font-semibold mb-4">🔹 Scope of the Journal</h2>
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
            We encourage interdisciplinary research and submissions demonstrating
            practical applications, making INDJCST an essential journal for
            computer science academics.
          </p>
        </section>

        {/* Why Choose Section */}
        <section className="py-10 px-5 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">🟨 Why Choose INDJCST?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>⚡ Rapid Peer Review – Decisions within 3 days.</li>
            <li>
              🌐 Open Access – Research reaches global readers, policymakers, and
              industry leaders instantly.
            </li>
            <li>
              ✅ Efficient Process – Streamlined workflow saves time from
              submission to publication.
            </li>
            <li>
              🔒 Plagiarism Protection – Ensures academic integrity via advanced
              screening systems.
            </li>
            <li>
              📜 COPE Compliance – Adheres to ethical standards in academic
              publishing.
            </li>
            <li>
              🌟 Global Impact – Research that influences technology, innovation,
              and policy-making.
            </li>
          </ul>
        </section>

        {/* Indexing Section */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold mb-4">🟧 Indexing & Abstracting</h2>
          <p className="mb-4">
            INDJCST is indexed in leading platforms, ensuring maximum visibility:
          </p>
          <p>
            Google Scholar • Scribd • ISSUU • Elsevier Mendeley • EuroPub • DRJI •
            Academic Keys • Edocr • I2OR • PDFSR • ResearchBIB • SSRN • WorldCAT •
            Exlibris (Clarivate) • Thomson Reuters Research ID • Semantic Scholar •
            Dimensions • PlumX
          </p>
          <p className="mt-3">
            Being part of the Google Scholar computer science journals list,
            INDJCST is recognized as a top journal for computer science research.
          </p>
        </section>

        {/* Publication Process */}
        <section className="py-10 px-5 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟥 Streamlined Publication Process
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>📩 Submit Online – 24/7 access via our editorial system</li>
            <li>⏳ Initial Response – Within 12 hours</li>
            <li>👨🏫 Expert Peer Review – Completed in 2 days</li>
            <li>📢 Decision Notification – Acceptance/rejection within 3 days</li>
            <li>
              📜 Publication & Certificate – Instant PDF access and digital
              certificate
            </li>
          </ul>
        </section>

        {/* Charges */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold mb-4">
            🟦 Article Processing Charges – Affordable CSE Journal
          </h2>
          <p className="mb-4">
            Open-access publishing with minimal fees:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Indian Authors – Without DOI: ₹1200 + 18% GST</li>
            <li>Indian Authors – With DOI: ₹1400 + 18% GST</li>
            <li>International Authors – With DOI: $60 USD</li>
          </ul>
        </section>

        {/* Editorial System */}
        <section className="py-10 px-5 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟩 Advanced Editorial Management System
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Author Dashboard – Personalized submission history and status updates
            </li>
            <li>Real-time Tracking – Monitor every stage of your paper</li>
            <li>
              Automated Documents – Instant acceptance letters & copyright forms
            </li>
            <li>
              Easy Downloads – One-click access to certificates and published
              papers
            </li>
          </ul>
        </section>
      </CommonLayout>
    </MetaDataWrapper>
  );
};

export default CseJournalForComputerScienceResearchIndjcst;
