import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReflectionPage() {
  return (
    <main className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20">
        {/* Hero */}
        <section className="mb-12 md:mb-20 lg:mb-24 text-center">
          <span className="tracking-[0.25em] text-[#b52619] text-sm font-semibold uppercase block mb-4">
            Concluding Thoughts
          </span>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8"
            style={{ fontFamily: "Playfair Display" }}
          >
            Refleksi
          </h1>

          <div className="w-24 h-1 bg-[#b52619] mx-auto" />
        </section>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-5 order-2 lg:order-1 h-full">
            <div className="relative group">

                {/* frame */}
                <div className="absolute -inset-3 border border-[#b52619]/20 transition-all duration-300 group-hover:border-[#b52619]/40" />

                <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9aNXPRtdnzirRK8m1nJ7PIls27RaM_pLapfVPAwqh5FaOflWaJSkWQ4dNHCnzzWFQrZkfGGMlVzhyPjp9FGzOfiXdB0Ku3cZERS7njmQCpxM_g2hBT1_K61MifqaMZ3wDHQw5UolMipK0c0MHoPzncPR_osYW1ZVtrHSyrK6ksny2Hd0-oPts_vhkX3cPA8VVXMAlKoOAwYbls_pX_DYVmx1Ka9rYacstRDzEotMJFlaYpscWchMkXWVdeZZl4Wv8ys7tJWG5mbc"
                alt="Relief sejarah Nusantara"
                className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:h-full object-cover"
                />

                <div className="mt-6 border-l-2 border-[#b52619] pl-6">
                <p
                    className="text-lg sm:text-xl md:text-2xl italic text-gray-600"
                    style={{ fontFamily: "Playfair Display" }}
                >
                    "Budaya bukan sekadar peninggalan, melainkan jembatan menuju
                    pemahaman diri."
                </p>
                </div>
            </div>
            </div>

          {/* Right */}
<div className="lg:col-span-7 order-1 lg:order-2">
  <div className="bg-white p-5 sm:p-8 md:p-12 border border-black/5 relative overflow-hidden">
    <p className="text-lg text-gray-700 leading-relaxed mb-8">
      <span
        className="float-left text-5xl sm:text-6xl md:text-7xl text-[#b52619] leading-none pr-4 pt-2 font-bold"
        style={{ fontFamily: "Playfair Display" }}
      >
        M
      </span>
      elalui kajian mengenai Makam Sunan Ampel, Masjid Menara Kudus,
      dan Masjid Agung Demak, saya memahami bahwa perkembangan Islam
      di Nusantara berlangsung melalui proses yang damai, bertahap,
      dan penuh penghargaan terhadap budaya lokal. Para penyebar Islam,
      khususnya Wali Songo, tidak menghilangkan tradisi yang telah ada
      di masyarakat, melainkan mengadaptasikannya sehingga ajaran Islam
      dapat diterima dengan baik. Hal tersebut menunjukkan bahwa
      keberhasilan penyebaran Islam di Indonesia tidak hanya didukung
      oleh aspek keagamaan, tetapi juga oleh sikap toleransi,
      kebijaksanaan, dan kemampuan beradaptasi terhadap lingkungan
      sosial dan budaya.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed border-t border-black/10 pt-8 italic">
      Studi ini tidak hanya memberikan data sejarah, tetapi juga
      menyadarkan saya akan pentingnya toleransi dan akulturasi dalam
      membangun identitas bangsa. Menghargai masa lalu adalah cara kita
      memahami masa kini untuk merancang masa depan yang lebih inklusif
      dan beradab.
    </p>

    <div className="absolute bottom-4 right-4 opacity-10">
      <span
        className="material-symbols-outlined text-[80px] sm:text-[100px] md:text-[120px]"
        style={{
          fontVariationSettings:
            "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24",
        }}
      >
        history_edu
      </span>
    </div>
  </div>
</div>
</div>

{/* RELEVANSI ERA MODERN */}
<section className="pt-20">
  <div className="text-center mb-12">
    <span className="tracking-[0.25em] text-[#b52619] text-sm font-semibold uppercase block mb-4">
      Modern Relevance
    </span>

    <h2
      className="text-4xl md:text-5xl font-bold"
      style={{ fontFamily: "Playfair Display" }}
    >
      Relevansi di Era Modern
    </h2>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

    <div className="bg-white p-8 border border-black/10">
      <span className="text-[#b52619] font-bold text-2xl">01</span>

      <h3 className="font-semibold text-xl mt-4 mb-3">
        Pelestarian Cagar Budaya
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Ketiga situs menjadi bukti perjalanan Islam Nusantara dan berperan
        menjaga identitas bangsa di tengah arus globalisasi yang semakin
        kuat.
      </p>
    </div>

    <div className="bg-white p-8 border border-black/10">
      <span className="text-[#b52619] font-bold text-2xl">02</span>

      <h3 className="font-semibold text-xl mt-4 mb-3">
        Sumber Pendidikan
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Situs sejarah memberikan pengalaman belajar yang kontekstual dan
        membantu memahami hubungan antara agama, budaya, dan masyarakat.
      </p>
    </div>

    <div className="bg-white p-8 border border-black/10">
      <span className="text-[#b52619] font-bold text-2xl">03</span>

      <h3 className="font-semibold text-xl mt-4 mb-3">
        Wisata Religi
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Kehadiran peziarah dan wisatawan mendorong perkembangan ekonomi
        masyarakat melalui perdagangan, kuliner, transportasi, dan jasa.
      </p>
    </div>

    <div className="bg-white p-8 border border-black/10">
      <span className="text-[#b52619] font-bold text-2xl">04</span>

      <h3 className="font-semibold text-xl mt-4 mb-3">
        Moderasi Beragama
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Menjadi contoh nyata bagaimana toleransi dan penghormatan terhadap
        keberagaman mampu menciptakan kehidupan yang harmonis.
      </p>
    </div>

    <div className="bg-white p-8 border border-black/10 md:col-span-2 xl:col-span-1">
      <span className="text-[#b52619] font-bold text-2xl">05</span>

      <h3 className="font-semibold text-xl mt-4 mb-3">
        Inspirasi Peradaban
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Mengajarkan bahwa kemajuan peradaban dibangun melalui pendidikan,
        budaya, agama, dan hubungan sosial yang berjalan selaras.
      </p>
    </div>

  </div>
</section>

{/* KESIMPULAN */}
<section className="pt-24">

  <div className="text-center mb-12">
    <span className="tracking-[0.25em] text-[#b52619] text-sm font-semibold uppercase block mb-4">
      Final Conclusion
    </span>

    <h2
      className="text-4xl md:text-5xl font-bold"
      style={{ fontFamily: "Playfair Display" }}
    >
      Kesimpulan
    </h2>
  </div>

  {/* CARD */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

    <div className="bg-white p-6 border border-black/10 text-center">
      <span className="material-symbols-outlined text-[#b52619] text-4xl">
        balance
      </span>

      <h3 className="font-semibold mt-4 mb-2">
        Harmonisasi
      </h3>

      <p className="text-sm text-gray-600">
        Islam berkembang melalui pendekatan budaya yang damai.
      </p>
    </div>

    <div className="bg-white p-6 border border-black/10 text-center">
      <span className="material-symbols-outlined text-[#b52619] text-4xl">
        architecture
      </span>

      <h3 className="font-semibold mt-4 mb-2">
        Akulturasi
      </h3>

      <p className="text-sm text-gray-600">
        Perpaduan budaya lokal dan Islam membentuk identitas khas.
      </p>
    </div>

    <div className="bg-white p-6 border border-black/10 text-center">
      <span className="material-symbols-outlined text-[#b52619] text-4xl">
        school
      </span>

      <h3 className="font-semibold mt-4 mb-2">
        Pendidikan
      </h3>

      <p className="text-sm text-gray-600">
        Dakwah dilakukan melalui pembelajaran dan keteladanan.
      </p>
    </div>

    <div className="bg-white p-6 border border-black/10 text-center">
      <span className="material-symbols-outlined text-[#b52619] text-4xl">
        account_balance
      </span>

      <h3 className="font-semibold mt-4 mb-2">
        Peradaban
      </h3>

      <p className="text-sm text-gray-600">
        Warisan sejarah tetap relevan bagi masa depan bangsa.
      </p>
    </div>

  </div>

  {/* TEKS PANJANG KESIMPULAN */}
  <div className="bg-white border border-black/10 p-8 md:p-12">
    <p className="text-gray-700 leading-relaxed mb-6">
      Makam Sunan Ampel, Masjid Menara Kudus, dan Masjid Agung Demak
      merupakan tiga warisan penting yang mencerminkan perkembangan Islam
      Nusantara sejak masa awal penyebarannya di Pulau Jawa. Ketiga situs
      tersebut menunjukkan bahwa proses islamisasi di Indonesia
      berlangsung melalui jalur pendidikan, perdagangan, dakwah, dan
      interaksi budaya yang dilakukan secara damai serta menghargai
      tradisi masyarakat setempat.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Dari aspek sejarah, ketiganya menjadi bukti nyata peran para ulama
      dan Wali Songo dalam membangun fondasi masyarakat Islam di
      Nusantara. Makam Sunan Ampel menunjukkan pentingnya pendidikan dan
      pembentukan komunitas Muslim, Masjid Menara Kudus menjadi simbol
      keberhasilan akulturasi budaya Islam dengan tradisi Hindu-Buddha dan
      Jawa, sedangkan Masjid Agung Demak mencerminkan peran Islam dalam
      pembentukan peradaban dan kekuasaan politik di Jawa.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Dari aspek budaya dan arsitektur, ketiga situs tersebut
      memperlihatkan adanya proses akulturasi yang harmonis antara ajaran
      Islam dan budaya lokal sehingga menghasilkan bentuk peradaban yang
      khas dan unik.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Pada akhirnya, ketiga situs tersebut menjadi simbol keberhasilan
      perpaduan antara agama, budaya, dan kehidupan sosial masyarakat
      Nusantara. Nilai toleransi, pendidikan, penghormatan terhadap
      keberagaman, serta semangat membangun peradaban yang diwariskan
      para penyebar Islam tetap relevan sebagai pedoman bagi masyarakat
      Indonesia yang multikultural.
    </p>
  </div>
</section>



{/* DAFTAR PUSTAKA */}
<section className="pt-20">

  <div className="text-center mb-12">
    <span className="tracking-[0.25em] text-[#b52619] text-sm font-semibold uppercase block mb-4">
      References
    </span>

    <h2
      className="text-4xl md:text-5xl font-bold"
      style={{ fontFamily: "Playfair Display" }}
    >
      Daftar Pustaka
    </h2>
  </div>

  <div className="bg-white border border-black/10 p-8 md:p-12">

    {/* BUKU */}
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-[#b52619] mb-6">
        Buku
      </h3>

      <ul className="space-y-4 text-gray-700 leading-relaxed">
        <li>
          Abdullah, T., & Djaenuderadjat, E. (2015).
          <i> Sejarah Kebudayaan Islam Indonesia Jilid 1: Akar Historis dan Awal Pembentukan Islam.</i>
        </li>

        <li>
          Hernawan, W. (2012).
          <i> Menelusuri Jejak dan Warisan Wali Songo.</i>
        </li>
      </ul>
    </div>

      {/* JURNAL */}
      <div>
        <h3 className="text-lg font-semibold text-[#b52619] mb-4 border-b border-black/10 pb-2">
          Jurnal
        </h3>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">

          <p>1. Hamiyatun. (2019). <i>Peranan Sunan Ampel dalam Dakwah Islam dan Pembentukan Masyarakat Muslim Nusantara di Ampeldenta.</i></p>

          <p>2. Harahap, R. S., Sudjatnika, T., & Siregar, A. M. (2023). <i>Sunan Ampel dan Dakwahnya dalam Islamisasi Jawa Timur.</i></p>

          <p>3. Fitria, Z., & Sukardi, A. S. <i>Effectiveness of Infaq and Shodaqoh Empowerment in Religious Tourism Areas: A Study on the Menara Kudus Mosque.</i></p>

          <p>4. <i>Akulturasi Budaya Hindu-Islam pada Arsitektur Masjid Menara Kudus.</i></p>

          <p>5. Faizah, A. M. N. (2025). <i>Akulturasi Islam dan Budaya Lokal pada Arsitektur Masjid Menara Kudus.</i></p>

          <p>6. Rosyid, M. (2019). <i>Urgensi Kauman Menara Kudus sebagai Cagar Budaya Islam.</i></p>

          <p>7. Hermanto, H., & Masfufah, U. (2023). <i>Bentuk dan Makna Ornamen Lawang Kembar Masjid Menara Kudus.</i></p>

          <p>8. Azzaki, A. F., dkk. <i>Akulturasi Budaya Masjid Menara Kudus Ditinjau dari Makna dan Simbol.</i></p>

          <p>9. Triyanto. <i>Masjid Menara Kudus: Refleksi Nilai Pendidikan Multikultural pada Kebudayaan Masyarakat Pesisiran.</i></p>

          <p>10. Rahman, A. & Wildayati. (2019). <i>Tipologi Makam dan Ornamen Nisan pada Kompleks Makam Sunan Ampel Surabaya.</i> SULUK.</p>

          <p>11. Kusumo, E. S. (2015). <i>Bentuk Sinkretisme Islam-Jawa di Masjid Sunan Ampel Surabaya.</i> Mozaik Humaniora.</p>

          <p>12. Aldina, N., Antariksa, & Astrini, W. (2017). <i>Ekspresi Sakral Arsitektur pada Bangunan Masjid Sunan Ampel Surabaya.</i></p>

          <p>13. Kusumaningtyas, M. (2023). <i>The Role of Religious Tourism in the Ampel Region in Maintaining the Culture of Pilgrimage of the Wali’s Tomb.</i> MALIA.</p>

          <p>14. Devi, A. A. S. (2024). <i>Tradisi Ziarah Kubur ke Makam Sunan Ampel sebagai Upaya Meningkatkan Ketakwaan kepada Allah SWT.</i></p>

          <p>15. Gustina, F. E., dkk. (2025). <i>Nilai Simbolis dan Budaya pada Arsitektur Masjid Agung Demak.</i></p>

          <p>16. Andeng & Darmiwati, R. (2022). <i>Pendekatan Pengaruh Konsep Arsitektur Islam Masjid Agung Demak pada Perancangan Masjid di Jawa.</i></p>

          <p>17. Rabbani, M. R. & Muthia, R. (2025). <i>Strategi Dakwah dalam Simbolisasi Masjid Agung Demak: Kajian Islam Inklusif dan Akulturasi Budaya.</i></p>

          <p>18. Ramadhan, A. (2025). <i>Masjid Agung Demak Sebagai Artefak Urban Penanda Sejarah Pembentukan Kota Demak.</i></p>

          <p>19. Fauziah, A. R., dkk. (2024). <i>Bentuk dan Ruang Arsitektur Masjid Agung Demak.</i></p>

          <p>20. Aan, A., & Nindita, V. (2025). <i>Pengaruh Arsitektur Hindu pada Masjid Menara Kudus.</i> Arsitektura.</p>

        </div>
      </div>

    </div>
        
      </section>
      </section>

      <Footer />
    </main>
  );
}