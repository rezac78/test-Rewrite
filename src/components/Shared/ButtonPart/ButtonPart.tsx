interface ButtonPartProps {
        className?: string;
        children?: React.ReactNode;
        IdName: string;
        Click?: () => void;
}
export default function ButtonPart(props: ButtonPartProps) {
        return (
                <button aria-label={props.IdName} onClick={props.Click} className={props.className}>
                        {props.children}
                </button>
        )
}