import { useCopyToClipboard } from "usehooks-ts";
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp, AiOutlineCopy } from "react-icons/ai";

export default function ContactItems() {
  const [value, copy] = useCopyToClipboard();

  return (
    <div className="flex flex-col w-full items-center text-grey text-2xl">
      <address className="flex flex-col items-center">
        <p>Phone</p>
        <div className="flex max-sm:flex-col items-center my-5">
          <AiOutlinePhone className="text-5xl" />
          <strong className="text-green mx-5 max-sm:mt-1 max-sm:text-xl">
            <a href="tel:+5524999492709">+55 24 99949-2709</a>
          </strong>
          <button onClick={() => copy('+5524999492709')}>
            <AiOutlineCopy className="text-xl ml-1 hover:text-green" />
          </button>
        </div>
        <p>Message</p>
        <div className="flex max-sm:flex-col items-center my-5">
          <AiOutlineWhatsApp className="text-5xl" />
          <strong className="text-green mx-5 max-sm:mt-1 max-sm:text-xl">
            <a href="https://wa.me/5524999492709" target="_blank">+55 24 99949-2709</a>
          </strong>
          <button onClick={() => copy('+5524999492709')}>
            <AiOutlineCopy className="text-xl ml-1 hover:text-green" />
          </button>
        </div>
        <p>Email</p>
        <div className="flex max-sm:flex-col items-center my-5">
          <AiOutlineMail className="text-5xl" />
          <strong className="text-green ml-5 max-sm:mt-1 max-sm:text-xl">
            <a href="mailto:ronaldverissimo@hotmail.com" target="_blank">ronaldverissimo@hotmail.com</a>
          </strong>
          <button onClick={() => copy('ronaldverissimo@hotmail.com')}>
            <AiOutlineCopy className="text-xl ml-1 hover:text-green" />
          </button>
        </div>
      </address>
    </div>
  );
}
