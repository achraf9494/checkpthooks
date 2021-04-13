import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Rating from '../Rating';


    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

      Modal.setAppElement('#root')
      const AddMovies = ({handleAdd}) => {
        
        const [modalIsOpen,setIsOpen] = React.useState(false);
        function openModal() {
          setIsOpen(true);
        }
        function closeModal(){
          setIsOpen(false);
        }
       
        const [form, setForm] = useState({
            name:'',
            date:'',
            rating:'',
            image:'',
        })
        const handleChangeName =(e) => {
            setForm({...form,name: e.target.value})
        }
        const handleChangeMovie=(e) => {
            setForm({...form,date: e.target.value})
        }
        // const handleChangeRating =(e) => {
        //     setForm({...form,rating: e.target.value})
        // }
        const handleChangePoster =(e) => {
            setForm({...form,image: e.target.value})
        }
        // handle rating
  const handleRate = (rate) => setForm({ ...form, rating: rate });
    return (
        <div>
            <button onClick={openModal}> Add movie
            </button>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}>
        
        <form onSubmit={(e)=> e.preventDefault(e) } >
            <label >Moviename</label>
            <input type="text" value={form.name} onChange={(e)=>handleChangeName(e)}/>
            <label >Releasemovie</label>
            <input type="date" value={form.date} onChange={(e)=>handleChangeMovie(e)}/>
            <label> Rating </label>
            <Rating rate={form.rating} handleRating={handleRate} />
          {/* <Rating value={form.rating} handleRating={handleChangeRating} /> */}
            {/* <p>rating</p>
            <input type="number" value={form.rating} onChange={(e)=>handleChangeRating(e)}/> */}
            <label >Movieposter</label>
            <input type="url" value={form.image} onChange={(e)=>handleChangePoster(e)}/>
            <div>
                <button onClick={()=> handleAdd(form)} >Add</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </form>
        </Modal>
        </div>
    )
}

export default AddMovies
