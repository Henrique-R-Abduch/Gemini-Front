import Image from 'next/image'

export default function Home() {
  return (
    <><nav className="bg-slate-800 items-center justify-between px-8 py-6">
      <ul className='flex items-end gap-16'>
        <li><a href="#"><h1 className='text-2xl'>Stock Helper</h1></a></li>
        <li className='flex'><a href="#">Settings</a></li>
        <li className='flex'><a href="#">Logout</a></li>
      </ul>
    </nav>
    
    <main className='container bg-slate-800 flex mt-16 mx-auto rounded p-4 items-center'>
      <div className='h-10 w-10 rounded-full overflow-hidden'>
        <img src="https://github.com/Henrique-R-Abduch.png" alt="avatar do usuário"></img>
      </div>
      <h2 className='font-bold justify-end mx-4'>Bem Vindo</h2>
      </main>
      <div className=''>
        <ul className='justify-around flex-column gap-16 container bg-slate-800 mt-16 mx-auto rounded p-4 items-center font-serif'>
          <li className='bg-slate-600 p-10 rounded mx-2 my-2 justify-center flex'><a href="#">Product Registration</a></li>
          <li className='bg-slate-600 p-10 rounded mx-2 my-2 justify-center flex'><a href="#">Inventory Management</a></li>
          <li className='bg-slate-600 p-10 rounded mx-2 my-2 justify-center flex'><a href="#">Transaction Logging</a></li>
          <li className='bg-slate-600 p-10 rounded mx-2 my-2 justify-center flex'><a href="#">Categories And Tags</a></li>
          <li className='bg-slate-600 p-10 rounded mx-2 my-2 justify-center flex'><a href="#">Shipment Tracking</a></li>
        </ul>
      </div>
      <div>
        <footer className=' bg-slate-800 flex mt-16 mx-auto rounded p-4 items-center justify-center'>
          <h3>Stock Helper®</h3>
        </footer>
      </div>
    
    </>
  )
}
