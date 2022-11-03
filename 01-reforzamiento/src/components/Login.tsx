import { useEffect, useReducer } from "react"

interface AuthState{
    validando   :boolean;
    token       : string | null;
    userName    : string;
    name        : string;

}

const initialState:AuthState = {
    validando: true,
    token : null, 
    userName: '',
    name: '',
}

type LoginPayload = { userName:string, name:string}

type AuthAction = 
        | { type    : 'logout' }
        | { type    : 'login', payload:LoginPayload};


const authReducer = ( state:AuthState , action:AuthAction):AuthState => {

    switch (action.type) {
        case 'logout':
                return{
                    validando: false,
                    token: null,
                    name: '',
                    userName:'',
                }
        
        case 'login':
            const{name, userName} = action.payload;
            return{
                ...state,
                token: 'ABC123',
                name,
                userName
            }
    
        default:
            return state;
    }
}

export const Login = () => {

    const [{validando, token, name}, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({type:'logout'})
        }, 1500);
    }, []);

    const logout = () => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 500);
    }

    const login = () => {
        dispatch({type: 'login', payload:{ userName:'tommstark',name:'tomito'}})
    }

    if(validando){
        return(
            <>
                <h3> Login </h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3> Login </h3>
            {       
                (token)
                    ? <div className="alert alert-success"> Auth como { name } </div>
                    : <div className="alert alert-danger"> No auth!!! </div>
            }
            {       
                (token)
                    ? 
                        <button className="btn btn-danger" onClick={logout}>
                            logOut
                        </button>
                    :             
                        <button className="btn btn-primary" onClick={login}>
                            login
                        </button>
            }
        </>
    )
}
