import ImagePart from "../ImagePart/ImagePart";

interface SearchPartProps {
        className: string;
}
export default function SearchPart(props: SearchPartProps) {
        return (
                <div className={props.className}>
                        <input
                                type="text"
                                className="pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:ring-purple-500 focus:border-purple-500 block w-full"
                                placeholder="Search..."
                        />
                        <div className="absolute left-3 top-3">
                                <ImagePart src="img/icon/search.svg" width={20} height={20} />
                        </div>
                </div>
        )
}