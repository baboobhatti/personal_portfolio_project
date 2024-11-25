import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="home_div">

      <div className="text nest_div">
      <div className="text_div">
       <h2>Hi, Dear</h2>
       <h2 className="content">My self Allah Warayo</h2>
       <h2 className="content">I am a <strong className="stoColo">Next.Js Developer</strong></h2>
      </div>
      </div>
      <div className="profile nest_div">
       <Image className="photo" src='/images/faceBimage-removebg.png' alt='photo' width={500} height={500}/>
      </div>
          
    </div>
    </>
  );
}
