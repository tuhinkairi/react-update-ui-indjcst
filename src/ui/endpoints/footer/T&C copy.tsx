import { Link } from "react-router-dom";
import CommonLayout from "../../components/layout/CommonLayout";
import Title from "../../other/Title";

export default function TermsAndConditions() {
    return (

        <CommonLayout className='px-3 sm:px-6 bg-white text-base leading-relaxed'>
            <article className="xl:text-base 2xl:text-lg space-y-6 px-0 bg-white">

                <Title>Terms and Conditions</Title>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        1. Acceptance of Terms
                    </h2>
                    <p>
                        By submitting a manuscript, registering as a reviewer, or accessing content from the International
                        Journal of Scientific Research in Engineering & Technology (INDJCST), you agree to comply with
                        these Terms and Conditions. If you do not agree, please refrain from using our services.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        2. Submission & Publication Policy
                    </h2>
                    <div>

                        <h3>

                            a. Author Responsibilities
                        </h3>
                        <ul>
                            <li>Submissions must be original, unpublished, and not under consideration elsewhere.</li>
                            <li>Authors must ensure ethical compliance (no plagiarism, data fabrication, or falsification).</li>
                            <li>Proper attribution to prior work must be provided.</li>
                            <li>All co-authors must consent to submission.</li>
                        </ul>

                    </div>
                    <div>

                        <h3>
                            b. Peer Review Process</h3>
                        <p>
                            INDJCST follows a Single peer review process.
                            Reviewers must maintain confidentiality and declare conflicts of interest.
                            The editorial board reserves the right to accept, reject, or request revisions without explanation.
                        </p>
                    </div>
                    <div>

                        <h3>c. Open Access &amp; Copyright</h3>
                        <p>
                            INDJCST is an open-access journal; published articles are freely available under a Creative
                            <br />
                            Commons license (CC BY-NC-ND 4.0) unless otherwise stated.
                            <br />
                            Authors retain copyright but grant INDJCST the right to publish, distribute, and archive the work.
                            <br />
                            Commercial reuse requires permission.
                        </p>
                    </div>
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        3. Fees &Payments
                    </h2>
                    <p>
                        Article Processing Charges (APCs) may apply for accepted manuscripts (waivers available in special
                        cases). <br />

                        Fees are non-refundable after peer review initiation. <br />
                        Payment must be made via approved methods (credit card, bank transfer, etc.).                    </p>
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        4. User Conduct &Prohibited Activities
                    </h2>
                    <div>
                        <h3>We rely on the following legal bases under GDPR:</h3>
                        <p className="">
                            Users must not:
                            <br />Submit fraudulent, defamatory, or illegal content.
                            <br />Misrepresent affiliations or credentials.
                            <br />Attempt to manipulate the review process.
                            Use automated tools to scrape or download content excessively.
                        </p>
                    </div>
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        5. Privacy & Data Protection
                    </h2>
                    <div>
                        <p className="list-disc list-inside">
                            INDJCST follows its Privacy Policy (available on the website) in compliance with GDPR and other
                            regulations. <br />
                            Personal data (author, reviewer, editor details) is used only for journal operations.
                        </p>
                    </div>
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        6. Disclaimer of Warranties
                    </h2>
                    <p>
                        INDJCST provides content  “as is” without warranties of accuracy or completeness. <br />
                        The journal is not liable for any errors, omissions, or consequences arising from published work.
                    </p>
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        7. Limitation of Liability
                    </h2>
                    <div>
                        <h2>
                            INDJCST, its editors, and affiliates are not liable for:
                        </h2>
                        <h4>
                            Loss of data, profits, or reputation due to publication.
                        </h4>
                        <h4>
                            Disputes among authors, reviewers, or third parties.
                        </h4>
                    </div>
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        8. Termination of Access
                    </h2>
                    <h3>
                        INDJCST reserves the right to suspend or terminate access for violations of these terms.
                    </h3>
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        9. Governing Law & Dispute Resolution
                    </h2>
                    <h3>These terms are governed by the laws of Ariyalur-Tamilnadu.</h3>
                    <h3>Disputes shall be resolved through arbitration before legal action.</h3>
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        10. Changes to Terms
                    </h2>
                    <h3>
                        INDJCST may update these terms periodically. Continued use implies acceptance of revisions.
                    </h3>
                </div>

                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                        11. Contact Information
                    </h2>
                    <ul>
                        <li>
                            For inquiries, contact:
                        </li>
                        <li>
                             The Indian Journal of Computer Science and Technology (INDJCST)
                        </li>
                        <li>
                            Email: <a aria-label="link" href="mailto:editorinchief@indjcst.com" className="text-accent-blue hover:underline">editorinchief@indjcst.com</a>
                        </li>
                        <li>
                            Website: <Link aria-label="link" to="https://www.indjcst.com" className="text-accent-blue hover:underline">https://www.indjcst.com/</Link>
                        </li>
                        <li>
                            Publisher Website: <Link aria-label="link" to="https://fdrpjournals.org" className="text-accent-blue hover:underline">https://fdrpjournals.org/</Link>
                        </li>
                    </ul>
                </div>
            </article>
        </CommonLayout>
    )
}
