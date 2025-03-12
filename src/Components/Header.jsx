import jujutsuLogo from '../assets/jujutsu_kaisen_logo.png';

export default function Header() {
  return (
    <>
      <figure className="logo">
        <img src={jujutsuLogo} alt="jujutsuLogo" />
        <figcaption className='rules'><h2>Click on cards, but only once! (version 1.0)</h2></figcaption>
      </figure>
      
        
       
      
    </>
  )
}
