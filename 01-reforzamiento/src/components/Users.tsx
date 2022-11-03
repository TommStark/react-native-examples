import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes';

export const Users = () => {


    const { users, nextPage, prevPage}  = useUsers();

    const renderItem = (user:User) => {
        return(
            <tr key={user.id.toString()}>
                <th>
                    <img src={user.avatar}  alt={user.first_name} style={{width:40, borderRadius:100}}/>
                </th>
                <th>{user.first_name}</th>
                <th>{user.email}</th>
            </tr>
        )
    }
    
  return (
    <>
        <h3>
            Users:
        </h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => 
                        renderItem(user)
                    )
                }
            </tbody>
        </table>
        <button
         className='btn btn-primary'
         onClick={() => prevPage()}
        >
            previous
        </button>
         &nbsp;
        <button
         className='btn btn-primary'
         onClick={() => nextPage()}
        >
            nexts
        </button>
    </>
  )
}
