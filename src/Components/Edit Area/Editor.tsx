import { useState, useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import JoditEditor from 'jodit-react';

type formEditor =  {
	text: string
}

interface IProps {
	placeholder: string
}

export interface IReference {
	formEditor: {
		text: string
	}
}

const EditorComponent: React.ForwardRefRenderFunction<IReference, IProps>= (props, ref) => {
	const saved = JSON.parse(localStorage.getItem('text')!)
	const editor = useRef(null);
	const [formEditor, setFormEditor] = useState<formEditor>({
		text: saved? saved.text: ''
	})

	useImperativeHandle(ref, () => ({
		formEditor
	}), [saved])

	localStorage.setItem("text", JSON.stringify({...formEditor}))


	const config: any = useMemo(()=> (
		{
			readonly: false,
			placeholder: props.placeholder || 'Start typings...',
     		height: 700,
      		allowResizeX: false,
      		allowResizeY: false,
			  style: {
				font: '16px Arial'
			   },
			   useSearch: true
			
		}),
		[props.placeholder]
  );

	return (
		<JoditEditor
				ref={editor}
				value={formEditor.text}
				config ={config}
				onBlur={e => {setFormEditor({...formEditor, text: e})}}
				onChange={newContent => {}}
			/>
	);
};


export default forwardRef(EditorComponent)