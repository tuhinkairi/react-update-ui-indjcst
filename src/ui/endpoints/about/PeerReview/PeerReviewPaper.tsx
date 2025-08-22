import { useLocation } from "react-router-dom";
import Title from "../../../other/Title";
import Titleh2 from "../../../other/Titleh2";

export default function PeerReviewPaper() {
  const location = useLocation().pathname.includes("ethics")
  return (
    <section className=" leading-relaxed space-y-6 text-base 2xl:text-lg text-[#333333]">

      {location ? <Titleh2>Peer Review Policy</Titleh2> : <Title>Peer Review Policy</Title>}

      <p>
        <h2 className="mb-2 font-semibold">
          International Journal of  Innovative Research in Engineering (IJIRE) is having
        </h2>
        <strong>ISSN NO:</strong> 2582-8746 (Online), Bi-monthly international journal for publication of new ideas founded by academicians,
        educationist, engineers and corporate people. The research results and fundamental advancement are all aspects of Innovative Research in
        Advanced Engineering & Technology and various engineering disciplines, etc. IJIRE is a scholarly open access, Single Peer Review Journal
        which helps to academic person as well as student community.
      </p>
      <p className="mt-2">
        IJIRE provides the academic community and industry for the submission of original research and applications related to Various Engineering
        discipline and Advanced Technologies by FDRP Publications, Tamilnadu, India since year 2020.
      </p>

      <p className="mt-4">
        Reviewers play a central role in scholarly publishing. IJIRE uses Single peer review process, which means that both the reviewer(s) and
        author(s) identities are concealed from the reviewer(s), and vice versa, throughout the review process. This means that the reviewer(s) of
        the paper won’t get to know the identity of the author(s), and the author(s) won’t get to know the identity of the reviewer(s). Peer review
        helps validate research, establish a method by which it can be evaluated, and increase networking possibilities within research communities.
        Despite criticisms, peer review is still the only widely accepted method for research validation.
      </p>

      <p className="mt-4">
        All submitted papers will be reviewed by Single peer review process which may take minimum 01 to 03 weeks from the date of submission. We are
        advising to all the author(s), do not submit sFDRP e paper to the multiple journals. You should wait for review status of paper.
      </p>

      <p className="mt-4">
        IJIRE is committed to prompt evaluation and publication of fully accepted papers. To maintain a high-quality publication, all submissions
        undergo a rigorous review process. Characteristics of the peer review process are as follows:
      </p>

      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Simultaneous submissions of the sFDRP e manuscript to different journals will not be tolerated.</li>
        <li>Manuscripts with contents outside the scope will not be considered for review.</li>
        <li>
          Papers will be refereed by at least 3 or 4 experts (reviewers) as suggested by the editorial board in which 01 from India and rest 02 or
          03 from overseas.
        </li>
        <li>In addition, Editors will have the option of seeking additional reviews when needed.</li>
        <li>
          Authors will be informed when Editors decide further review is required. All publication decisions are made by the journal’s
          Editors-in-Chief on the basis of the referees’ reports (reviewers report).
        </li>
        <li>Authors of papers that are not accepted are notified promptly.</li>
        <li>
          All submitted manuscripts are treated as confidential documents. All submitted papers will be reviewed by double blind review process.
        </li>
        <li>
          All manuscripts submitted for publication in IJIRE cross-checked for plagiarism software. Manuscripts found to be plagiarized during
          initial stages of review are out-rightly rejected and not considered for publication in the journal.
        </li>
        <li>
          In case if a manuscript is found to be plagiarized after publication, the Editor-in-Chief will conduct preliminary investigation, may be
          with the help of a suitable committee constituted for the purpose. If the manuscript is found to be plagiarized beyond the acceptable
          limits, the journal will contact the author's Institute / College / University and Funding Agency, if any.
        </li>
        <li>IJIRE strictly uses following Single peer review process</li>
      </ul>
    </section>
  )
}
