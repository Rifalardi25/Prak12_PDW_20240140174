export default function Cart({ cart, updateQuantity, removeFromCart, totalPrice, formatRupiah, setCurrentPage }) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-black tracking-tighter text-amber-900 mb-10 border-b-4 border-lime-500 pb-2 inline-block uppercase">
        Keranjang Belanja
      </h3>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-[#f4f1e1] border-4 border-dashed border-amber-900/40">
          <p className="text-amber-900 mb-6 font-bold text-lg uppercase tracking-wider">Kotak kasetmu masih kosong.</p>
          <button 
            onClick={() => setCurrentPage('catalog')}
            className="bg-stone-900 hover:bg-lime-500 hover:text-stone-900 text-lime-400 text-xs font-black uppercase tracking-widest py-3 px-8 border-2 border-stone-900 transition-colors shadow-[4px_4px_0px_0px_rgba(132,204,22,1)]"
          >
            Lihat Katalog
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-[#f4f1e1] border-4 border-amber-900 divide-y-4 divide-amber-900/20 shadow-[8px_8px_0px_0px_rgba(132,204,22,1)]">
            {cart.map((item) => (
              <div key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-black text-lime-900 tracking-widest uppercase bg-lime-400 px-2 py-1 border-2 border-lime-600 inline-block mb-2">
                    {item.edition}
                  </span>
                  <h4 className="text-xl font-black text-stone-900 uppercase tracking-tighter">{item.title}</h4>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-8">
                  <div className="flex items-center bg-stone-900 border-2 border-stone-900">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-4 py-2 text-lime-400 hover:bg-lime-500 hover:text-stone-900 font-black transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-black text-stone-900 bg-[#f4f1e1]">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-4 py-2 text-lime-400 hover:bg-lime-500 hover:text-stone-900 font-black transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right min-w-[120px]">
                    <p className="font-black text-stone-900 text-lg">{formatRupiah(item.price * item.quantity)}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-black text-red-600 hover:text-red-800 uppercase tracking-widest mt-2 underline decoration-2 underline-offset-2"
                    >
                      Batal Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-lime-500 border-4 border-stone-900 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(120,53,15,1)]">
            <div>
              <p className="text-stone-900 text-sm font-black uppercase tracking-widest mb-1">Total Pembayaran ({totalItems} Kaset):</p>
              <p className="text-4xl font-black text-stone-900 tracking-tighter">{formatRupiah(totalPrice)}</p>
            </div>
            <button 
              onClick={() => alert('Terima kasih! Kaset segera dibungkus dan dikirim.')}
              className="bg-stone-900 hover:bg-amber-900 text-lime-400 font-black text-sm uppercase tracking-widest py-4 px-10 border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(244,241,225,1)] active:translate-y-1 active:shadow-none transition-all"
            >
              Checkout Kaset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}