import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { hasCookie } from "cookies-next";
import { Subheading, Paragraph, Footnote } from "components/typography";
import { Splitter } from "components/splitter";
import Fullscreen from "layouts/fullscreen";
import { ChevronRight, TuneIcon } from "components/icons";
import { UserAvatar } from "components/user-avatar";
import { useAccounts } from "hooks/use-accounts";
import { useProfile } from "hooks/use-profile";
import { useVehicles } from "hooks/use-vehicles";
import { SectionLoader, ErrorMessage } from "components/loader";
import { PlatformIcon } from "components/platform-icon";
import { FadeAnimation } from "components/fade-animation";

export default function ConnectedPage() {
  const router = useRouter();
  const {
    data: accounts,
    isLoading: isAccountsLoading,
    isError: isAccountsError,
  } = useAccounts();

  const {
    data: vehicles,
    isLoading: isVehiclesLoading,
    isError: isVehiclesError,
  } = useVehicles();

  const {
    data: profile,
    isLoading: isProfileLoading,
    isError: isProfileError,
  } = useProfile();

  useEffect(() => {
    router.prefetch("/");
  }, [router]);

  useEffect(() => {
    if (!hasCookie("argyle-x-user-id")) {
      router.push("/landing");
    }
  });

  if (isProfileLoading || isAccountsLoading || isVehiclesLoading) {
    return <SectionLoader />;
  }

  if (isProfileError || isAccountsError || isVehiclesError) {
    return <ErrorMessage />;
  }

  const vehicleData = accounts?.map((account) => {
    const data = vehicles.filter(
      (vehicle) => vehicle.employer === account.link_item
    );
    /* Display only one vehicle */
    return data[0];
  });

  return (
    <FadeAnimation name={router.route} delayed>
      <div className="flex h-full flex-col bg-cyan-20">
        <div className="px-4 pr-[16px]">
          <Subheading className="mb-3 mt-[60px] text-black">
            Connected drivers
          </Subheading>

          <Splitter className="mt-4" />

          <button
            className="box-border grid h-[80px] w-full grid-cols-connected text-left "
            onClick={() => {
              router.push("/");
            }}
          >
            <div className="my-auto flex">
              <UserAvatar
                name={profile?.full_name}
                src={profile?.picture_url || ""}
              />
            </div>
            <div className="my-auto mr-5 flex flex-col">
              <Paragraph className="mb-1 text-black">
                {profile?.full_name}
              </Paragraph>
              {(!isVehiclesLoading || !isVehiclesError) && vehicleData && (
                <Footnote className="text-gray-T50">
                  {`${vehicleData[0].make} ${vehicleData[0].model}`}
                </Footnote>
              )}
            </div>
            <div className="relative my-auto ml-auto mr-5 flex">
              {accounts?.map((account, i) => (
                <div
                  key={account.link_item_details.name + i}
                  className="h-[28px] w-[23px] overflow-visible"
                >
                  <div className="h-[28px] w-[28px]">
                    <PlatformIcon
                      size="medium"
                      src={account.link_item_details.logo_url}
                      alt={account.link_item_details.name}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="my-auto mr-5 flex flex-col">
              <ChevronRight />
            </div>
          </button>
          <Splitter />
          <button
            className="absolute right-5 top-5 flex items-center"
            onClick={() => {
              router.push("/settings");
            }}
          >
            <div className="mr-2 text-paragraph">Settings</div>
            <TuneIcon />
          </button>
        </div>
      </div>
    </FadeAnimation>
  );
}

ConnectedPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Fullscreen className="bg-cyan-20" logo>
      {page}
    </Fullscreen>
  );
};
