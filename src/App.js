import { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';
import Search from './components/Search';
import Spinner from './components/Spinner';

function App() {


  const [ images, setImages] =useState([])
  const [loading, setLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=18`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term])

  return (
    <div className="container mx-auto">
      <Search searchText={(text) => setTerm(text)} />

    {!loading && images.length === 0 && <h1 className='text text-5xl text-center mx-auto mt-32'>No images found :( </h1> }

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 gap-4 lg:ml-36  md:ml-1">
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
