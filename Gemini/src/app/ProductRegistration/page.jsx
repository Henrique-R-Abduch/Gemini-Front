import Button from '@/components/button'
import NavBar from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/solid'
import DataRow from './datarow'

export default function PageRegistration() {
  //mock
  const categorias = [
    
  ]
  return (
    <><NavBar />
    
      <main className="justify-center gap-16 container  bg-slate-800 mt-16 mx-auto rounded p-4 items-center max-w-xl">
        <div className='flex justify-between'>
          <h2 className='text-xl font-bold'>Product Registration</h2>
          <Button href="/productregistration/new" icon={<PlusIcon className="h-6 w-6 text-white" />}> 
            
            Cadastrar
          </Button>
        </div> 
          <div>
                  <div id="data-row" className='flex justify-between'>
                  <span>ID</span>
                  <span>Tipo</span>
                  <span>Data compra</span>
                  </div>

            
          </div>
      </main>
 
    </>
  )
}
