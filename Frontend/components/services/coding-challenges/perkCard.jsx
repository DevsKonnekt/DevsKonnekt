import Image from "next/image";

const PerkCard = ({ image, heading, text }) => {
  return (
    <div className="w-full max-w-2xl bg-primary rounded-xl flex gap-4 items-center my-2">
      <Image
        src={image}
        alt={heading}
        width={180}
        height={180}
        className="object-cover w-[150px] rounded-xl"
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-lg sm:text-2xl font-bold text-start text-background">
          {heading}
        </h2>
        <p className="text-start text-background text-sm">{text}</p>
      </div>
    </div>
  );
};

export default PerkCard;
