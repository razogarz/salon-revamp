/* 
    RENDER ALL IMAGES IN THE GALLERY
*/
import images from './images'


function renderGallery() {
    let gallery: any = [];
    let index = 1;
    images.forEach((image) => {
        gallery.push(
            <div className="w-2/5 m-4 shadow-2xl md:w-1/6" key={index}>
                <a href={image}>
                    <img src={image} />
                </a>
            </div>
        );
        index++;
    });

    return gallery;
}
export default function PhotoGallery() {
    return (
        <div id="photoGallery" className='flex flex-wrap justify-center bg-slate-200'>
            {renderGallery()}
        </div>
    );
}