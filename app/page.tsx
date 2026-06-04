import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center py-24 px-6">
        <span className="tracking-[0.25em] text-[#b52619] text-sm font-semibold">
          ARSIP DIGITAL
        </span>

        <h1
          className="text-5xl md:text-7xl mt-6 font-bold"
          style={{ fontFamily: "Playfair Display" }}
        >
          Jejak Peradaban Islam Nusantara
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          Menelusuri jejak peradaban melalui arsitektur ikonik.
          Memahami pentingnya pelestarian dan pengkajian akulturasi
          arsitektur sebagai identitas budaya Indonesia.
        </p>

        <div className="w-24 h-px bg-[#b52619]/30 mx-auto mt-8" />
      </section>

      {/* CARD SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <article className="hover-card bg-white rounded-lg overflow-hidden border border-black/10">
            <div className="museum-matte">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKeW-jiNFYlgBaW35DqQJ9vxI-v9iGoNRemEeHBbb8pgO6t0l_aKzztClYjOahc4NDtq-itvOt31oepFZz31Tpz2FwklatbEGKHeonmEGhcqGrGmbypZUa8QgwIdNSS5kbHmnFZoUbx9aG7VQkUinhmuQFyFVh7GCYyYkaIuLCQemO9o-a5cmUVEJ0px-0xkh9rbjLmci3YbV1ELFXRT2PZ0TB9Hzv-3AQv6ZW6NPVGBUCxErfAfYLHjkabj2dsUKHBomfIUkQwo"
                alt="Menara Kudus"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div className="p-8">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "Playfair Display" }}
              >
                Menara Kudus
              </h2>

              <p className="mt-4 text-gray-600">
                Simbol harmoni abadi antara tradisi Hindu dan Islam.
              </p>
            </div>
          </article>

          {/* CARD 2 */}
          <article className="hover-card bg-white rounded-lg overflow-hidden border border-black/10">
            <div className="museum-matte">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwiH8ZwXKR3NIKKwl1PS9p6j-wuNT-qgLTVR80OQkDnZwOtrPnP64sQ9m1kxxo6hQnn83LSewSqtnwBK3nvqVx5yFd_oVVQIG4BS1PZmdrE5ld1XeMdeBPB-pF8mMWl4S3b0HRxyXm0EQtdMKSgeRmxoa_Uh_cJANfOQpnRpwRJZZ5LWkzHq6ExDRpfa_0cQfwK7jmT6N2z4OrWLysFXTcv4DywRu-pIzgFHkCeLlgWucKxbd48yyLyuWUtqtu2LzgtyIOS1dVbLg"
                alt="Masjid Agung Banten"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div className="p-8">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "Playfair Display" }}
              >
                Masjid Agung Banten
              </h2>

              <p className="mt-4 text-gray-600">
                Perpaduan budaya Jawa, Belanda dan Tiongkok.
              </p>
            </div>
          </article>

          {/* CARD 3 */}
          <article className="hover-card bg-white rounded-lg overflow-hidden border border-black/10">
            <div className="museum-matte">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXRrOXpEHyIBcuZY3LN6s5_i5fLuWjCQzdxzQv0IkdU-9YfEX39_VcbxY0ddXxDGHPvJZjc9lbDwDH-1i1XQjT4gvaDAVCG0CMV-DlcnaP4PLq_09AqiDn-LF8hIsFbTMxxDHhGv-CSlGRqpxynoyMzopnngKmc_cevtJ3xAM2-jppWi6dEJNfvw04_FtLBvyBjNM06t-Sa2FUull2t0BfWaZT975ufJmHCYftW4IsIdXiqJ-XsLWT-MUML7-qljRAY0HLcRqv5Kc"
                alt="Makam Sunan Ampel"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div className="p-8">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "Playfair Display" }}
              >
                Makam Sunan Ampel
              </h2>

              <p className="mt-4 text-gray-600">
                Salah satu pusat sejarah penyebaran Islam di Nusantara.
              </p>
            </div>
          </article>

        </div>

        <p className="mt-8 text-md text-gray-600 leading-relaxed text-justify"> Perkembangan Islam di Nusantara merupakan proses sejarah yang berlangsung selama berabad-abad melalui perdagangan, pendidikan, dakwah, perkawinan, dan interaksi budaya. Proses ini membentuk karakter Islam Nusantara yang khas, yaitu berkembang secara damai, toleran, dan mampu beradaptasi dengan budaya lokal. Jejak perkembangan tersebut dapat dilihat melalui berbagai peninggalan sejarah, seperti Makam Sunan Ampel, Masjid Menara Kudus, dan Masjid Agung Demak yang memiliki nilai sejarah, budaya, dan keagamaan yang tinggi. Ketiga situs tersebut menjadi bukti bahwa penyebaran Islam di Indonesia dilakukan melalui pendekatan yang menghargai budaya lokal. Makam Sunan Ampel mencerminkan peran ulama dalam pendidikan dan dakwah Islam, Masjid Menara Kudus menunjukkan akulturasi Islam dengan budaya Hindu-Buddha dan Jawa, sedangkan Masjid Agung Demak menjadi simbol perkembangan peradaban Islam yang berkaitan dengan pendidikan, pemerintahan, dan kehidupan sosial. Selain sebagai warisan sejarah, ketiganya juga berfungsi sebagai pusat kegiatan keagamaan, sarana pendidikan, objek penelitian, dan destinasi wisata religi yang masih relevan hingga saat ini. </p>

        {/* Latar Belakang SECTION (NEW) */}
        <section className="max-w-5xl mx-auto mt-16 px-2">
           <div className="text-center mb-12">


    <h2
      className="text-4xl md:text-5xl font-bold"
      style={{ fontFamily: "Playfair Display" }}
    >
      Latar Belakang
    </h2>
  </div>

          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            

            Masuknya Islam ke Nusantara merupakan salah satu peristiwa penting yang membawa perubahan besar dalam berbagai aspek kehidupan masyarakat, mulai dari agama, pendidikan, sosial, 
            budaya, ekonomi, hingga politik. Penyebaran Islam berlangsung secara damai 
            melalui peran para ulama, pedagang, dan tokoh penyebar agama yang menggunakan 
            pendekatan budaya sehingga masyarakat dapat menerima ajaran Islam tanpa harus meninggalkan seluruh tradisi yang telah diwariskan sebelumnya. Proses akulturasi tersebut melahirkan karakter Islam Nusantara yang moderat, inklusif, dan menghargai keberagaman budaya.
          
          <br /><br />

            Bukti keberhasilan proses penyebaran Islam dapat ditemukan pada berbagai peninggalan sejarah, di antaranya 
            {" "}<span className="font-medium text-[#b52619]">Menara Kudus</span>,
            {" "}<span className="font-medium text-[#b52619]">Masjid Agung Banten</span>,
            dan
            {" "}<span className="font-medium text-[#b52619]">Makam Sunan Ampel</span>.
            Ketiga situs tersebut tidak hanya menunjukkan perkembangan Islam di Indonesia, tetapi juga memperlihatkan adanya perpaduan antara nilai-nilai Islam dengan budaya lokal yang berlangsung secara harmonis. Oleh karena itu, kajian terhadap ketiga situs ini penting untuk memahami sejarah perkembangan Islam Nusantara,
             nilai-nilai toleransi dan akulturasi budaya, serta relevansinya dalam kehidupan masyarakat Indonesia pada masa kini.
          </p>
        </section>

      </section>

      <Footer />
    </main>
  );
}