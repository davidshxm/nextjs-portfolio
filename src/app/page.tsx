import Image from "next/image";

export default function HomePage() {
  return (
    <section className="text-center">
      <div className="flex justify-center mb-6">
        {/* Example profile photo */}
        <Image
          src="/profile.jpg"
          alt="Profile photo of David"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">Hi, I’m David</h1>
      <p className="text-lg">
        I’m passionate about <span className="font-semibold">design</span> and
        enjoy building projects that blend technology and creativity.
      </p>
    </section>
  );
}
