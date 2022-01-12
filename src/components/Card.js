function Card({image}) {

  const tags =image.tags.split(',')


  return (
    <div className="mb-10 align-middle px-auto">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a
          href={`${image.pageURL}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.webformatURL} alt="" className="w-full hover:opacity-80" />
        </a>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by{" "}
            <a
              href={`https://pixabay.com/users/${image.username}-${image.user_id}`}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-purple-400 "
            >
              {image.user}
            </a>
          </div>
          <ul>
            <li>
              <strong>Views:</strong> {image.views.toLocaleString("en")}
            </li>
            <li>
              <strong>Downloads:</strong> {image.downloads.toLocaleString("en")}
            </li>
            <li>
              <strong>Likes:</strong> {image.likes.toLocaleString("en")}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card
