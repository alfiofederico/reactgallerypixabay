import spinner from '../spinner.gif'

function Spinner() {
  return (
    <div className="w-100 mt-20 ">
      <img
        width={180}
        className="text-center align-middle mx-auto my-auto"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner
