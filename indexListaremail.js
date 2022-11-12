import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function listarEmail() {

    const [nome, setNome] = useState('');

    async function handleListar(e) {
        e.preventDefault();

        const data = {
            nome: nome,
        }

        const update = await ClientUsers.listarEmail(data);
        console.log('update', update);
        if (update.status === 200) {
            toast.success('Email listado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar email">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleListar}>

                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                        <button type="submit">Listar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}