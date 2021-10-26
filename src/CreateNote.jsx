import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{

    const [expand,setExpand] = useState(false);

    const[note,setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent = (event) =>{
        const value=event.target.value;
        const name=event.target.name;
        setNote((prevData) =>{
            return{
                ...prevData,
                [name]:value,
            }
        });
    }

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    };

    const expandIt = () =>{
        setExpand(true);
    }

    const shrinkIt = () =>{
        setExpand(false);
    }

    return(<>
        <div className='main_note' onDoubleClick={shrinkIt}>
            <form>
                {expand ?
                <input type='text' name="title" value={note.title} onChange={InputEvent}  placeholder='Title' autoComplete='off' /> : null}
                <textarea rows='' name="content" value={note.content} onClick={expandIt} onChange={InputEvent} column='' placeholder='Write a note'></textarea>
                <Button onClick={addEvent}>
                    <AddIcon className='plus_sign'></AddIcon>

                </ Button>
                
            </form>
        </div>
        
    </>);
}

export default CreateNote;