import Marquee from "react-fast-marquee";

const BestProduct = () => {
    return (
        <div>
            <h1 className="text-center py-5 text-rose-300 text-3xl font-bold"> Your best sell product </h1>
            <div className="carousel carousel-center rounded-box h-64">
  <div className="carousel-item">
    <img src="https://i.ibb.co/jZwtycc/cosmetics-turquoise-bg.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.ibb.co/s2X20d0/cosmetics.jpg" alt="Pizza" height="200px"  />
  </div> 
  <div className="carousel-item">
    <img src="https://i.ibb.co/f49ppHP/c-cosmetics-lg.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.ibb.co/0FL2fxR/images-1.jpg" alt="Pizza" />
  </div>  
</div>

        <div>
          <h1 className="text-2xl py-7 font-bold">Some of your product work </h1>
          <div className=" lg:flex gap-5 bg-green-100">
            <Marquee>
            <div><img className="w-72 h-52" src="https://i.ibb.co/1n2FcLW/istockphoto-1331637318-612x612.jpg" alt="" /></div>
            <div><img className="w-72 h-52" src="https://i.ibb.co/qFz4j1V/1491480245-slide2-1491416592-2.jpg" alt="" /></div>
            <div><img className="w-72 h-52" src="https://i.ibb.co/JCMG6r3/360-F-637746039-DZohy-Wx-EXZu7-Yox7-Dy-Uj-Krdd1yi-O03h-B.jpg" alt="" /></div>
            <div><img className="w-72 h-52" src="https://i.ibb.co/C2NsTgX/images-2.jpg" alt="" /></div>
            <div><img className="w-72 h-52" src="https://i.ibb.co/MBggdT1/ca8ecfc2-f101-4377-a2b3-6090731c9be8.jpg" alt="" /></div>
            <div><img className="w-72 h-52" src="https://i.ibb.co/LSqHx33/HD-wallpaper-blue-make-up-cosmetics-model-eyeshadow-lips-gorgeous-face-brunettes-femininity-makeup-g.jpg" alt="" /></div>
            </Marquee>
          </div>

        </div>
        </div>
    );
};

export default BestProduct;