import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';


export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    const pageRef = useRef(1)
    console.log('pageRef: ', pageRef.current);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const res = await reqResApi.get<ReqResList>('/users',
        {params:
            { 
                page:pageRef.current,
            }
        });

        if ( res.data.data.length > 0 ){
            setUsers(res.data.data);
        }else{
            pageRef.current --;
            alert('no mas registros');
        }
    }

    const nextPage = () => {
        pageRef.current ++;
        loadUsers();
    };
    
    const prevPage = () => {
        if(pageRef.current === 1){
            return
        }
        pageRef.current --;
        loadUsers();
    }

    return {
        users,
        nextPage,
        prevPage
    }
}
