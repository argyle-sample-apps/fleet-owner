import { ReactElement, useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Button } from "components/button";
import { Heading, Paragraph, Footnote } from "components/typography";
import { Splitter } from "components/splitter";
import { ArgyleLink } from "components/argyle-link";
import Fullscreen from "layouts/fullscreen";
import { hasCookie } from "cookies-next";
import { PrivateIcon, LockIcon } from "components/icons";

export default function ConnectPage() {
  const [linkLoading, setLinkLoading] = useState(false);
  const [linkInstance, setLinkInstance] = useState<any>();
  const [linkOpen, setLinkOpen] = useState(false);

  const router = useRouter();

  const handleLinkOpen = () => {
    if (!linkInstance) {
      return setLinkLoading(true);
    }

    linkInstance.open();
    setLinkOpen(true);
  };

  useEffect(() => {
    router.prefetch("/approved");
  }, [router]);

  useEffect(() => {
    if (linkInstance && linkLoading === true) {
      setLinkLoading(false);
      linkInstance.open();
      setLinkOpen(true);
    }
  }, [linkLoading, linkInstance]);

  const handleLinkClose = () => {
    const cookie = hasCookie("argyle-x-user-id");

    if (cookie) {
      router.push("/approved");
    } else {
      setLinkOpen(false);
      router.push("/landing");
    }
  };

  return (
    <>
      <ArgyleLink
        onClose={() => handleLinkClose()}
        onLinkInit={(link) => {
          setLinkInstance(link);
        }}
      />
      {!linkOpen && (
        <div className="flex h-full flex-col">
          <div className="mt-auto px-4 pr-[16px] pt-5">
            <Heading className="mb-3 mt-5">
              Verify your gig account to get approved
            </Heading>
            <Paragraph large className="mb-5 text-gray-T50">
              Connect at least one active gig account to verify that you&apos;re
              an active driver.
            </Paragraph>
            <Splitter className="my-5" />
            <div className="grid grid-cols-connect">
              <div>
                <LockIcon />
              </div>
              <div className="mr-5 ">
                <Paragraph className="mb-1 text-black">
                  Secure and encrypted
                </Paragraph>
                <Footnote className="text-gray-T50">
                  We use high levels of security and encryption standards to
                  keep your information safe
                </Footnote>
              </div>
            </div>
            <Splitter className="my-5" />
            <div className="grid grid-cols-connect">
              <div>
                <PrivateIcon />
              </div>
              <div className="mr-5">
                <Paragraph className="mb-1 text-black">
                  Always private
                </Paragraph>
                <Footnote className="text-gray-T50">
                  Protecting personal information is our top priority
                </Footnote>
              </div>
            </div>
            <Splitter className="mt-5 mb-[60px]" />
            <div className={clsx("flex pb-5", linkLoading && "animate-pulse")}>
              <Button onClick={handleLinkOpen}>Connect your work</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ConnectPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Fullscreen className="bg-green-light" logo>
      {page}
    </Fullscreen>
  );
};
