import BurgirSmall from '../images/icons/burgirS.png';
import BurgirBig from '../images/icons/burgir.png';
import { useRef, createRef } from 'react';

let hamburgerIcon = createRef<HTMLButtonElement>();
let hamburgerMenu = createRef<HTMLDivElement>();
let closeIcon = createRef<HTMLButtonElement>();
function toggleHamburger() {
    console.log('click');
    if (hamburgerMenu.current?.classList.contains('hidden')) {
        hamburgerMenu.current?.classList.remove('hidden');
        hamburgerMenu.current?.classList.add('flex');
        hamburgerIcon.current?.classList.add('hidden');
        closeIcon.current?.classList.remove('hidden');
        closeIcon.current?.classList.add('flex');
    } else {
        hamburgerMenu.current?.classList.add('hidden');
        hamburgerMenu.current?.classList.remove('flex');
        hamburgerIcon.current?.classList.remove('hidden');
        hamburgerIcon.current?.classList.add('flex');
        closeIcon.current?.classList.add('hidden');
        closeIcon.current?.classList.remove('flex');
    }
}
export default function Navbar() {
    return (
        <div className='m-0'>
            <div className='lg:text-4xl md:text-2xl md:block hidden m-auto bg-primary text-primary text-center'>
                <button className='px-6 py-4 italic hover:bg-secondary'><a href="#onas">O nas</a></button>
                <button className='px-6 py-4 italic hover:bg-secondary'><a href="#godziny">Godziny Otwarcia</a></button>
                <button className='px-6 py-4 italic hover:bg-secondary'><a href="#kontakt">Kontakt</a></button>
                <button className='px-6 py-4 italic hover:bg-secondary'><a href='/galery'>Galeria</a></button>
            </div>
            <div className=' md:hidden p-4 bg-primary text-primary text-2xl'>
                <div className='flex justify-between py-4'>
                    <h2 className="sm:text-5xl">
                        Twój Styl
                    </h2>
                    <button ref={hamburgerIcon}
                        onClick={toggleHamburger} >
                        <svg className='w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0
                                110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0
                                110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    <button ref={closeIcon} onClick={toggleHamburger} className='hidden'>
                        <svg className='w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M10.707 10l4.147-4.146a.5.5 0 10-.708-.708L10 9.293 5.854 5.147a.5.5 0 10-.708.708L9.293 10l-4.147 4.146a.5.5 0 10.708.708L10 10.707l4.146 4.147a.5.5 0 10.708-.708L10.707 10z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div ref={hamburgerMenu} className='sm:text-3xl hidden flex-col items-end absolute z-10 bg-primary left-0 w-full'>
                    <button className='text-right w-full border-t border-slate-500 px-4 py-9 animationClass_nav1'><a href="#onas">O nas</a></button>
                    <button className='text-right w-full border-t border-slate-500 px-4 py-9 animationClass_nav2'><a href="#godziny">Godziny Otwarcia</a></button>
                    <button className='text-right w-full border-t border-slate-500 px-4 py-9 animationClass_nav3'><a href="#kontakt">Kontakt</a></button>
                    <a className='flex justify-end w-full border-t border-slate-500 px-4' href="/galery"><button className='text-right py-9 animationClass_nav4'>Galeria</button></a>
                </div>
            </div>
        </div>
    );
}