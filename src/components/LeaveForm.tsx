import { Form, Input, DatePicker, Switch, Button, Upload, Radio } from "antd";
import { UploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { AiOutlinePaperClip } from "react-icons/ai"; // paperclip icon
import type { UploadProps } from "antd";
import { LuCalendarCog } from "react-icons/lu";
const { TextArea } = Input;

const LeaveForm = () => {
  const uploadProps: UploadProps = {
    showUploadList: false,
    beforeUpload: (file) => {
      return false;
    },
  };
  const [form] = Form.useForm();

  const totalLeaves = 10;
  const leaveEntitlement = 10;
  const usedLeaves = 5;
  const remainingLeaves = totalLeaves - usedLeaves;
  const numberOfDays = 0;
  const nextYearUsed = 0;

  const onFinish = (values: any) => {
    const formatted = {
      ...values,
      startDate: values.startDate
        ? dayjs(values.startDate).format("YYYY-MM-DD")
        : null,
      endDate: values.endDate
        ? dayjs(values.endDate).format("YYYY-MM-DD")
        : null,
    };
    console.log("Form Submitted:", formatted);
  };

  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
        <div className="flex items-center gap-2">
          <Form.Item
            label={
              <span className="font-medium">
                Title  <span className="text-red-500">*</span>
              </span>
            }
            name="title"
            rules={[{ required: true, message: "Please enter a title" }]}
            className=" w-full "
          >
            <Input placeholder="Title" className="w-66" />
          </Form.Item>

          <LuCalendarCog className="text-xl cursor-pointer hover:text-blue-800 text-blue-500   " />
        </div>

        <div className="flex justify-between items-start">
          <label className="font-medium">
            Select Leave Type <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">Partial Day</span>
            <div className="flex items-center gap-2">
              <Form.Item name="partial" valuePropName="checked" noStyle>
                <Switch />
              </Form.Item>
              <span className="text-gray-600 text-sm">Off</span>
            </div>
          </div>
        </div>

        <Form.Item
          name="type"
          rules={[{ required: true, message: "Please select leave type" }]}
        >
          <Radio.Group className="flex flex-wrap gap-4 mt-2">
            <Radio value="PTO">PTO</Radio>
            <Radio value="Sick">Sick</Radio>
            <Radio value="Vacation">Vacation</Radio>
            <Radio value="Comp off">Comp off (off in lieu)</Radio>
          </Radio.Group>
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label={
              <span className="font-medium">
                Start Date <span className="text-red-500">*</span>
              </span>
            }
            name="startDate"
            rules={[{ required: true, message: "Please select start date" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>

          <Form.Item
            label={
              <span className="font-medium">
                End Date <span className="text-red-500">*</span>
              </span>
            }
            name="endDate"
            rules={[{ required: true, message: "Please select end date" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
        </div>

        <Form.Item label="Notes To Approver" name="notes">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="" name="attachments">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Attachments</span>

            <Upload {...uploadProps}>
              <AiOutlinePaperClip
                className="text-blue-900 cursor-pointer hover:text-blue-600 text-lg"
                title="Attach file"
              />
            </Upload>
          </div>
        </Form.Item>

        <div className="flex gap-4   ">
          <div className="space-y-4 w-1/2">
            <Form.Item
              label={
                <span>
                  Approver <InfoCircleOutlined className="ml-1 text-gray-400" />
                </span>
              }
              name="approver"
            >
              <Input defaultValue="Kushal Clayfly" />
            </Form.Item>

            <div className="flex gap-2">
              <Button className="bg-blue-900" type="primary" htmlType="submit">
                Submit
              </Button>
              <Button>Save Draft</Button>
            </div>
          </div>
          <div className="flex flex-col text-sm text-gray-700 space-y-1 w-full max-w-sm">
            <div className="flex justify-between">
              <span>Total leaves this year:</span>
              <span className="font-semibold">{totalLeaves}</span>
            </div>
            <div className="flex justify-between">
              <span>Leave entitlement:</span>
              <span className="font-semibold">{leaveEntitlement}</span>
            </div>
            <div className="flex justify-between">
              <span>Leaves remaining:</span>
              <span className="font-semibold">{remainingLeaves}</span>
            </div>
            <div className="flex justify-between">
              <span>Leaves used:</span>
              <span className="font-semibold">{usedLeaves}</span>
            </div>
            <div className="flex justify-between">
              <span>No of days:</span>
              <span className="font-semibold">{numberOfDays}</span>
            </div>
            <div className="flex justify-between">
              <span>Next year used leave:</span>
              <span className="font-semibold">{nextYearUsed}</span>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default LeaveForm;
