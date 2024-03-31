import ImagePart from "../ImagePart/ImagePart";

interface HeaderTitleProps {
        Title: string;
        isShortViewport: boolean;
}
export default function HeaderTitle(props: HeaderTitleProps) {
        return (
                <div className="flex items-center space-x-2 px-6 py-5 bg-custom-gray border-r border-gray-200" style={{ minHeight: props.isShortViewport ? '50px' : "60px", maxHeight: '100px', height: '8vh', width: '50%' }}>
                        <div className="flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                                <ImagePart src="img/icon/writing.svg" className="gray-filter" width={40} height={40} />
                        </div>
                        <h1 className="font-sans text-2xl font-medium leading-tight text-left" style={{ fontSize: 'calc(1rem + 0.5vw)' }}>{props.Title}</h1>
                </div>
        )
}


