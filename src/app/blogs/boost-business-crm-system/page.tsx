import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
export default function BoostBusinessCrmSystem() {
  return (
    <>
      <div className="container flex max-w-full flex-col items-start gap-[33px] py-[142px] text-white md:gap-[50px] xl:gap-[66px]">
        <Link
          href="/blogs"
          className="flex flex-row items-center gap-2 rounded-[4px] border border-[#535353] px-[11px] py-2 text-xs text-[#EDEDED] md:px-[25px] md:py-[9px] md:text-sm"
        >
          <FaArrowLeft size={18} color="#C0C0C0" strokeWidth={0.1} />
          Back To Blogs
        </Link>
        <div className="flex flex-col gap-[21px] md:gap-[34px]">
          <div className="text-xl font-medium md:text-[28px] md:leading-[46px] xl:text-4xl">
            What Changes Does CRM Bring to a Business?{" "}
          </div>

          <div className="text-sm font-normal md:text-base">
            In today’s competitive world, building strong customer relationships
            is key to growing any business. That’s where CRM (Customer
            Relationship Management) software comes in. It helps you manage and
            improve how you interact with customers — all in one place.
          </div>
        </div>

        {/* <div className="relative h-[597px] w-[1061px]">
          <Image
            src={"/blogs/blog-2.png"}
            className="rounded-[4px] object-cover"
            alt="ai-chatbots healthcare image"
            fill
            quality={100}
          />
        </div> */}

        <div className="flex flex-col gap-[27px]">
          <div className="text-base font-bold md:text-xl">
            Let’s explore the important changes a CRM can bring to your
            business.
          </div>
          <div className="text-sm font-normal md:text-base">
            A healthcare chatbot is an AI-powered conversational tool designed
            to simulate human-like interactions with patients. These bots can be
            integrated into websites, mobile apps, or messaging platforms like
            WhatsApp, making them easily accessible to patients anytime,
            anywhere
            <br />
            <br />
            The Growing Importance of Patient Engagement - It refers to how
            involved and informed patients are in managing their own health.
            Engaged patients are more likely to follow treatment plans, attend
            appointments, and make informed decisions about their care. For
            clinics, higher patient engagement leads to better outcomes,
            improved patient loyalty, and reduced operational costs.
          </div>
        </div>

        <div className="flex flex-col gap-[21px] md:gap-[41px] xl:gap-[61px]">
          <div className="text-base font-bold md:text-xl">
            Let’s explore how chatbots are playing a key role in achieving this
            :
          </div>
          <ul className="flex list-decimal flex-col gap-[30px] pl-[15px] text-sm md:gap-[45px] md:text-base xl:gap-[61px]">
            <li className="font-bold">
              All Customer Info in One Place
              <p className="font-normal">
                With CRM, you no longer need to search through emails,
                spreadsheets, or notes. It stores all customer details in one
                system — like contact info, past conversations, and purchases.
                This helps your team:
                <br />
                <br />✅ Work faster and smarter <br />✅ Give better customer
                service
                <br />✅ Avoid mistakes or missed messages
              </p>
            </li>
            <li className="font-bold">
              Better Customer Service
              <p className="font-normal">
                A CRM system helps you stay in touch with customers at the right
                time. You can set reminders, send follow-up emails, and track
                every interaction. This makes customers feel valued and improves
                their overall experience.
                <br />
                <br />✅ Happy customers are more likely to stay and recommend
                your business to others.
              </p>
            </li>
            <li className="font-bold">
              Stronger Teamwork
              <p className="font-normal">
                CRM helps your sales, marketing, and support teams work
                together. Everyone can see customer updates in real time. This
                avoids confusion and makes sure the whole team is on the same
                page.
              </p>
            </li>
            <li className="font-bold">
              Higher Sales and More Leads
              <p className="font-normal">
                CRM tools make it easier to track leads, follow up, and close
                sales. You can see which deals are in progress, which need
                attention, and where new opportunities are coming from. This
                helps your team focus on the right leads and convert them
                faster.
              </p>
            </li>
            <li className="font-bold">
              Smarter Business Decisions
              <p className="font-normal">
                CCRM gives you reports and insights that show how your business
                is doing. You can see:
                <br />
                <br />✅ Which products or services sell best <br />✅ What your
                customers need <br /> ✅ How your team is performing <br />✅
                This helps you make better choices and plan for growth.
              </p>
            </li>
            <li className="font-bold">
              Saves Time with Automation
              <p className="font-normal">
                CRM can automate everyday tasks like sending welcome emails,
                booking meetings, or updating contact lists. This saves time and
                lets your team focus on more important work.
              </p>
            </li>
            <li className="font-bold">
              Ready to Grow with You
              <p className="font-normal">
                As your business grows, managing customers becomes harder. A CRM
                system grows with you, handling more users, more customers, and
                more data — without slowing down.
              </p>
            </li>
          </ul>

          <div className="text-sm font-normal md:text-base">
            <div className="font-bold">Final Thoughts</div>
            <br />
            <br />
            ✅ Understand your customers <br />✅ Improve your service <br />
            ✅ Increase sales <br /> ✅ Save time <br /> ✅ Work better as a
            team
            <br />
            <br />
            If you’re still using spreadsheets or notebooks to manage customers,
            it’s time to upgrade. A good CRM system can take your business to
            the next level.
          </div>
        </div>
      </div>
    </>
  );
}
