import BurgirSmall from '../images/burgirS.png';
import BurgirBig from '../images/burgir.png';
import { useRef, createRef } from 'react';

let hamburgerIcon = createRef<HTMLButtonElement>();
let hamburgerMenu = createRef<HTMLDivElement>();
function toggleHamburger(){
    console.log('click');
    if(hamburgerMenu.current?.classList.contains('hidden')){
        hamburgerMenu.current?.classList.remove('hidden');
        hamburgerMenu.current?.classList.add('flex');
    } else {
        hamburgerMenu.current?.classList.add('hidden');
        hamburgerMenu.current?.classList.remove('flex');
    }
}
export default function Navbar() {
    return (
        <div className='mb-0'>
            <div className='lg:text-4xl md:text-2xl md:block hidden m-auto bg-primary text-primary text-center'>
                <button className='px-6 py-4'>O nas</button>
                <button className='px-6 py-4'>Godziny Otwarcia</button>
                <button className='px-6 py-4'>Kontakt</button>
                <button className='px-6 py-4'>Galeria</button>
            </div>
            <div className=' md:hidden p-4 bg-primary text-primary text-2xl'>
                <div className='flex justify-between py-3'>
                    <p className='sm:text-4xl'>
                        Twój Styl
                    </p>
                    <button ref={hamburgerIcon} 
                        onClick={toggleHamburger} >
                        <img className='sm:hidden block' src={BurgirSmall} />
                        <img className='sm:block hidden' src={BurgirBig} />
                    </button>
                </div>
                <div ref={hamburgerMenu} className='hidden flex-col'>
                    <button className='text-left py-3'>O nas</button>
                    <button className='text-left py-3'>Godziny Otwarcia</button>
                    <button className='text-left py-3'>Kontakt</button>
                    <button className='text-left py-3'>Galeria</button>
                </div>
            </div>
        </div>
       );
}