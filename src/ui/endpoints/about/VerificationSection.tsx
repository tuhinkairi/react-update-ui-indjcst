const VerificationSection = () => {
  return (
    <section className="w-full py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CrossRef Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg px-6 py-8 flex flex-col items-start justify-center space-y-6">
          <img
            src="/verifySection/image2.webp"
            alt="DOI CrossRef"
            className="w-48 2xl:w-60 h-auto object-contain"
          />
          <h3 className="text-gray-600 leading-relaxed 2xl:text-lg">
            CrossRef DOI is assigned to research Article published in our journal.
            IJIRE DOI prefix is <span className="font-semibold">10.59256/ijire</span>
          </h3>
        </div>

        {/* Turnitin Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg px-6 py-8 flex flex-col items-start justify-start space-y-6">
          <img
            src="/verifySection/image1.webp"
            alt="Turnitin"
            className="w-48 2xl:w-60 h-auto object-contain"
          />
          <h3 className="text-gray-600 leading-relaxed 2xl:text-lg">
            Plagiarism is checked by the leading plagiarism checker
          </h3>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
