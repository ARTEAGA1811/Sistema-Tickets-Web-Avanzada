import Link from 'next/link'
import Layout from '../components/Layout'
import Login from "../components/Login";
import {useState} from "react";
import PrincipalTickets from "../components/PrincipalTickets";
import SeccionDerecha from "../components/SeccionDerecha";
import Registro from "../components/Registro";

const IndexPage = () => {
    const [estaLogeado, setEstaLogeado] = useState(false);

    return (
        <>
            {estaLogeado ?
                <Layout title={"Menú principal"}>
                    <SeccionDerecha/>
                </Layout>
                :
                // <Login/>
                <Registro/>
            }
        </>
    )
}
export default IndexPage
