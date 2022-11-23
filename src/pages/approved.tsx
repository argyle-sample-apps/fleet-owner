import { ReactElement } from "react";
import { Heading, Paragraph } from "components/typography";
import WithBackButton from "layouts/with-back-button";
import { useRouter } from "next/router";
import { Button } from "components/button";
import { ApprovedIcon } from "components/icons";

export default function ApprovedPage() {
  const router = useRouter();
  return (
    <div className="flex h-full flex-col pb-5">
      <div className="mt-auto px-5 pt-6">
        <div className="mb-6">
          <ApprovedIcon />
        </div>
        <Heading className="mb-5">
          Connection approved.{" "}
          <span className="text-gray-T50">Let’s get you in a vehicle</span>
        </Heading>
        <Paragraph large className="mb-12 text-gray-T50">
          A concierge will reach out shortly to complete your onboarding.
        </Paragraph>
        <Button
          onClick={() => {
            router.push("/landing");
          }}
        >
          {"Done"}
        </Button>
      </div>
    </div>
  );
}

ApprovedPage.getLayout = function getLayout(page: ReactElement) {
  return <WithBackButton yellowBg>{page}</WithBackButton>;
};
