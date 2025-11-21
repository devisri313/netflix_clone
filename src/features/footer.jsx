import React from "react";

function Footer() {
  return (
    <div className="pb-20 text-[16px] text-[#b3b3b3] px-4">
      <div className="underline">
        <div className="mb-8">Questions? Contact us.</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
          {[1, 2, 3, 4].map((col, index) => (
            <ul key={index} className="list-none space-y-2">
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Account</li>
              <li>Media Center</li>
              <li>Investor Relations</li>
            </ul>
          ))}
        </div>

        <div className="mt-8">
          <select className="text-white border border-gray-500 bg-black py-1 px-2 pr-20 rounded">
            <option className="text-black" value="English">
              English
            </option>
            <option className="text-black" value="Arabic">
              Arabic
            </option>
          </select>
        </div>
      </div>

      <div className="mt-10">
        <div>Netflix Norway</div>

        <div className="text-[12px] mt-2">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-500 underline cursor-pointer">
            Learn more
          </span>
          .
        </div>
      </div>
    </div>
  );
}

export default Footer;
