import BalanceCircle from "./icons/BalanceCircle";
import BalanceIcon from "./icons/BalanceIcon";
import BalanceNet from "./icons/BalanceNet";
import BalanceText from "./icons/BalanceText";

export default function Balance() {
  return (
    <div className="px-[120px]">
      <div className=" flex w-[384.124px] h-[219.659px] bg-[#0166FF] rounded-[18px] relative">
        <div className="p-[32px] flex gap-[8.23px] justify-center items-center absolute bottom-[130px]">
          <BalanceIcon /> <BalanceText />
        </div>
        <div className="p-[32px] absolute top-[100px]">
          <p>Cash</p>
          <p className="text-[#FFFFFF] text-[24px]">10,000,00</p>
        </div>
        <div className="absolute left-[160px] top-[25px]">
          <BalanceCircle />
        </div>
        <div className="absolute top-[155px]  left-[305px]">
          <BalanceNet />
        </div>
      </div>
    </div>
  );
}
