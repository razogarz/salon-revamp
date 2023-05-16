/* 
    RENDER ALL IMAGES IN THE GALLERY
*/
function renderGallery(){
    let gallery = [];
    for(let i = 1; i <= 42; i++){
        gallery.push(
            <a href={`src/images/mini-img/pic${i}.jpg`}>
                <img src={`src/images/mini-img/pic${i}.jpg`}/>
            </a>
        );
    }
    return gallery;
}
export default function PhotoGallery() {
    return (
        <div id="photoGallery" className='flex flex-wrap'>
            {renderGallery()}
        </div>
    );
}