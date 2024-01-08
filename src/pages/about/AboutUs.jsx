import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="max-w-7xl mx-auto font-sans items-center 2xl:items-start mt-16 px-5">
        <div className="  flex flex-col gap-24 md:flex-row ">
          <img
            src="https://airforce.mil.ng/uploads/news/images/thumb_767393872IMG-20220428-WA0029.jpg"
            className="w-full h-full object-cover rounded-lg self-center flex-1 "
          />

          <div className="flex-1 pt-5 2xl:pt-10">
            <h1 className="text-3xl font-bold pb-5 text-darkNafowaBlue">
              Who We Are
            </h1>
            <p className="leading-7 text-gray-800 text-base">
              The Nigerian Air Force Officers’ Wives Association (NAFOWA) whose
              motto is “Service to Humanity” is a philanthropic,
              Non-Governmental Organization whose membership is voluntary and
              open to the wives of all serving Nigerian Air Force officers.
              Traditionally, the wife of the incumbent Chief of the Air Staff is
              the National President of the Association, while the Headquarters
              of the Association is located in Abuja. NAFOWA is also very active
              at all Air Force Command levels and in various Air Force
              formations throughout the country. The Association was established
              in 1968 with the primary objective of promoting the socio-cultural
              and educational well-being of the wider air force community and
              the general public especially the less-privileged.
            </p>
          </div>
        </div>
        <div className="leading-7 text-gray-800 text-base mt-4">
          <p>
            The Association started as an informal Tea Party organized to
            exchange pleasantries and subsequently became a regular meeting with
            the idea of extending assistance to the sick and the needy and
            empowering women and the youth. In 1968, it was formally established
            as a legal entity known as the “Nigerian Air Force Officers’ Wives
            Association” (NAFOWA).
          </p>
          <p>
            NAFOWA has embarked specifically on activities that promote the
            welfare of the “Air Force Family” and the public in general. The
            Association has reached out to the less fortunate and less
            privileged members of the society. Notable among NAFOWA activities
            are:
          </p>

          <ul className="ps-8 mt-4">
            <li>Promoting family values</li>
            <li>
              Provision of foundational education through the building and
              equipping of nursery, primary and secondary schools tagged “The
              NAFOWA Little Angels Schools”{" "}
            </li>
            <li>Establishment of vocational/ICT centres and cyber cafes. </li>
            <li>Promoting health awareness programmes.</li>
            <li>Established Cancer Screening Centre.</li>
            <li>Provision of medical equipment to hospitals.</li>
            <li>Provision foods items to prison and help to inmates.</li>
            <li>
              Setting up of recreational facilities, like the NAFOWA Children’s
              Parks.{" "}
            </li>
            <li>
              Educational sponsorship and support to the disabled and less
              fortunate in society, which are not limited to the “Air Force
              Family”.
            </li>
            <li>
              Promoting the intellectual capacity of members and assisting them
              to empower themselves financially.
            </li>
            <li>
              Provision of aid materials to those who are internally displaced
              by disasters.
            </li>
            <li>Organising forums for peace advocacy.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
