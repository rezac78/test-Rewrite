import Image from 'next/image';
interface ImageProps {
        src: string;
        width: number;
        height: number;
        className?: string;
}
export default function ImagePart(props: ImageProps) {
        return (
                <Image
                        src={props.src}
                        alt="Not Found"
                        width={props.width}
                        height={props.height}
                        className={`${props.className}`}
                />
        )
}