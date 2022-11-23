import type { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useAtom } from "jotai";
import { getCookie } from "cookies-next";
import Fullscreen from "layouts/fullscreen";
import { Topbar } from "views/topbar";
import { PeriodFiltering } from "views/period-filtering";
import { datePickerOpenAtom } from "stores/global";
import { Notification } from "components/notification";
import { Profile } from "views/profile";
import { PeriodBreakdown } from "views/period-breakdown";
import { Dashboard } from "views/dashboard";

export default function Home() {
  const [isOpen, setIsOpen] = useAtom(datePickerOpenAtom);

  return (
    <div className="pb-12">
      <Topbar />
      <Notification />
      <Profile />
      <PeriodBreakdown />
      <Dashboard />
      <PeriodFiltering isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const userId = getCookie("argyle-x-user-id", ctx);

  if (!userId) {
    return {
      redirect: { destination: "/landing", permanent: false },
    };
  }

  return {
    props: {},
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen>{page}</Fullscreen>;
};
