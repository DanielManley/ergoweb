import { Popover, Transition } from "@headlessui/react";
import {
  LogoWithText,
  ThemeLightBig,
  ThemeDarkBig,
  ThemeLightSmall,
  ThemeDarkSmall,
  LogoWithTextWhite,
} from "./icons";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import { FormattedMessage, useIntl } from "react-intl";
import { getIconComponentByName } from "../utils/icons-map";
import { useTheme } from "next-themes";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navigation({ enableLanguages = true }) {
  const { theme, setTheme } = useTheme();
  const { pathname } = useRouter();
  const intl = useIntl();
  const ergoCommunity = intl.formatMessage({
    id: "navigation.ergoCommunity",
    defaultMessage: "ERGO COMMUNITY",
  });
  const getErg = intl.formatMessage({
    id: "navigation.getErg",
    defaultMessage: "GET ERG",
  });
  const discover = intl.formatMessage({
    id: "navigation.discover",
    defaultMessage: "DISCOVER",
  });
  const ecosystem = intl.formatMessage({
    id: "navigation.ecosystem",
    defaultMessage: "ECOSYSTEM",
  });
  return (
    <Popover className="max-w-[1300px] mx-auto p-4">
      <div className="flex mx-5 mt-2 mb-10 lg:my-10">
        <div className="my-auto flex-grow z-10">
          <Link href="/">
            <button>
              <LogoWithText viewBox="0 0 213 82" className="w-24 lg:w-32" />
            </button>
          </Link>
        </div>
        <div className="hidden lg:block my-auto flex-grow" style={{zIndex:12}}>
          <Button text={ergoCommunity} url="/community" background={false} underline={pathname == '/community'} customClass=" decoration-brand-orange dark:decoration-brand-orange underline-offset-2" />
          <Button text={getErg} url="/get-erg" background={true} underline={pathname == '/get-erg'} customClass=" decoration-black dark:decoration-white underline-offset-2"/>
          <Button text={discover} url="/discover" background={false} underline={pathname == '/discover'} customClass=" decoration-brand-orange dark:decoration-brand-orange underline-offset-2"/>
          <Button text={ecosystem} url="/ecosystem" background={false} underline={pathname == '/ecosystem'} customClass=" decoration-brand-orange dark:decoration-brand-orange underline-offset-2"/>
        </div>
        <div className="inline-flex" style={{zIndex:12}}>
          <div className="my-auto">
            {enableLanguages ? <LanguageSwitcher /> : null}{" "}
          </div>
          <div className="my-auto ml-5 lg:ml-10">
            <div className="lg:hidden">
              <div className="dark:hidden my-auto">
                <ThemeLightSmall
                  className="themeShadow"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
              </div>
              <div className="hidden dark:block">
                <ThemeDarkSmall
                  className="themeShadow"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="dark:hidden">
                <ThemeLightBig
                  className="themeShadow"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
              </div>
              <div className="hidden dark:block">
                <ThemeDarkBig
                  className="themeShadow"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
              </div>
            </div>
          </div>
          <div className="my-auto ml-5 lg:ml-10 z-40">
            <Popover.Button className="focus:outline-none">
              {getIconComponentByName("MenuOpen")}
            </Popover.Button>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="fixed overflow-auto inset-0 bg-brand-orange dark:bg-brand-black z-50">
          <div className="max-w-[1300px] mx-auto p-4 lg:px-0 lg:my-8">
            <div className="flex mx-5 mt-2 mb-10">
              <div className="my-auto flex-grow">
                <Link href="/">
                  <button>
                    <LogoWithTextWhite
                      viewBox="0 0 213 82"
                      className="w-24 lg:w-32"
                    />
                  </button>
                </Link>
              </div>
              <div className="inline-flex">
                <div className="my-auto text-white">
                  {enableLanguages ? <LanguageSwitcher color="white" /> : null}{" "}
                </div>
                <div className="my-auto ml-5 lg:ml-10">
                  <div className="lg:hidden">
                    <div className="dark:hidden my-auto">
                      <ThemeLightSmall
                        className="themeShadow"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                      />
                    </div>
                    <div className="hidden dark:block">
                      <ThemeDarkSmall
                        className="themeShadow"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                      />
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="dark:hidden">
                      <ThemeLightBig
                        className="themeShadow"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                      />
                    </div>
                    <div className="hidden dark:block">
                      <ThemeDarkBig
                        className="themeShadow"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="my-auto ml-5 lg:ml-10">
                  <Popover.Button>
                    {getIconComponentByName("MenuClose")}
                  </Popover.Button>
                </div>
              </div>
            </div>
            {/* <div className="mx-4 py-6 border-b-2">
              <input
                className=" bg-transparent w-full text-4xl placeholder-opacity-30 placeholder-white text-white focus:outline-none"
                placeholder="Type to search..."
              />
            </div> */}
            <div className="mx-4 mt-16 grid grid-cols-1 md:grid-cols-4 text-white">
              <div>
                <Link href="/community">
                  <h3 className="font-button mt-4 mb-10">
                    <FormattedMessage
                      defaultMessage="COMMUNITY"
                      id="footer.community.title"
                    />
                  </h3>
                </Link>
                <ul className="hidden md:block">
                  <li className="mb-1">
                    <a
                      href="https://linktr.ee/ergoplatform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        defaultMessage="Join our channels"
                        id="footer.community.1"
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://ergonaut.space/en/Ergo/Contributing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        defaultMessage="Sigmanauts"
                        id="footer.community.2"
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://ergonaut.space/en/Ergo/Contributing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        defaultMessage="Contribute to Ergo"
                        id="footer.community.3"
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://sigmaverse.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        defaultMessage="Ergo Foundation"
                        id="footer.community.4"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Link href="/get-erg">
                  <h3 className="font-button mt-4 mb-10">
                    <FormattedMessage
                      defaultMessage="GET ERG"
                      id="footer.getErg.title"
                    />
                  </h3>
                </Link>
                <ul className="hidden md:block">
                  <li className="mb-1">
                    <Link href="/get-erg">
                      <FormattedMessage
                        defaultMessage="Mining"
                        id="footer.getErg.1"
                      />
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/get-erg">
                      <FormattedMessage
                        defaultMessage="Mining Calculator"
                        id="footer.getErg.2"
                      />
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/get-erg">
                      <FormattedMessage
                        defaultMessage="Wallets"
                        id="footer.getErg.3"
                      />
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/get-erg">
                      <FormattedMessage
                        defaultMessage="Exchanges"
                        id="footer.getErg.4"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link href="/discover">
                  <h3 className="font-button mt-4 mb-10">
                    <FormattedMessage
                      defaultMessage="DISCOVER"
                      id="footer.discover.title"
                    />
                  </h3>
                </Link>
                <ul className="hidden md:block">
                  <li className="mb-1">
                    <a
                      href="http://docs.ergoplatform.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        defaultMessage="Software Releases"
                        id="footer.discover.1"
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://docs.ergoplatform.com/contribute/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        defaultMessage="Grants & Bounties"
                        id="footer.discover.2"
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link href="/discover">
                      <FormattedMessage
                        defaultMessage="FAQ"
                        id="footer.discover.3"
                      />
                    </Link>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://explorer.ergoplatform.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        defaultMessage="Explore"
                        id="footer.discover.4"
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link href="/discover">
                      <FormattedMessage
                        defaultMessage="Documents"
                        id="footer.discover.5"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link href="/ecosystem">
                  <h3 className="font-button mt-4 mb-8 md:mb-10">
                    <FormattedMessage
                      defaultMessage="ECOSYSTEM"
                      id="footer.ecosystem.title"
                    />
                  </h3>
                </Link>
                <ul className="hidden md:block">
                  <li className="mb-1">
                    <Link href="/ecosystem">
                      <FormattedMessage
                        defaultMessage="DApps"
                        id="footer.ecosystem.1"
                      />
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/ecosystem">
                      <FormattedMessage
                        defaultMessage="Roadmap"
                        id="footer.ecosystem.2"
                      />
                    </Link>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://ergonaut.space"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        defaultMessage="Wiki"
                        id="footer.ecosystem.3"
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="http://ergoraffle.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        defaultMessage="Ergo Raffle"
                        id="footer.ecosystem.4"
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link href="/ecosystem">
                      <FormattedMessage
                        defaultMessage="Real Life Ergo"
                        id="footer.ecosystem.5"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 w-80 hidden md:block">
                <p className="font-subtitle-2">
                  <FormattedMessage
                    defaultMessage="More content?"
                    id="navigation.moreContent"
                  />
                </p>
                <p className="font-subtitle-2">
                  <FormattedMessage
                    defaultMessage="We got it!"
                    id="footer.weGotIt"
                  />
                </p>
              </div>
            </div>
            <div className="mx-4 text-white md:flex">
              <div className="my-6 flex-grow md:flex-grow">
                <ul className="md:inline-flex">
                  <li>
                    <h3 className="font-button mt-4 mb-14 mr-20">
                      <FormattedMessage
                        defaultMessage="BLOG"
                        id="footer.blog.title"
                      />
                    </h3>
                  </li>
                  <li>
                    <h3 className="font-button mt-4 mb-14 mr-20">
                      <FormattedMessage
                        defaultMessage="NEWS"
                        id="footer.news.title"
                      />
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="my-6 dark">
                <div className="grid overflow-hidden grid-cols-3 gap-2 text-red md:grid-cols-9">
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://sigmaverse.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName("Sigmaverse")}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://ergonaut.space"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName("Wiki")}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://github.com/ergoplatform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName("Github")}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://twitter.com/ergoplatformorg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName("Twitter")}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://www.youtube.com/c/ErgoPlatform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName("Youtube")}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://t.me/ergochats"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName("Telegram")}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://discord.gg/RC8M4Bkgsy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName("Discord")}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://reddit.com/r/ergonauts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName("Reddit")}
                    </a>
                  </div>
                  <div className="box mx-auto my-auto">
                    <a
                      href="https://www.ergoforum.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getIconComponentByName("Discourse")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Navigation;
