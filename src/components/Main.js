import React from 'react';
import Canvas from './Canvas';


function Main(props) {

    const [listName, setListName] = React.useState('');

    // function hanleChangeListName(evt) {
    //     setListName(evt.target.value);
    // }

    // React.useEffect(() => {
    //     setListName('');
    // }, [])

    function handleClick(evt) {

        props.onAddFile ({
            listName
    
        });

    }

    // const saveFile = async (blob) => {
    //     const a = document.createElement('a');
    //     a.download = 'my-file.png';
    //     a.href = URL.createObjectURL(blob);
    //     a.addEventListener('click', (e) => {
    //       setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    //     });
    //     a.click();
    //   };
      
      
      
    //   const canvas = Canvas;
    //   const blob = new Blob([JSON.stringify(canvas)], {type : 'application/json'});
      
    //   saveFile(blob);

    // const canvas = Canvas;
   
    
    // const now = new Date().toLocaleTimeString();
    // const canvasName = now;

    // localStorage.setItem(canvasName, canvas.toDataURL());

    // const dataURL = localStorage.getItem(canvasName);
    // const img = new Image;
    // img.src = dataURL;
    // img.onload = function () {
    //     canvas.drawImage(img, 0, 0);
    // };

   

    return (
        <main className="content">
            
            <section className="promo">
                <h1 className="promo__title">Нарисуйте часы</h1>
                <div className="promo__field"></div>
                <div className="promo__container-btn">
                    <h2 className="promo__subtitle">Сохраненные записи</h2>
                    <button 
                        className="promo__button"
                        type="submit"
                        aria-label="сохранить файл"
                        onClick={handleClick}
                        >
                        Сохранить
                    </button>
                </div>

                <ul className="list">
                    {props.lists.map(() => (
                        
                        <li  className="list__item">новая картинка</li>
                    ))}

                </ul>
            </section>


        </main>
    );
}

export default Main;