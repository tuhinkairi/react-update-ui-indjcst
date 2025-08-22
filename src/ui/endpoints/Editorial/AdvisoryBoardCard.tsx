interface AdvisoryBoardCardProps {
  image: string;
  boardTitle: string;
  name: string;
  designation: string;
  address: string;
  onViewMore?: () => void;
}

export const AdvisoryBoardCard = ({
  image,
  boardTitle,
  name,
  designation,
  address,
  onViewMore,
}: AdvisoryBoardCardProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-center bg-white shadow shadowSprade rounded-2xl overflow-hidden w-full">
      <div className=" col-span-1 h-full flex items-center justify-center">
        <img loading='lazy' 
src={image} alt={name} className="w-full h-full object-cover sm:aspect-square"  />
      </div>
      <div className="sm:col-span-2 justify-between px-4 py-3 w-full">
        <div className="space-y-1">
          <p className="text-primary font-medium text-[15px] xl:text-2xl">{boardTitle}</p>
          <h3 className="text-[17px] 2xl:text-xl font-bold ">{name}</h3>
          <p className="text-paragraph text-base 2xl:text-lg">{designation}</p>
          <p className="text-paragraph text-base 2xl:text-lg">
            <strong>Address:</strong> {address}
          </p>
        </div>
        <div className="flex justify-end mt-3">
          <button
            onClick={onViewMore}
            className="bg-[#5C6BC01A] text-primary-text hover:bg-[#5c6bc077] transition px-6 py-2 rounded-lg text-[16px] font-medium"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
