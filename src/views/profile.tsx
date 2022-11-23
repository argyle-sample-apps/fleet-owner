import { useState } from "react";
import { Heading, Paragraph } from "components/typography";
import { useAccounts } from "hooks/use-accounts";
import { useProfile } from "hooks/use-profile";
import { useVehicles } from "hooks/use-vehicles";
import { TabButton } from "components/button";
import { formatTextCapitalized } from "utils/format";
import { SectionLoader, ErrorMessage } from "components/loader";

export const Profile = () => {
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

  const [isCurrentTab, setCurrentTab] = useState(0);

  if (isAccountsLoading || isVehiclesLoading || isProfileLoading) {
    return <SectionLoader name="profile" />;
  }

  if (isAccountsError || isVehiclesError || isProfileError) {
    return <ErrorMessage />;
  }

  const profileData = accounts.map((account, i) => {
    const linkItem = account.link_item_details;

    const cars = vehicles.filter(
      (vehicle) => vehicle.employer === account.link_item
    );
    return { linkItem, cars };
  });

  return (
    <div className="mx-5 mt-[60px]">
      <div className="w-2/3">
        <Heading className="mb-5">{profile?.full_name}</Heading>
      </div>
      <div className="flex overflow-x-auto">
        {profileData.map(({ linkItem }, i) => (
          <div key={i}>
            <TabButton
              title={linkItem.name}
              src={linkItem.logo_url}
              alt={linkItem.name}
              isActive={i === isCurrentTab}
              onClick={() => setCurrentTab(i)}
              className="mr-5"
            />
          </div>
        ))}
      </div>
      {profileData.map(({ cars }, i) => {
        return (
          <div key={i}>
            {i === isCurrentTab && (
              <div className="mt-5 mb-5 grid grid-cols-[90px,_1fr] gap-3">
                <Paragraph className="text-gray-40">Vehicle</Paragraph>
                <Paragraph>
                  {cars[0].make} {cars[0].model}
                </Paragraph>
                <Paragraph className="text-gray-40">VIN</Paragraph>
                <Paragraph>{cars[0].vin}</Paragraph>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
