import { historyData, HistoryWindowIcons } from "@/Event/Event";
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
                <div className="absolute top-20 inset-y-0 right-0 bg-[#F8F8F8] p-6 min-w-[300px] w-1/6 z-50 overflow-y-auto">
                        <div className="flex justify-between items-center">
                                <SearchPart className="relative flex-grow" />
                                <button className="pl-2" onClick={props.onClose}>
                                        <ImagePart src="img/icon/close.svg" width={20} height={20} />
                                </button>
                        </div>
                        <div className="border-t border-gray-300 my-5"></div>
                        <div className="space-y-4">
                                {historyData.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                                                <div className="flex flex-col flex-grow">
                                                        <div className="flex justify-between items-center h-8">
                                                                <span className="text-xs leading-5 text-gray-900">{item.content}</span>
                                                                <div className="flex items-center space-x-2">
                                                                        {HistoryWindowIcons.map((e) => (
                                                                                <ButtonPart key={e.id} className="" IdName={e.name}>
                                                                                        <ImagePart src={e.icon} width={15} height={15} className="" />
                                                                                </ButtonPart>
                                                                        ))}
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