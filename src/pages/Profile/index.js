import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);

    function handleSubmit() {}

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo" />
                <Input name="email" type="email" placeholder="E-mail" />

                <hr />
                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar nova senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="button">Sair do GoBarber</button>
        </Container>
    );
}
