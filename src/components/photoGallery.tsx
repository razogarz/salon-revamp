/* 
    RENDER ALL IMAGES IN THE GALLERY
*/
import placeholderImage from '../images/mini-img/pic1.jpg';


function renderGallery() {
    let gallery = [];
    for (let i = 1; i <= 42; i++) {
        gallery.push(
            <div className="w-2/5 m-4 shadow-2xl md:w-1/6" key={i}>
                <a href={placeholderImage}>
                    <img src={placeholderImage} />
                </a>
            </div>
        );
    }
    return gallery;
}
export default function PhotoGallery() {
    return (
        <div id="photoGallery" className='flex flex-wrap justify-center bg-slate-200'>
            {renderGallery()}
        </div>
    );
}