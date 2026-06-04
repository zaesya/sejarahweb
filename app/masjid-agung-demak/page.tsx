import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MasjidAgungDemakPage() {
  return (
    <main className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="relative h-[85vh] overflow-hidden">

        <img
          src="./images/mesjid.png"
          alt="Masjid Agung Demak"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-16 pb-20">

            {/* <span className="bg-[#b52619] text-white px-4 py-2 text-sm tracking-widest uppercase">
              Situs Bersejarah
            </span> */}

            <h1
              className="text-5xl md:text-7xl font-bold text-white mt-6 max-w-5xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Masjid Agung Demak
            </h1>

            <p className="text-white/80 mt-6 max-w-2xl text-lg">
              Masjid Agung Demak menunjukkan akulturasi budaya yang menggunakan atap tajug bertumpang tiga yang merupakan ciri khas arsitektur Jawa. 
            </p>

          </div>
        </div>
      </section>

{/* CONTENT */}
<section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

    {/* LEFT CONTENT */}
    <div className="lg:col-span-8 space-y-14">

      {/* SEJARAH */}
      <section>
        <h2
          className="text-4xl font-bold border-b border-[#b52619]/20 pb-4 mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Sejarah
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Masjid Agung Demak merupakan salah satu masjid tertua di Indonesia
          yang didirikan pada akhir abad ke-15 oleh Raden Patah bersama para
          Wali Songo. Masjid ini menjadi pusat ibadah, pendidikan,
          pemerintahan, dan aktivitas sosial pada masa Kesultanan Demak.
          Letaknya yang berada di pusat kota menunjukkan pentingnya peran
          masjid dalam kehidupan masyarakat dan perkembangan Islam di Jawa.
        </p>

        <div className="bg-[#f0eee9] border-l-4 border-[#b52619] p-8 italic text-gray-600">
          Masjid Agung Demak dikenal sebagai “Masjid Para Wali” karena
          keterkaitannya yang erat dengan dakwah Wali Songo, termasuk kisah
          Saka Tatal yang dikaitkan dengan Sunan Kalijaga sebagai simbol
          kreativitas dan semangat persatuan dalam penyebaran Islam.
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mt-6">
          Selain menjadi pusat kegiatan keagamaan, masjid ini juga memiliki
          peran penting dalam perkembangan politik Islam di Nusantara. Hingga
          saat ini, Masjid Agung Demak tetap menjadi salah satu warisan sejarah
          Islam yang paling berpengaruh di Indonesia.
        </p>
      </section>

      {/* NILAI SEJARAH */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#b52619]">
            Nilai Sejarah dan Budaya
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Nilai sejarah Masjid Agung Demak terletak pada perannya sebagai
            pusat awal perkembangan Islam di Jawa. Masjid ini menjadi simbol
            keberhasilan islamisasi yang berlangsung secara damai dan mampu
            membangun hubungan harmonis antara ajaran Islam dengan budaya
            lokal masyarakat Jawa.
          </p>
        </div>

        <div className="bg-white border border-black/10 p-6">
          <p className="text-gray-600 leading-relaxed">
            Berbagai tradisi seperti Grebeg Besar Demak dan kegiatan
            keagamaan lainnya masih terus dilestarikan hingga kini sebagai
            bagian dari identitas budaya Islam Nusantara sekaligus media
            pelestarian memori sejarah masyarakat.
          </p>
        </div>
      </section>

      {/* ARSITEKTUR */}
      <section>
        <h2
          className="text-4xl font-bold border-b border-[#b52619]/20 pb-4 mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Arsitektur dan Akulturasi Budaya
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          Masjid Agung Demak menunjukkan akulturasi budaya melalui
          penggunaan atap tajug bertumpang tiga yang merupakan ciri khas
          arsitektur Jawa. Bentuk tersebut berbeda dengan masjid Timur
          Tengah yang menggunakan kubah dan menunjukkan bagaimana budaya
          lokal tetap dipertahankan dalam perkembangan arsitektur Islam.
        </p>

        <div className="bg-white border border-black/10 p-8">
          <p className="text-gray-600 leading-relaxed">
            Pengaruh Hindu-Buddha juga tampak pada konsep atap bertingkat
            dan tata ruang bangunan yang menyerupai pendopo Jawa.
            Keberadaan empat Saka Guru, termasuk Saka Tatal yang dikaitkan
            dengan Sunan Kalijaga, menunjukkan bagaimana simbol budaya
            digunakan sebagai media dakwah yang efektif dalam proses
            penyebaran Islam.
          </p>
        </div>
      </section>

      {/* DAMPAK */}
      <section>
        <h2
          className="text-4xl font-bold border-b border-[#b52619]/20 pb-4 mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Dampak Sosial dan Ekonomi
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Sejak masa Kesultanan Demak, masjid ini berfungsi sebagai pusat
          pendidikan, dakwah, dan aktivitas sosial masyarakat. Perannya yang
          luas menjadikan Masjid Agung Demak sebagai salah satu pusat
          pembentukan komunitas Muslim yang berpengaruh dalam perkembangan
          Islam di Jawa.
        </p>

        <p className="text-gray-600 leading-relaxed mt-6">
          Saat ini, Masjid Agung Demak menjadi destinasi wisata religi yang
          menarik ribuan pengunjung setiap tahun. Aktivitas tersebut
          memberikan dampak ekonomi bagi masyarakat sekitar melalui sektor
          perdagangan, jasa, dan pariwisata, sekaligus mendorong pelestarian
          nilai sejarah dan budaya kawasan.
        </p>
      </section>

      {/* ANALISIS */}
      <section>
        <h2
          className="text-4xl font-bold border-b border-[#b52619]/20 pb-4 mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Analisis
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          Masjid Agung Demak menunjukkan bahwa penyebaran Islam di Nusantara
          dilakukan melalui pendekatan yang menghargai budaya lokal. Para
          Wali Songo tidak menghapus tradisi yang telah ada, melainkan
          mengadaptasinya sehingga Islam dapat diterima secara damai oleh
          masyarakat Jawa.
        </p>

        <div className="bg-[#f0eee9] border-l-4 border-[#b52619] p-8 text-gray-600 italic">
          Dari perspektif arsitektur dan sosial, masjid ini menjadi bukti
          keberhasilan akulturasi budaya yang menghasilkan identitas Islam
          Nusantara yang khas. Oleh karena itu, Masjid Agung Demak tidak
          hanya penting sebagai bangunan bersejarah, tetapi juga sebagai
          simbol toleransi, integrasi budaya, dan perkembangan peradaban
          Islam di Indonesia.
        </div>
      </section>
    </div>

    {/* SIDEBAR */}
    <aside className="lg:col-span-4">
      <div className="sticky top-28 space-y-8">

        {/* INFO */}
        <div className="bg-white border border-black/10 p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-[#b52619]">
              info
            </span>

            <h3 className="font-semibold">
              Informasi Situs
            </h3>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm text-gray-500">
                Lokasi
              </p>

              <p className="font-medium">
                Demak, Jawa Tengah
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Pendiri
              </p>

              <p className="font-medium">
                Raden Patah & Wali Songo
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Periode
              </p>

              <p className="font-medium">
                Akhir Abad ke-15
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Status
              </p>

              <p className="font-medium">
                Cagar Budaya & Wisata Religi
              </p>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#b52619]/20">

          <div className="relative">
            <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#b52619]" />

            <h5 className="font-bold text-[#b52619]">
              1479 M
            </h5>

            <p className="text-sm">
              Pembangunan awal Masjid Agung Demak.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#b52619]" />

            <h5 className="font-bold text-[#b52619]">
              Abad ke-15
            </h5>

            <p className="text-sm">
              Menjadi pusat dakwah dan pemerintahan Kesultanan Demak.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#b52619]" />

            <h5 className="font-bold text-[#b52619]">
              Saat Ini
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
      

    </main>
  );
}