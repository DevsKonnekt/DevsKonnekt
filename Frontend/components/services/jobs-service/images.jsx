import Image from "next/image";

const Images = () => {
  return (
    <section className="w-full my-8 md:px-auto px-4">
      <h2 className="text-3xl font-bold text-start text-secondary">
        Feel The Connection.
      </h2>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Image
          src="/images/services/jobs-service/connection-1.svg"
          alt="connection"
          width={690}
          height={710}
          className="object-cover row-span-2"
        />
        <Image
          src="/images/services/jobs-service/connection-2.svg"
          alt="connection"
          width={690}
          height={350}
          className="object-cover"
        />
        <Image
          src="/images/services/jobs-service/connection-3.svg"
          alt="connection"
          width={690}
          height={350}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Images;
