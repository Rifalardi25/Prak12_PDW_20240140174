// 1. Import gambarnya satu per satu dari folder yang sama
import selftImg from './selft.jpg';
import kisahklasikImg from './kisahklasik.jpg';
import des07Img from './07des.jpg';
import pejantanImg from './pejantan.jpg';

const cassetteAlbums = [
  {
    id: 1,
    title: "Sheila on 7 (Self-Titled)",
    edition: "Kaset Pita Original 1999",
    year: "1999",
    price: 150000,
    description: "Album debut fenomenal yang mengawali sejarah panjang SO7. Menghadirkan kepolosan dan keajaiban pop-rock era 90-an.",
    image: selftImg 
  },
  {
    id: 2,
    title: "Kisah Klasik Untuk Masa Depan",
    edition: "Kaset Pita Edisi Kolektor",
    year: "2000",
    price: 115000,
    description: "Mahakarya dengan penjualan jutaan kopi. Setiap lagunya adalah soundtrack wajib masa muda generasi 2000-an.",
    image: kisahklasikImg
  },
  {
    id: 3,
    title: "07 Des",
    edition: "Kaset Pita Original",
    year: "2002",
    price: 145000,
    description: "Album dengan aransemen yang lebih matang, lirik puitis khas Eross, dan vokal Duta yang semakin memikat.",
    image: des07Img
  },
  {
    id: 4,
    title: "Pejantan Tangguh",
    edition: "Kaset Pita Original 2004",
    year: "2004",
    price: 125000,
    description: "Eksplorasi musik yang lebih berani dan enerjik, membuktikan SO7 terus berevolusi tanpa kehilangan jati diri.",
    image: pejantanImg
  }
];

export default function Catalog({ addToCart, formatRupiah }) {
  return (
    <div>
      <h3 className="text-2xl font-black tracking-tighter text-amber-900 mb-10 border-b-4 border-lime-500 pb-2 inline-block uppercase">
        Koleksi Kaset Pita
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cassetteAlbums.map((album) => (
          <div 
            key={album.id} 
            className="bg-[#f4f1e1] border-4 border-amber-900 p-6 shadow-[6px_6px_0px_0px_rgba(132,204,22,1)] hover:shadow-[10px_10px_0px_0px_rgba(132,204,22,1)] transition-all duration-300 flex flex-col sm:flex-row gap-6 group"
          >
            {/* Visual Cover Album */}
            <div className="w-full sm:w-40 h-40 bg-stone-900 border-4 border-stone-900 relative overflow-hidden shrink-0 select-none shadow-inner">
              <img 
                src={album.image} 
                alt={album.title} 
                className="w-full h-full object-cover sepia-[30%] contrast-125 group-hover:sepia-0 group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Informasi Detail Kaset */}
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start gap-2 mb-1">
                <h4 className="text-xl font-black text-stone-900 group-hover:text-lime-700 transition-colors leading-tight uppercase">
                  {album.title}
                </h4>
                <span className="text-xs font-black bg-stone-900 text-lime-400 px-2 py-0.5 border border-stone-900 shrink-0">
                  {album.year}
                </span>
              </div>
              <p className="text-xs font-bold text-amber-800 mb-4 uppercase tracking-widest">{album.edition}</p>
              <p className="text-sm text-stone-700 leading-relaxed font-medium mb-6">{album.description}</p>
              
              {/* Tombol Beli */}
              <div className="mt-auto pt-4 border-t-2 border-amber-900/20 flex items-center justify-between">
                <span className="text-lg font-black text-stone-900">{formatRupiah(album.price)}</span>
                <button 
                  onClick={() => addToCart(album)}
                  className="bg-lime-500 hover:bg-lime-600 text-stone-900 border-2 border-stone-900 text-xs font-black uppercase tracking-widest py-2.5 px-4 shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] active:translate-y-1 active:shadow-none transition-all"
                >
                  Beli Kaset
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}