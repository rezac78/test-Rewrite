interface ToggleButtonProps {
        isEnabled: boolean;
        toggleEnabled: any;
}
export default function ToggleButton(props: ToggleButtonProps) {
        return (
                <>
                        <div className="flex items-center">
                                <button
                                        onClick={props.toggleEnabled}
                                        className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${props.isEnabled ? 'bg-blue-600 justify-end' : 'bg-gray-200 justify-start'
                                                }`}
                                >
                                        <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                                </button>
                                <span className="ml-3 font-medium text-sm leading-5 text-custom-dark">Advanced</span>
                        </div>
                        <div className="text-base font-normal leading-6 text-gray-400 px-14">
                                More access for more accurate results.
                        </div>
                </>
        )
}