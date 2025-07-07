interface Props {
  type: string;
  used: number;
  total: number;
}

export default function LeaveCard({ type, used, total }: Props) {
  return (
    <div
      className={`rounded-lg text-white px-14 py-1  text-center shadow ${"bg-blue-900"}`}
    >
      <p className="text-xl font-semibold  ">
        {used}/{total}
      </p>
      <p className="text-sm -ml-15 ">{type}</p>
    </div>
  );
}
