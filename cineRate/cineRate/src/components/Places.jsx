
export const Places = ({ place, onClick }) => {

  return (
      <button className="p-1 rounded-sm bg-gray-400 relative cursor-pointer" key={place.id} onClick={() => onClick(place)}>
      <img src={`http://localhost:3000/${place.image.src}`} alt={place.image.alt}className="w-full h-40 object-cover"/>
      <span className="absolute p-[3px] right-2 bottom-2 border-yellow-400 text-md border-2 bg-gray-800 rounded-lg">{place.title}</span>
       </button>
);
}
