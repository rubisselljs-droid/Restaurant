export default function CardFilosofia({onClick, texto, type}) {
  return (
     <button onClick={onClick} type={type} >{texto}</button>
  );
}