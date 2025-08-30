export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p>
        Email:{" "}
        <a
          href="mailto:dmshim@uwaterloo.ca"
          className="text-blue-500 hover:underline"
        >
          dmshim@uwaterloo.ca
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/david-shim/"
          className="text-blue-500 hover:underline"
        >
          linkedin.com/in/david-shim/
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/davidshxm"
          className="text-blue-500 hover:underline"
        >
          github.com/davidshxm
        </a>
      </p>
    </section>
  );
}
