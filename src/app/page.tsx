import TableContent from "@/components/tableContent/tableContent";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
     <h1 className={`text-2xl font-bold p-4 `}>Countries of the World</h1>
     {/** Table of content */}
     <div className="md:grid h-full w-full">
      <TableContent />
     </div>
    </div>
  );
}
