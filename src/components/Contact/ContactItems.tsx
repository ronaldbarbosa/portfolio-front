import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

export default function ContactItems() {
  return (
    <div className="flex flex-col w-full items-center text-grey text-2xl">
      <div className="flex flex-col items-center">
        <p>Phone</p>
        <div className="flex max-sm:flex-col items-center my-5">
          <AiOutlinePhone className="text-5xl" />
          <strong className="text-green mx-5 max-sm:mt-1 max-sm:text-xl">+5524999492709</strong>
        </div>
        <p>Message</p>
        <div className="flex max-sm:flex-col items-center my-5">
          <AiOutlineWhatsApp className="text-5xl" />
          <strong className="text-green mx-5 max-sm:mt-1 max-sm:text-xl">+5524999492709</strong>
        </div>
        <p>Email</p>
        <div className="flex max-sm:flex-col items-center my-5">
          <AiOutlineMail className="text-5xl" />
          <strong className="text-green mx-5 max-sm:mt-1 max-sm:text-xl">ronaldverissimo@hotmail.com</strong>
        </div>
      </div>
    </div>
  );
}
