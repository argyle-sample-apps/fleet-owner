import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { hasCookie } from "cookies-next";
import clsx from "clsx";
import { Title, Paragraph, Footnote } from "components/typography";
import { Splitter } from "components/splitter";
import Fullscreen from "layouts/fullscreen";
import { DriverIcon, FleetIcon, ChevronRight } from "components/icons";

export default function LandingPage() {
  const router = useRouter();
  const [isFleetOwnerActive, setFleetOwnerActive] = useState(false);

  useEffect(() => {
    setFleetOwnerActive(hasCookie("argyle-x-user-id"));
  }, []);

  useEffect(() => {
    router.prefetch(isFleetOwnerActive ? "/connected" : "/connect");
  }, [isFleetOwnerActive, router]);

  return (
    <div className="flex h-full flex-col">
      <div className="mt-auto px-4 pr-[16px] pt-5">
        <Title className="mb-3 mt-5">Flows</Title>
        <Splitter className="my-5" />
        <button
          className="grid w-full grid-cols-landing text-left"
          onClick={() => {
            router.push("/connect");
          }}
        >
          <div>
            <DriverIcon />
          </div>
          <div className="mr-5 ">
            <Paragraph className="mb-1 text-black">Driver</Paragraph>
            <Footnote className="text-gray-T50">Connect a gig account</Footnote>
          </div>
          <ChevronRight />
        </button>
        <Splitter className="my-5" />

        <button
          disabled={!isFleetOwnerActive}
          className={clsx(
            "grid w-full grid-cols-landing text-left",
            isFleetOwnerActive ? "opacity-100" : "opacity-50"
          )}
          onClick={() => {
            router.push("/connected");
          }}
        >
          <div>
            <FleetIcon />
          </div>
          <div className="mr-5">
            <Paragraph className="mb-1 text-black">Fleet Owner</Paragraph>
            {isFleetOwnerActive ? (
              <Footnote className="text-green">Active</Footnote>
            ) : (
              <Footnote className="text-gray-T50">
                Connect a gig account as a driver to activate
              </Footnote>
            )}
          </div>
          <ChevronRight />
        </button>
        <Splitter className="mt-5 mb-[60px]" />
      </div>
    </div>
  );
}

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen logo>{page}</Fullscreen>;
};
