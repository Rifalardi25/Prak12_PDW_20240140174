import { useState } from 'react';
import Catalog from './Catalog';
import Cart from './Cart';
import Gallery from './Gallery';

function App() {
  const [currentPage, setCurrentPage] = useState('catalog');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isExisting = prevCart.find((item) => item.id === product.id);
      if (isExisting) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const formatRupiah = (num) => "Rp " + num.toLocaleString('id-ID');

  return (
    <div className="min-h-screen bg-[#f4f1e1] text-stone-900 font-sans selection:bg-lime-400 selection:text-black">
      
      {/* NAVBAR: Tema Hijau Terang khas Cover Album */}
      <nav className="p-5 bg-lime-500 border-b-8 border-amber-900 sticky top-0 z-50 flex justify-between items-center lg:px-20 shadow-xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('catalog')}>
          <div className="w-10 h-10 bg-amber-900 border-2 border-[#f4f1e1] flex items-center justify-center font-black text-[#f4f1e1] text-sm tracking-tighter shadow-md rotate-3 hover:rotate-0 transition-transform">
            SO7
          </div>
          <h1 className="text-2xl font-black text-amber-900 tracking-tighter hidden sm:block uppercase drop-shadow-sm">
            SO7 Records
          </h1>
        </div>
        
        <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-black uppercase tracking-widest">
          <button 
            onClick={() => setCurrentPage('catalog')}
            className={`transition-colors ${currentPage === 'catalog' ? 'text-amber-900 underline decoration-4 underline-offset-4' : 'text-lime-900 hover:text-amber-900'}`}
          >
            Katalog
          </button>
          
          <button 
            onClick={() => setCurrentPage('gallery')}
            className={`transition-colors ${currentPage === 'gallery' ? 'text-amber-900 underline decoration-4 underline-offset-4' : 'text-lime-900 hover:text-amber-900'}`}
          >
            Galeri
          </button>

          <button 
            onClick={() => setCurrentPage('cart')}
            className={`relative transition-colors ${currentPage === 'cart' ? 'text-amber-900 underline decoration-4 underline-offset-4' : 'text-lime-900 hover:text-amber-900'}`}
          >
            Keranjang
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-5 bg-stone-900 text-lime-400 font-black text-[10px] px-2 py-0.5 shadow-sm border border-lime-400 rotate-12">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* HERO SECTION: Menggunakan Kombinasi Warna Hijau, Kayu, dan Kertas */}
      {currentPage === 'catalog' && (
        <header className="relative py-20 px-5 text-center bg-stone-900 border-b-[12px] border-lime-500 overflow-hidden flex flex-col items-center">
          {/* Aksen Garis Hijau di Belakang */}
          <div className="absolute left-10 top-0 bottom-0 w-16 bg-lime-500 opacity-20 hidden md:block"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto bg-[#f4f1e1] p-8 border-4 border-amber-900 shadow-[8px_8px_0px_0px_rgba(120,53,15,1)] rotate-[-1deg]">
            <span className="text-xs font-black tracking-widest uppercase text-lime-100 bg-amber-900 px-4 py-1.5 border-2 border-amber-900 inline-block mb-4">
              Est. 1999
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-stone-900 uppercase">
              Welcome to Our Web Store
            </h2>
            <p className="text-amber-900 font-bold text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Koleksi rilisan fisik era 90-an dan 2000-an. Mari kembali ke masa di mana lirik diketik dengan mesin tik dan musik diputar lewat pita kaset.
            </p>
          </div>
        </header>
      )}

      {/* HALAMAN DINAMIS */}
      <main className="py-16 px-5 lg:px-20 max-w-7xl mx-auto min-h-[60vh]">
        {currentPage === 'catalog' && (
          <Catalog addToCart={addToCart} formatRupiah={formatRupiah} />
        )}
        
        {currentPage === 'gallery' && (
          <Gallery />
        )}

        {currentPage === 'cart' && (
          <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} totalPrice={totalPrice} formatRupiah={formatRupiah} setCurrentPage={setCurrentPage} />
        )}
      </main>
      
      {/* FOOTER SEDERHANA */}
      <footer className="border-t-4 border-amber-900 bg-lime-500 py-8 text-center text-amber-950 font-bold text-xs uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} SO7 Records</p>
      </footer>
    </div>
  );
}

export default App;