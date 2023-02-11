import BurgirSmall from '../images/icons/burgirS.png';
import BurgirBig from '../images/icons/burgir.png';
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
                <button className='px-6 py-4 italic'>O nas</button>
                <button className='px-6 py-4 italic'>Godziny Otwarcia</button>
                <button className='px-6 py-4 italic'>Kontakt</button>
                <button className='px-6 py-4 italic'><a href='/galery'>Galeria</a></button>
            </div>
            <div className=' md:hidden p-4 bg-primary text-primary text-2xl'>
                <div className='flex justify-between py-4'>
                    <h2 className="sm:text-5xl">
                        Twój Styl
                    </h2>
                    <button ref={hamburgerIcon} 
                        onClick={toggleHamburger} >
                        <img className='sm:hidden block' src={BurgirSmall} />
                        <img className='sm:block hidden' src={BurgirBig} />
                    </button>
                </div>
                <div ref={hamburgerMenu} className='sm:text-3xl hidden flex-col absolute z-10 bg-primary left-0 w-full px-4 py-4'>
                    <button className='text-left py-3'>O nas</button>
                    <button className='text-left py-3'>Godziny Otwarcia</button>
                    <button className='text-left py-3'>Kontakt</button>
                    <button className='text-left py-3'>Galeria</button>
                </div>
            </div>
        </div>
       );
}