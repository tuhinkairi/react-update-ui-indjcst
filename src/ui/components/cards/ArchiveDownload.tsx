import ArchiveBtn from "../Btns/ArchiveBtn";
const DownloadCard = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-[0px_0px_60px_rgba(0,0,0,0.1)] borderPrimary">
      <h3 className="text-lg 2xl:text-xl font-semibold mb-4">Download</h3>
      <div className="flex flex-col gap-3">
        <ArchiveBtn
          label="Manuscript Template"
          href="https://theijire.com/downloads/manuscript.docx"
        />
        <ArchiveBtn
          label="Copyright Form"
          href="https://theijire.com/downloads/copyrights.pdf"
        />
      </div>
    </div>
  );
};

export default DownloadCard;
