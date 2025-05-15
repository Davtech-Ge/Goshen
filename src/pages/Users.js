import React from 'react'

const Users = () => {
  return (
    <div className='bg-black text-white py-2 px-8 '>
      <div>
        <h1 className='text-2xl font-bold text-white'>Users</h1>
      </div>

      <div>
        <table className='w-full mt-4'>
          <thead>
            <tr>
              <th className='text-left py-2'>ID</th>
              <th className='text-left py-2'>Name</th>
              <th className='text-left py-2'>Email</th>
              <th className='text-left py-2'>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample */}
            <tr>
              <td className='py-2'>1</td>
              <td className='py-2'>Dave</td>
              <td className='py-2'>DavidGeorgechigoziri@gmail.com </td>
              <td className='py-2'>Admin</td>
              <td className='py-2'><button>Edit</button></td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users