interface TextAreaProps {
        Value: string;
        setValue: (value: string) => void;
        characterLimit?: number;
        label: string;
}
export default function TextArea(props: TextAreaProps) {
        return (
                <>
                        <label htmlFor="targetText" className="block font-medium text-sm leading-5 text-custom-dark mb-2">{props.label}</label>
                        <textarea
                                id="targetText"
                                className="form-textarea mt-1 block w-[35rem] border-2 border-gray-300 rounded-lg p-4 text-lg text-gray-700 placeholder-gray-400 bg-[#F8F8F8]"
                                rows={9}
                                placeholder="paste your text that you wish to rewrite or improve ... "
                                value={props.Value}
                                onChange={(e) => props.setValue(e.target.value.slice(0, props.characterLimit))}
                        ></textarea>
                </>
        )
}