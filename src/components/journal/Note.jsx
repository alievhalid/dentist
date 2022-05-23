import React, {useEffect} from 'react';
import style from "./note.module.scss"

const Note = ({doctor, time, notes, patients}) => {
    const doctorNote = notes.find(item => {
        if (item.doctor == doctor._id && item.visitTime == time.time){

            return item
        }

    })

    console.log(doctorNote)


    return (
        <div className={style.note} draggable>
            <span className={style.note__time}>{time.time}</span>{doctorNote?.recordType}
        </div>
    );
};

export default Note;