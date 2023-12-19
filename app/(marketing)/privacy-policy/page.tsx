import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto my-8 p-8  rounded ">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to Buzznote ("us", "we", or "our"). This page informs you of our
        policies regarding the collection, use, and disclosure of Personal
        Information when you use our Service.
      </p>

      {/* Add more sections based on your specific privacy policy content */}

      <h2 className="text-2xl font-bold my-4">
        Information Collection and Use
      </h2>
      <p className="mb-4">
        We may collect several different types of information for various
        purposes to provide and improve our Service to you.
      </p>

      <h2 className="text-2xl font-bold my-4">Log Data</h2>
      <p className="mb-4">
        We want to inform you that whenever you use our Service, we collect data
        and information (through third-party products) on your phone called Log
        Data.
      </p>

      {/* Add more sections based on your specific privacy policy content */}

      <h2 className="text-2xl font-bold my-4">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. Thus, you are
        advised to review this page periodically for any changes. We will notify
        you of any changes by posting the new Privacy Policy on this page.
      </p>

      {/* Add more sections based on your specific privacy policy content */}

      <h2 className="text-2xl font-bold my-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at
        <a className=" ml-2 underline" href="https://pawan67.vercel.app">
          My portfolio
        </a>
        .
      </p>
      <p className=" text-muted-foreground text-sm mt-8">
        This document is a dummy privacy policy page created for learning and
        demonstration purposes.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
