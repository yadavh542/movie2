import Link from 'next/link';

const Movies = ({ movies }) => {
    console.log(movies);
  return (
    <div className='courses'>
      {movies && movies?.Search?.map((movie) => (
        <div key={movie.id} className='card' style={{display:'flex',alignItems:'center',}}>
            <img src={movie.Poster} alt={movie.Title} style={{height:'200px',marginRight:'10px'}}/>
          <h2>{movie.Title}<span> ({movie.Year})</span></h2>
          {/* <small>Level: {movie.level}</small> */}
          {/* <p></p> */}
          {/* <Link href={movie.link} target='_blank' className='btn'>
            Go To Course
          </Link> */}
        </div>
      ))}
    </div>
  );
};
export default Movies;