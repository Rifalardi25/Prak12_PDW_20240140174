import pict1 from './pict1.jpg';
import pict2 from './pict2.jpg';
import pict3 from './pict3.jpg';
import pict4 from './pict4.jpg';

export default function Gallery() {
  const memories = [
    {
      id: 1,
      title: "Kereta Malam Terakhir",
      lyric: '"Tunggulah aku di kota itu, tempat labuhan semua mimpiku..."',
      description: "Jepretan suasana rel kereta dan peron stasiun yang sepi di bawah temaram lampu kuning malam hari.",
      image: pict1 
    },
    {
      id: 2,
      title: "Bulan Terang di Sudut Kota",
      lyric: '"Dan... bila esok datang kembali, seperti sedia kala..."',
      description: "Fokus pada jernihnya cahaya bulan yang mengintip di antara siluet bangunan kota.",
      image: pict2 
    },
    {
      id: 3,
      title: "Perjalanan",
      lyric: '"Kemana... aku...  melangkah, kau yang menentukan arah."',
      description: "Lanskap perkotaan yang diambil dari balik jendela kereta yang sedang melaju cepat.",
      image: pict3 
    },
    {
      id: 4,
      title: "Sudut Stasiun",
      lyric: '"Bila ku lelah, tetaplah di sini, jangan tingalkan aku sendiri...."',
      description: "Persimpangan rel kereta api kota dengan latar belakang langit malam yang bersih.",
      image: pict4 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-2xl font-black tracking-tighter text-amber-900 mb-4 inline-block border-b-4 border-lime-500 pb-2 uppercase">
          Bingkai Kenangan
        </h3>
        <p className="text-stone-700 font-bold text-sm max-w-xl mx-auto uppercase tracking-widest">
          Lanskap malam, stasiun, dan bait-bait lirik yang menolak lupa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {memories.map((item) => (
          <div 
            key={item.id} 
            className="bg-[#f4f1e1] p-4 border-4 border-amber-900 shadow-[8px_8px_0px_0px_rgba(132,204,22,1)] hover:shadow-[12px_12px_0px_0px_rgba(28,25,23,1)] transition-all duration-300 group rotate-1 hover:rotate-0"
          >
            {/* Area Menampilkan Gambar Asli */}
            <div className="w-full h-72 mb-6 flex flex-col items-center justify-center border-4 border-stone-900 overflow-hidden relative bg-amber-900">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover sepia-[40%] grayscale-[20%] group-hover:sepia-0 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>

            <div className="px-2 pb-2">
              <h4 className="text-xl font-black text-stone-900 mb-2 uppercase tracking-tighter">{item.title}</h4>
              <p className="text-sm font-medium text-stone-700 mb-6 leading-relaxed">{item.description}</p>
              
              <div className="bg-lime-200 border-l-8 border-lime-500 p-4 border-y-2 border-r-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                <p className="text-sm font-black text-stone-900 font-mono tracking-tighter uppercase">
                  {item.lyric}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}