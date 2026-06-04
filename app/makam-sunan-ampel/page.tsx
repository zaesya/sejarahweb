import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SunanAmpelPage() {
  return (
    <main className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="relative mb-16 md:mb-24">
  <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">

    <img
      src="/images/makam.png"
      alt="Makam Sunan Ampel"
      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-white">

      <h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
        style={{ fontFamily: "Playfair Display" }}
      >
        Makam Sunan Ampel:
        <br />
        Jejak Dakwah Wali Songo di Surabaya
      </h1>

    </div>

  </div>
</div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-14">

            {/* SEJARAH */}
<section>
  <h2
    className="text-4xl font-bold border-b border-[#b52619]/20 pb-4 mb-6"
    style={{ fontFamily: "Playfair Display" }}
  >
    Sejarah Makam Sunan Ampel
  </h2>

  <p className="text-lg text-gray-600 leading-relaxed mb-6">
    Makam Sunan Ampel terletak di kawasan Ampel, Surabaya, Jawa Timur,
    dan merupakan bagian dari kompleks Masjid Sunan Ampel yang didirikan
    pada abad ke-15. Sunan Ampel atau Raden Rahmat merupakan salah satu
    tokoh utama Wali Songo yang berperan besar dalam penyebaran Islam di
    Jawa. Beliau mendirikan pusat pendidikan Islam di Ampeldenta yang
    kemudian berkembang menjadi salah satu pusat dakwah dan pembelajaran
    Islam paling berpengaruh pada masanya.
  </p>

  <div className="bg-[#f0eee9] border-l-4 border-[#b52619] p-8 italic text-gray-600">
    Setelah wafat pada tahun 1481 M, Sunan Ampel dimakamkan di dekat
    masjid yang menjadi pusat aktivitas keagamaan dan pendidikan.
    Hingga kini, makam tersebut menjadi salah satu tujuan wisata religi
    terpenting di Indonesia sekaligus simbol keberhasilan dakwah Islam
    yang dilakukan melalui pendidikan dan pendekatan sosial yang damai.
  </div>
</section>

            {/* NILAI SEJARAH */}
<section className="grid md:grid-cols-2 gap-8 items-start">
  <div>
    <h3 className="text-2xl font-semibold mb-4 text-[#b52619]">
      Nilai Sejarah dan Budaya
    </h3>

    <p className="text-gray-600 leading-relaxed">
      Makam Sunan Ampel memiliki nilai sejarah yang tinggi karena menjadi
      bukti perkembangan Islam awal di Pulau Jawa. Situs ini menunjukkan
      proses penerimaan Islam oleh masyarakat Jawa tanpa meninggalkan
      seluruh unsur budaya yang telah berkembang sebelumnya.
    </p>
  </div>

  <div className="bg-white border border-black/10 p-4">
    <img
      src="./images/komplek.png"
      alt="Kompleks Makam Sunan Ampel"
      className="w-full h-56 object-cover"
    />

    <p className="text-sm text-gray-500 italic mt-4">
      Kompleks Makam Sunan Ampel sebagai pusat sejarah dan budaya Islam
      di Surabaya.
    </p>
  </div>
</section>

            {/* ARSITEKTUR DAN ANALISIS */}
<section>
  <h2
    className="text-4xl font-bold border-b border-[#b52619]/20 pb-4 mb-6"
    style={{ fontFamily: "Playfair Display" }}
  >
    Arsitektur, Akulturasi, dan Analisis
  </h2>

  <p className="text-gray-600 leading-relaxed mb-6">
    Karakter arsitektur Makam Sunan Ampel tidak dapat dipisahkan dari
    kompleks Masjid Sunan Ampel yang menunjukkan perpaduan budaya Islam,
    Jawa, dan Hindu-Buddha. Akulturasi terlihat pada tata ruang kawasan,
    bentuk bangunan, serta berbagai ornamen yang digunakan. Struktur
    makam terdiri atas jirat, nisan, dan cungkup yang menjadi ciri khas
    makam Islam tradisional di Jawa.
  </p>

  <p className="text-gray-600 leading-relaxed mb-6">
    Sejak masa Sunan Ampel, kawasan Ampel berfungsi sebagai pusat
    pendidikan, dakwah, dan pembentukan komunitas Muslim di Jawa Timur.
    Saat ini kawasan tersebut berkembang menjadi salah satu pusat wisata
    religi terbesar di Indonesia yang mendorong pertumbuhan perdagangan,
    kuliner, transportasi, dan jasa penginapan masyarakat sekitar.
  </p>

  <p className="text-gray-600 leading-relaxed">
    Makam Sunan Ampel merupakan salah satu situs penting dalam memahami
    sejarah islamisasi di Jawa. Keberadaannya menunjukkan bahwa
    penyebaran Islam di Nusantara dilakukan melalui pendidikan,
    pembentukan komunitas, dan pendekatan budaya yang mampu diterima oleh
    berbagai lapisan masyarakat. Oleh karena itu, situs ini dapat
    dipandang sebagai simbol perpaduan antara agama, budaya, dan
    kehidupan sosial masyarakat Indonesia.
  </p>
</section>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">

              {/* INFO */} 
              <div className="bg-white border border-black/10 p-8"> 
              <div className="flex items-center gap-3 mb-6"> 
                <span className="material-symbols-outlined text-[#b52619]"> info </span> 
                <h3 className="font-semibold"> Informasi Situs </h3> </div> 
                <div className="space-y-5"> <div> <p className="text-sm text-gray-500"> Lokasi </p> 
                <p className="font-medium"> Surabaya, Jawa Timur </p> </div> 
                <div> <p className="text-sm text-gray-500"> Tokoh Utama </p> 
                <p className="font-medium"> Sunan Ampel </p> </div> <div> <p className="text-sm text-gray-500"> Status </p> 
                <p className="font-medium"> Wisata Religi & Situs Sejarah Islam </p> </div> </div> </div>

              {/* FOTO */}
              <div className="bg-white border border-black/10 p-6">
                <h3 className="font-semibold mb-4">
                  Dokumentasi Peziarah
                </h3>

                <img
                  src="/images/ziarah.png"
                  alt="Area Makam Sunan Ampel"
                  className="w-full h-64 object-cover"
                />

                <p className="text-sm text-gray-500 italic text-center mt-4">
                  Area pelataran makam pada malam hari.
                </p>
              </div>

              {/* TIMELINE */}
              <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#b52619]/20">

                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#b52619]" />

                  <h5 className="font-bold text-[#b52619]">
    1401 M
  </h5>

  <p className="text-sm">
    Kelahiran Raden Rahmat di Champa.
  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#b52619]" />

                  <h5 className="font-bold text-[#b52619]">
    1443 M
  </h5>

  <p className="text-sm">
    Memulai dakwah dan membangun pusat pendidikan Islam di Ampeldenta.
  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#b52619]" />

                  <h5 className="font-bold text-[#b52619]">
    1481 M
  </h5>

  <p className="text-sm">
    Wafat dan dimakamkan di kompleks Masjid Sunan Ampel.
  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#b52619]" />

                  <h5 className="font-bold text-[#b52619]">
    Sekarang
  </h5>

  <p className="text-sm">
    Menjadi salah satu destinasi wisata religi terbesar di Indonesia.
  </p>
                </div>

              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}