import {
  HomeOutlined,
  FileAddOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { RxHamburgerMenu } from "react-icons/rx";
const Sidebar = () => {
  return (
   <div className="w-10 bg-blue-900 text-white h-screen flex flex-col items-center mt-2 space-y-8">

       

      <div className="flex flex-col items-center space-y-4 text-lg mt-2">
        <RxHamburgerMenu className="cursor-pointer hover:text-blue-300"/>
        <HomeOutlined className="cursor-pointer hover:text-blue-300" />
        <FileAddOutlined className="cursor-pointer hover:text-blue-300" />
        <FileTextOutlined className="cursor-pointer hover:text-blue-300" />
        <CheckCircleOutlined className="cursor-pointer hover:text-blue-300" />
        <BarChartOutlined className="cursor-pointer hover:text-blue-300" />
        <SettingOutlined className="cursor-pointer hover:text-blue-300" />
      </div>
    </div>
  );
};

export default Sidebar;
