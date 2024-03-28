import { historyData } from "@/Event/Event";
import ImagePart from "../Shared/ImagePart/ImagePart";
import SearchPart from "../Shared/SearchPart/SearchPart";
import ButtonPart from "../Shared/ButtonPart/ButtonPart";

interface HistoryWindowProps {
        isVisible: boolean;
        onClose: any;
}
export default function HistoryWindow(props: HistoryWindowProps) {
        if (!props.isVisible) {
                return null;
        }
        return (
                <div className="absolute inset-y-0 top-20 right-0 bg-[#F8F8F8] p-6 overflow-y-auto w-1/6 z-50">
                        <div className="flex justify-between items-center mb-4">
                                <SearchPart />
                                <button className="pl-2" onClick={props.onClose}>
                                        <ImagePart src="img/icon/close.svg" width={20} height={20} />
                                </button>
                        </div>
                        <div className="space-y-4">
                                {historyData.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                                                <div className="flex flex-col flex-grow">
                                                        <div className="flex justify-between items-center h-10">
                                                                <span className="text-xs leading-5 text-gray-900">{item.content}</span>
                                                                <div className="flex items-center space-x-2">
                                                                        <ButtonPart className="hover:bg-[#F2EEFD] hover:p-1.5 rounded-lg transition-opacity duration-300" IdName={"pin"}>
                                                                                <ImagePart src="img/icon/pin.svg" width={15} height={15} className="" />
                                                                        </ButtonPart>
                                                                        <ButtonPart className="hover:bg-[#F2EEFD] hover:p-1.5 rounded-lg transition-opacity duration-300" IdName={"save"}>
                                                                                <ImagePart src="img/icon/save.svg" width={15} height={15} className="" />
                                                                        </ButtonPart>
                                                                        <ButtonPart className="hover:bg-[#F2EEFD] hover:p-1.5 rounded-lg transition-opacity duration-300" IdName={"trash"}>
                                                                                <ImagePart src="img/icon/trash.svg" width={15} height={15} className="" />
                                                                        </ButtonPart>
                                                                </div>
                                                        </div>
                                                        <div className="flex justify-between items-center mt-2">
                                                                <span className="text-xs leading-5 text-gray-400">{item.description}</span>
                                                                <span className="text-xs leading-5 text-gray-400">{item.timestamp}</span>
                                                        </div>
                                                </div>
                                        </div>
                                ))}
                        </div>
                </div>
        )
}