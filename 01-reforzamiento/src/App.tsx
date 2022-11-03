import React from 'react'
import { BasicTypes } from './typescript/BasicTypes'
import Functions from './typescript/Functions'
import ObjectLiterals from './typescript/ObjectLiterals'
import { Counter } from './components/Counter';
import { HookCounter } from './components/HookCounter';
import { Login } from './components/Login';
import { Users } from './components/Users';
import { Forms } from './components/Forms';

const App = () => {
  return (
    <div
    className='mt-2'>
        <h1> Ejercicios basicos de typeScript</h1>
        <hr/>
        <Forms/>
        <Login/>
        <Users/>
        <BasicTypes/>
        <ObjectLiterals/>
        <Functions/>
        <Counter/>
        <HookCounter/>
      </div>
  )
}

export default App