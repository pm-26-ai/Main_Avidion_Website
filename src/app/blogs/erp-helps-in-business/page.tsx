import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
export default function ErpHelpsInBusiness() {
  return (
    <>
      <div className="flex flex-col items-start gap-[66px] py-[174px] text-white 2xl:px-[415px]">
        <Link
          href="/blogs"
          className="flex flex-row items-center gap-2 rounded-[4px] border border-[#535353] px-[25px] py-[9px] text-sm text-[#EDEDED]"
        >
          <FaArrowLeft size={18} color="#C0C0C0" strokeWidth={0.1} />
          Back To Blogs
        </Link>
        <div className="flex flex-col gap-[34px]">
          <div className="text-4xl font-medium">
            How Does ERP Help to Manage Business Processes?
          </div>

          <div className="text-base font-normal">
            Running a business means handling many moving parts—sales, finance,
            inventory, HR, and more. If these parts don’t work together
            smoothly, it can slow down your growth. That’s where ERP (Enterprise
            Resource Planning) software comes in. ERP helps you manage your
            business processes in one place, making your work faster, easier,
            and more organized. Let’s see how ERP makes a difference.
          </div>
        </div>

        <div className="relative h-[597px] w-[1061px]">
          <Image
            src={"/blogs/blog-3.png"}
            className="rounded-[4px] object-cover"
            alt="ai-chatbots healthcare image"
            fill
          />
        </div>

        <div className="flex flex-col gap-[27px]">
          <div className="text-xl font-bold">What is ERP?</div>
          <div>
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

        <div className="flex flex-col gap-[61px]">
          <div className="text-xl font-bold">
            How ERP Helps Manage Business Processes?
          </div>

          <ul className="flex list-decimal flex-col gap-[61px] pl-[15px]">
            <li className="text-base font-bold">
              All Your Data in One Place
              <p className="font-normal">
                With ERP, your sales, accounts, and inventory data are stored in
                one system. This means less confusion, fewer mistakes, and
                faster decisions.
              </p>
            </li>
            <li className="text-base font-bold">
              Saves Time with Automation
              <p className="font-normal">
                ERP automates everyday tasks like billing, stock updates,
                payroll, and reporting. This saves time and reduces human
                errors.
              </p>
            </li>
            <li className="text-base font-bold">
              Better Reports and Insights
              <p className="font-normal">
                ERP gives you clear and real-time reports on sales, expenses,
                profits, and more. These insights help you make smart business
                decisions.
              </p>
            </li>
            <li className="text-base font-bold">
              Smarter Inventory Management
              <p className="font-normal">
                No more overstocking or running out of products. ERP tracks your
                inventory levels and helps you reorder on time.
              </p>
            </li>
            <li className="text-base font-bold">
              Improves Customer Service
              <p className="font-normal">
                With customer data in the system, your team can respond quickly
                to customer needs, process orders faster, and provide better
                support.
              </p>
            </li>
            <li className="text-base font-bold">
              Helps You Stay Compliant
              <p className="font-normal">
                ERP systems help you follow tax laws and business regulations
                with features like digital records, audit trails, and accurate
                reports.
              </p>
            </li>
            <li className="text-base font-bold">
              Grows With Your Business
              <p className="font-normal">
                Whether you’re a small business or growing fast, ERP can scale
                with you. You can add more users or features as your needs grow.
              </p>
            </li>
          </ul>

          <div className="text-base font-normal">
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

          <div className="text-base font-normal">
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
