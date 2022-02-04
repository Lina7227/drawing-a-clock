import React from 'react';


function Main(props) {

    const [listName, setListName] = React.useState('');

    // function hanleChangeListName(evt) {
    //     setListName(evt.target.value);
    // }

    React.useEffect(() => {
        setListName('');
    }, [])

    function handleClick() {

        props.onAddFile ({
            listName
    
        });

    }

   

    return (
        <>
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
                    {props.lists.map((index) => (
                        
                        <li 
                            key={index}
                            className="list__item"
                        >новая картинка</li>
                    ))}

                </ul>
            </section>


        </main>

        </>
    );
}

export default Main;