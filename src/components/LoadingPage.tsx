import { Oval } from "react-loader-spinner";

interface LoadingPageProps {
  info: string
}

export default function LoadingPage(info: LoadingPageProps) {
  return (<div className="flex flex-col items-center justify-center">
    <Oval
      height={80}
      width={80}
      color="#59e0a5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4B88A2"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
    <h5 className="text-xl text-white mt-5">Loading { info.info }...</h5>
  </div>
  );
}
