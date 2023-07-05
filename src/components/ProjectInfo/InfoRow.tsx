interface InfoRowProps {
  projectInfoField: string,
  projectInfoValue: string | boolean
}

export default function InfoRow(props: InfoRowProps) {
  return (
    <div className="flex w-3/5 max-xl:w-5/6 max-sm:w-11/12 max-sm:flex-col max-sm:mb-5 text-lg my-2 items-center">
      <div className="flex items-center">
        <span className="text-green mr-2 text-2xl font-black"> &gt; </span>
        <h5 className="mr-2">{ props.projectInfoField }:</h5>
      </div>
      <p className="max-sm:text-center">
        { typeof props.projectInfoValue === "boolean" ? (props.projectInfoValue ? "Done" : "In development") : props.projectInfoValue.toString() }
      </p>
    </div>
  );
}
