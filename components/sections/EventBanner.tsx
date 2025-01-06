export default function EventBanner() {
  return (
    <section className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 blur-xl" />
      <div className="relative aspect-[3/1] rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
          alt="Dubai Skyline"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium">FEBRUARY 15-16</span>
            </div>
            <h2 className="text-4xl font-bold mb-2">ucc CLOSED INVESTOR</h2>
            <h3 className="text-3xl font-bold">SUMMIT IN <span className="text-orange-500">DUBAI!</span></h3>
          </div>
        </div>
      </div>
    </section>
  );
}