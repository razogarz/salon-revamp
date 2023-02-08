import Burgir from '../images/burgirS.png';
import { useRef, createRef } from 'react';

let hamburgerIcon = createRef<HTMLButtonElement>();
let hamburgerMenu = createRef<HTMLDivElement>();
function fun(){
    console.log('siema');
}
function toggleHamburger(ev:any){
    console.log('click');
    if(hamburgerMenu.current?.classList.contains('hidden')){
        hamburgerMenu.current?.classList.remove('hidden');
    } else {
        hamburgerMenu.current?.classList.add('hidden');
    }
}
export default function Navbar() {
    return (
        <div className='text-center'>
            <div className='lg:text-4xl md:text-2xl md:block hidden m-auto bg-primary text-primary'>
                <button className='px-6 py-4'>O nas</button>
                <button className='px-6 py-4'>Godziny Otwarcia</button>
                <button className='px-6 py-4'>Kontakt</button>
                <button className='px-6 py-4'>Galeria</button>
            </div>
            <div className=' md:invisible flex justify-between p-4 bg-primary text-primary text-2xl'>
                <p>
                    Twój Styl
                </p>
                <button ref={hamburgerIcon} >
                    <img src={Burgir} onClick={fun} />
                </button>
                <div ref={hamburgerMenu} className='hidden'>
                    <button>O nas</button>
                    <button>Godziny Otwarcia</button>
                    <button>Kontakt</button>
                    <button>Galeria</button>
                </div>
            </div>
        </div>
       );
}