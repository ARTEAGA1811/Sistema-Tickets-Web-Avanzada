import lupa from '../../assets/lupa.png';
import st from '../../styles/principal.module.css'
import {Form, InputGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import {ITicket} from "../../interfaces";

export default function Buscar({busquedaPalabra, setBusquedaPalabra}: { busquedaPalabra: string, setBusquedaPalabra: any }) {
    //const [inputText, setInputText] = useState<string>("");

    const handleChange = (e: any) => {
        setBusquedaPalabra(e.target.value);
    }

    // useEffect(() => {
    //
    // }, [inputText])

    return (
        <InputGroup className="mb-3 text-end w-25">
            <InputGroup.Text id="basic-addon1">
                <img src={lupa.src} alt={"lupa"}
                     className={st.imgLupa}/>
            </InputGroup.Text>
            <Form.Control
                placeholder="Buscar..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleChange}
            />
        </InputGroup>
    );
}