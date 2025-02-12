import React from "react";

function Footer() {
  return (
    <header className="bg-white">
      <footer className="lg:container md:p-12 p-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-8">
            <p className="text-primary font-bold md:text-3xl text-2xl mb-4">
              MORENT
            </p>
            <p className="text-gray-400 text-xs md:text-base w-[65%]">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="flex flex-col md:ml-8 mb-6">
            <h6 className="text-xl font-semibold mb-2">About</h6>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              How it works
            </a>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Featured
            </a>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Partnership
            </a>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Bussiness Relation
            </a>
          </div>
          <div className="flex flex-col md:ml-8 mb-6">
            <h6 className="text-xl font-semibold mb-2">Socials</h6>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Discord
            </a>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Twitter
            </a>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Facebook
            </a>
          </div>
          <div className="flex flex-col md:ml-8">
            <h6 className="text-xl font-semibold mb-2">Community</h6>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Events
            </a>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Blog
            </a>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Podcast
            </a>
            <a
              className="text-gray-400 leading-9 hover:text-primary cursor-pointer transition-all"
              href="https://seyedalinajafi.ir/"
              target="_blank"
            >
              Invite a friend
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <hr className="w-full mb-3" />
          <p className="font-bold text-2xl">
            Made By{" "}
            <a
              className="hover:text-primary transition-all duration-500"
              href="https://seyedalinajafi.ir"
              target="_blank"
            >
              Seyed Ali Najafi
            </a>
          </p>
          <a
            className="font-bold text-xl hover:text-primary transition-all duration-500"
            href="https://github.com/SeyedAliNajafi"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </footer>
    </header>
  );
}

export default Footer;
