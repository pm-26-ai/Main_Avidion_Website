import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
export default function ErpHelpsInBusiness() {
  return (
    <>
      <div className="container flex max-w-full flex-col items-start gap-[33px] py-[142px] text-white md:gap-[50px] xl:gap-[66px]">
        <div className="flex flex-col items-start gap-6 md:gap-[50px]">
          <Link
            href="/blogs"
            className="flex flex-row items-center gap-2 rounded-[4px] border border-[#535353] px-[11px] py-2 text-xs text-[#EDEDED] md:px-[25px] md:py-[9px] md:text-sm"
          >
            <FaArrowLeft size={18} color="#C0C0C0" strokeWidth={0.1} />
            Back To Blogs
          </Link>
          <div className="flex flex-col gap-[21px] md:gap-[34px]">
            <div className="text-xl font-medium md:text-[28px] md:leading-[46px] xl:text-4xl">
              How Does ERP Help to Manage Business Processes?
            </div>

            <div className="text-sm font-normal md:text-base">
              Running a business means handling many moving parts—sales,
              finance, inventory, HR, and more. If these parts don’t work
              together smoothly, it can slow down your growth. That’s where ERP
              (Enterprise Resource Planning) software comes in. ERP helps you
              manage your business processes in one place, making your work
              faster, easier, and more organized. Let’s see how ERP makes a
              difference.
            </div>
          </div>
        </div>
        {/* <div className="relative h-[216px] w-[400px] md:h-[370px] md:w-[650px] xl:h-[597px] xl:w-[1061px]">
          <Image
            src={"/blogs/blog-3.png"}
            className="rounded-[4px] object-cover"
            alt="ai-chatbots healthcare image"
            fill
            priority
          />
        </div> */}

        <div className="flex flex-col gap-[27px]">
          <div className="text-lg font-bold md:text-xl">What is ERP?</div>
          <div className="text-sm font-normal md:text-base">
            ERP is software that helps businesses run better by connecting
            different departments in one system. Instead of using separate tools
            for accounting, inventory, sales, and HR, ERP brings everything
            under one roof.
            <br />
            <br />
            It’s like having a smart assistant that keeps your business running
            smoothly!
          </div>
        </div>

        <div className="flex flex-col gap-[21px] md:gap-[41px] xl:gap-[61px]">
          <div className="text-base font-bold md:text-xl">
            How ERP Helps Manage Business Processes?
          </div>

          <ul className="flex list-decimal flex-col gap-[30px] pl-[15px] text-sm md:gap-[45px] md:text-base xl:gap-[61px]">
            <li className="font-bold">
              All Your Data in One Place
              <p className="font-normal">
                With ERP, your sales, accounts, and inventory data are stored in
                one system. This means less confusion, fewer mistakes, and
                faster decisions.
              </p>
            </li>
            <li className="font-bold">
              Saves Time with Automation
              <p className="font-normal">
                ERP automates everyday tasks like billing, stock updates,
                payroll, and reporting. This saves time and reduces human
                errors.
              </p>
            </li>
            <li className="font-bold">
              Better Reports and Insights
              <p className="font-normal">
                ERP gives you clear and real-time reports on sales, expenses,
                profits, and more. These insights help you make smart business
                decisions.
              </p>
            </li>
            <li className="font-bold">
              Smarter Inventory Management
              <p className="font-normal">
                No more overstocking or running out of products. ERP tracks your
                inventory levels and helps you reorder on time.
              </p>
            </li>
            <li className="font-bold">
              Improves Customer Service
              <p className="font-normal">
                With customer data in the system, your team can respond quickly
                to customer needs, process orders faster, and provide better
                support.
              </p>
            </li>
            <li className="font-bold">
              Helps You Stay Compliant
              <p className="font-normal">
                ERP systems help you follow tax laws and business regulations
                with features like digital records, audit trails, and accurate
                reports.
              </p>
            </li>
            <li className="font-bold">
              Grows With Your Business
              <p className="font-normal">
                Whether you’re a small business or growing fast, ERP can scale
                with you. You can add more users or features as your needs grow.
              </p>
            </li>
          </ul>

          <div className="text-sm font-normal md:text-base">
            <div className="font-bold">Example: ERP in Action</div>
            <br />
            <br />
            Let’s say you run a wholesale business. A customer places a big
            order. Without ERP, your sales team checks inventory in Excel, asks
            accounts for invoices, and calls the warehouse. It takes hours.
            <br />
            <br />
            With ERP, everything is connected. The system shows stock levels,
            auto-generates an invoice, and alerts the warehouse—all in minutes.
          </div>

          <div className="text-sm font-normal md:text-base">
            <div className="font-bold">Final Thoughts</div>
            <br />
            <br />
            ERP software helps businesses save time, reduce errors, and grow
            faster by managing all processes in one place. It brings better
            control, better decisions, and better results.
          </div>
        </div>
      </div>
    </>
  );
}
