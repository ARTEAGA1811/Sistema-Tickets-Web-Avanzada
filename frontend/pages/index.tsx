import Link from 'next/link'
import Layout from '../components/Layout'
import Login from "../components/Login";
import {useState} from "react";
import Principal from "../components/Principal";

const IndexPage = () => {
    const [estaLogeado, setEstaLogeado] = useState(true);

    return (
        <>
            {estaLogeado ?
                <Layout title={"Menú principal"}>
                    <Principal/>
                </Layout>
                :
                <Login/>
            }
        </>
    )
}
export default IndexPage
