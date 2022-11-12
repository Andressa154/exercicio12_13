import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function listarTodosUsuarios() {

    const [Listar, setListar] = useState('');
    
    

    async function handlelistar(e) {
        e.preventDefault();

        const data = {
            Listar:Listar
           
        }

        const update = await ClientUsers.listarTodosUsuarios(data);
        if (update.status === 200) {
            toast.success('Usuários listados com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />
            <li>

            <div className="content">
                <Title name="Listar Usuários">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handlelistar}>
                        
                        <label>Listar</label>
                        <input type="text" value={Listar} onChange={(e) => setListar(e.target.value)} />


                        <button type="submit">Listar Usuários</button>
                    </form>
                </div>
            </div>
            </li>
        </div>
    )
}