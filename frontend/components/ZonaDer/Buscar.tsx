import lupa from '../../assets/lupa.png';
import st from '../../styles/principal.module.css'
export default function Buscar() {
    return (
        <div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text me-0"><img src={lupa.src} alt={"lupa"} className={st.imgLupa}/></span>
                </div>
                <input type="text" className="form-control" placeholder="Buscar..."/>
            </div>
        </div>
);
}