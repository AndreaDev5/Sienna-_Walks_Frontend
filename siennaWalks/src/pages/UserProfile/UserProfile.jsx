import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div>
      <h1>Perfil de usuario</h1>
      <Link to={'/editar-perfil'}>Editar Perfil</Link>
    </div>
  )
}

export default UserProfile
