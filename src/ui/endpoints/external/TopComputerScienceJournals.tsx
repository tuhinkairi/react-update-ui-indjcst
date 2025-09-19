import React from "react";
import CommonLayout from "../../components/layout/CommonLayout";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";

const TopComputerScienceJournals: React.FC = () => {
    return (
        <MetaDataWrapper titleDynamic="CSE Journal | Top Computer Science Journals – INDJCST"
            desciptionDynamic="INDJCST is a leading CSE journal listed among top computer science journals. Publish research in AI, IoT, Data Science, Cybersecurity, and emerging technologies with rapid peer review, open access, global indexing, and minimal publication fees.">
            <CommonLayout>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Indian Journal of Computer Science and Technology (INDJCST)
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Recognized among the top computer science journals for publishing high-quality research across Artificial Intelligence, IoT, Data Science, Cybersecurity, and emerging technologies.
                    </p>
                </section>

                {/* About Section */}
                <section className="py-12 px-6 max-w-5xl mx-auto text-gray-800">
                    <h2 className="text-2xl font-bold mb-4">📖 About INDJCST</h2>
                    <p className="mb-4">
                        Published three times a year, INDJCST provides an open-access, peer-reviewed platform for academicians, educators, researchers, engineers, and industry professionals to showcase innovative work. Adhering to UGC-CARE guidelines, INDJCST follows a rigorous peer-review process to maintain the highest standards of academic excellence and credibility.
                    </p>
                </section>

                {/* Scope Section */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">🔹 Scope of the Journal</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-gray-700">
                        {[
                            "Artificial Intelligence & Machine Learning",
                            "Data Science & Big Data Analytics",
                            "Internet of Things (IoT)",
                            "Cloud & Edge Computing",
                            "Cybersecurity & Cryptography",
                            "Software Engineering & Programming Languages",
                            "Computer Networks & Network Security",
                            "Image Processing & Computer Vision",
                            "Natural Language Processing",
                            "Human-Computer Interaction",
                            "Web Technologies & Mobile Computing",
                            "Blockchain Technology",
                            "Robotics & Automation",
                            "Embedded Systems",
                            "Computational Intelligence",
                            "Bioinformatics & Health Informatics",
                            "Information Systems & Database Management"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-12 px-6 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">🟨 Why Choose INDJCST?</h2>
                    <ul className="grid md:grid-cols-2 gap-6 text-gray-800">
                        <li>⚡ <b>Rapid Peer Review</b> – Decisions within 3 days.</li>
                        <li>🌐 <b>Open Access Policy</b> – Immediate visibility worldwide.</li>
                        <li>✅ <b>Efficient Process</b> – Streamlined workflow ensures timely responses.</li>
                        <li>🔒 <b>Plagiarism Protection</b> – Advanced academic integrity checks.</li>
                        <li>📜 <b>COPE Compliance</b> – Following global publication ethics.</li>
                        <li>🌟 <b>Research Impact</b> – Contributing to global innovation.</li>
                    </ul>
                </section>

                {/* Indexing Section */}
                <section className="bg-gray-100 py-12 px-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">🟧 Indexing & Abstracting</h2>
                    <p className="text-center max-w-4xl mx-auto text-gray-700 mb-6">
                        INDJCST is indexed in leading scholarly databases, enhancing reach and credibility.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-center text-gray-800 max-w-5xl mx-auto">
                        {[
                            "Google Scholar",
                            "Elsevier Mendeley",
                            "EuroPub",
                            "DRJI",
                            "Academic Keys",
                            "ResearchBIB",
                            "SSRN",
                            "WorldCAT",
                            "Semantic Scholar",
                            "Dimensions",
                            "PlumX",
                            "Thomson Reuters Research ID"
                        ].map((db, idx) => (
                            <div key={idx} className="bg-white p-3 rounded-lg shadow">
                                {db}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Publication Process */}
                <section className="py-12 px-6 max-w-5xl mx-auto text-gray-800">
                    <h2 className="text-2xl font-bold mb-6 text-center">🟥 Streamlined Publication Process</h2>
                    <ol className="space-y-3">
                        <li>📩 <b>Submit Online</b> – 24/7 via editorial system.</li>
                        <li>⏳ <b>Initial Response</b> – Within 12 hours.</li>
                        <li>👨🏫 <b>Peer Review</b> – Completed in 2 days.</li>
                        <li>📢 <b>Decision Notification</b> – Within 3 days.</li>
                        <li>📜 <b>Publication & Certificate</b> – Instant PDF & certificate.</li>
                    </ol>
                </section>

                {/* Fees Section */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">🟦 Article Processing Charges</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-800">
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-bold mb-3">Indian Authors</h3>
                            <p>Without DOI: ₹1200 + 18% GST</p>
                            <p>With DOI: ₹1400 + 18% GST</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-bold mb-3">International Authors</h3>
                            <p>With DOI: $60 USD</p>
                        </div>
                    </div>
                </section>

                {/* Editorial System Section */}
                <section className="py-12 px-6 max-w-5xl mx-auto text-gray-800">
                    <h2 className="text-2xl font-bold mb-6 text-center">🟩 Advanced Editorial Management System</h2>
                    <ul className="grid md:grid-cols-2 gap-6">
                        <li>📊 <b>Author Dashboard</b> – Personalized submission tracking.</li>
                        <li>⏱️ <b>Real-time Tracking</b> – Monitor paper progress.</li>
                        <li>📑 <b>Automated Documents</b> – Instant acceptance letters.</li>
                        <li>⬇️ <b>Easy Downloads</b> – One-click certificates & papers.</li>
                    </ul>
                </section>
            </CommonLayout>
        </MetaDataWrapper>
    );
};

export default TopComputerScienceJournals;
