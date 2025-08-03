import Link from "next/link";
import Step from "@/components/Step";

const Steps = () => {
  return (
    <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
      <Step step={1} headline={"Sign up for an account"}>
        Either starting out with a free plan or choose our{" "}
        <Link
          href="/pricing"
          className="text-blue-700 underline underline-offset-2"
        >
          pro plan
        </Link>
        .
      </Step>
      <Step step={2} headline="Upload your PDF file">
        We&apos;ll process your file and make it ready for you to chat with.
      </Step>
      <Step step={3} headline="Start asking questions">
        It&apos;s that simple. Try out Quill today - it really takes less than a
        minute.
      </Step>
    </ol>
  );
};

export default Steps;
