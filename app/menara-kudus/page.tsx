import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MenaraKudusPage() {
  return (
    <main className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen">

      <Navbar />

      {/* HERO */}
      <header className="relative w-full h-[600px] overflow-hidden">
        <img
          src="./images/menara.png"
          alt="Menara Kudus"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f4] via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-16">
          <div className="max-w-4xl">
            {/* <span className="inline-block px-3 py-1 bg-[#b52619] text-white text-sm rounded mb-4">
              Historical Landmark
            </span> */}

            <h1
              className="text-5xl md:text-7xl font-bold mb-4 text-gray/80"
              style={{ fontFamily: "Playfair Display" }}
            >
              Menara Kudus:
              <br />
              Harmoni Akulturasi Hindu-Islam
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl">
              Sebuah monumen intelektual yang menjembatani estetika
              Majapahit dengan teologi Islam Nusantara.
            </p>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="grid md:grid-cols-12 gap-10">

          {/* LEFT */}
          <div className="md:col-span-8 space-y-16">

            {/* LATAR BELAKANG */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <h2
                  className="text-4xl font-bold"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Latar Belakang Sejarah
                </h2>

                <div className="h-px flex-1 bg-black/10" />
              </div>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Menara Kudus didirikan oleh Sunan Kudus (Ja&apos;far Shadiq)
                  pada tahun 1549 M (956 H), sebagaimana tercantum pada
                  prasasti batu di dalam masjid.
                </p>
                {/* LEFT */}
                <div className="md:col-span-8 space-y-20">

                  {/* SEJARAH */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <h2
                        className="text-4xl font-bold"
                        style={{ fontFamily: "Playfair Display" }}
                      >
                        Sejarah
                      </h2>
                      <div className="h-px flex-1 bg-black/10" />
                    </div>

                    <div className="space-y-5 text-gray-600 leading-relaxed text-justify">
                      <p>
                        Masjid Menara Kudus atau Masjid Al-Aqsa didirikan oleh Sunan Kudus
                        (Ja'far Shadiq) pada tahun 1549 M di Kabupaten Kudus, Jawa Tengah.
                        Sebagai salah satu anggota Wali Songo, Sunan Kudus menjadikan
                        masjid ini sebagai pusat dakwah, pendidikan agama, dan aktivitas
                        sosial masyarakat pada masa perkembangan Islam di Jawa.
                      </p>

                      <p>
                        Pendirian masjid berlangsung ketika masyarakat masih kuat
                        dipengaruhi budaya Hindu-Buddha sehingga proses islamisasi
                        dilakukan dengan pendekatan yang adaptif dan bijaksana.
                      </p>

                      <p>
                        Keunikan utama masjid ini terletak pada menaranya yang menyerupai
                        candi Hindu-Jawa. Bentuk tersebut merupakan bagian dari strategi
                        dakwah Sunan Kudus yang memanfaatkan unsur budaya lokal agar Islam
                        lebih mudah diterima masyarakat.
                      </p>

                      <p>
                        Hingga saat ini, Masjid Menara Kudus tetap menjadi salah satu situs
                        sejarah Islam terpenting di Indonesia sekaligus tujuan wisata
                        religi yang ramai dikunjungi.
                      </p>
                    </div>
                  </section>

                  {/* FOTO */}
                  <section>
                    <div className="bg-white border border-black/10 p-6">
                      <img
                        src="./images/kudus.png"
                        alt="Menara Kudus"
                        className="w-full aspect-[16/10] object-cover"
                      />

                      <p className="text-sm italic text-gray-500 mt-4">
                        Menara Kudus menjadi simbol akulturasi budaya Hindu-Jawa dan Islam
                        yang berkembang di Nusantara.
                      </p>
                    </div>
                  </section>

                  {/* NILAI SEJARAH DAN BUDAYA */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <h2
                        className="text-4xl font-bold"
                        style={{ fontFamily: "Playfair Display" }}
                      >
                        Nilai Sejarah dan Budaya
                      </h2>
                      <div className="h-px flex-1 bg-black/10" />
                    </div>

                    <div className="space-y-5 text-gray-600 leading-relaxed text-justify">
                      <p>
                        Masjid Menara Kudus memiliki nilai sejarah yang tinggi karena
                        menjadi bukti perkembangan Islam pada masa Wali Songo dan
                        menunjukkan bagaimana islamisasi berlangsung secara damai.
                      </p>

                      <p>
                        Bangunan ini merepresentasikan pertemuan antara ajaran Islam
                        dengan budaya lokal yang telah berkembang sebelumnya sehingga
                        menjadi salah satu simbol penting sejarah Islam Nusantara.
                      </p>

                      <p>
                        Dari sisi budaya, masjid ini memperlihatkan perpaduan unsur Jawa,
                        Hindu-Buddha, dan Islam yang hidup berdampingan dalam satu
                        kompleks bangunan.
                      </p>

                      <p>
                        Tradisi Buka Luwur yang dilaksanakan setiap tahun untuk mengenang
                        Sunan Kudus menjadi contoh pelestarian budaya yang masih bertahan
                        hingga sekarang.
                      </p>
                    </div>
                  </section>

                  {/* ARSITEKTUR */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <h2
                        className="text-4xl font-bold"
                        style={{ fontFamily: "Playfair Display" }}
                      >
                        Arsitektur dan Akulturasi Budaya
                      </h2>
                      <div className="h-px flex-1 bg-black/10" />
                    </div>

                    <div className="space-y-5 text-gray-600 leading-relaxed text-justify">
                      <p>
                        Masjid Menara Kudus merupakan salah satu contoh terbaik akulturasi
                        budaya dalam arsitektur Indonesia.
                      </p>

                      <p>
                        Menara yang terbuat dari bata merah memiliki bentuk menyerupai
                        candi Majapahit dengan struktur kaki, badan, dan atap yang khas
                        arsitektur Hindu-Jawa.
                      </p>

                      <p>
                        Unsur akulturasi juga terlihat pada gapura paduraksa, candi
                        bentar, serta berbagai ornamen yang menggabungkan motif lokal
                        dengan prinsip estetika Islam.
                      </p>

                      <p>
                        Keberadaan unsur-unsur tersebut menunjukkan bahwa penyebaran
                        Islam di Kudus tidak menghapus budaya lama, melainkan
                        mengadaptasinya ke dalam sistem nilai baru yang sesuai dengan
                        ajaran Islam.
                      </p>
                    </div>
                  </section>

                  {/* DAMPAK */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <h2
                        className="text-4xl font-bold"
                        style={{ fontFamily: "Playfair Display" }}
                      >
                        Dampak Sosial dan Ekonomi
                      </h2>
                      <div className="h-px flex-1 bg-black/10" />
                    </div>

                    <div className="space-y-5 text-gray-600 leading-relaxed text-justify">
                      <p>
                        Sejak awal berdirinya, Masjid Menara Kudus berfungsi sebagai pusat
                        dakwah, pendidikan agama, dan aktivitas sosial masyarakat.
                      </p>

                      <p>
                        Saat ini kawasan Menara Kudus menjadi salah satu destinasi wisata
                        religi terbesar di Indonesia.
                      </p>

                      <p>
                        Kunjungan peziarah mendorong pertumbuhan sektor perdagangan,
                        kuliner, jasa penginapan, dan usaha mikro masyarakat sekitar.
                      </p>

                      <p>
                        Di sisi lain, tingginya aktivitas wisata juga menuntut adanya
                        upaya pelestarian agar nilai sejarah dan budaya kawasan tetap
                        terjaga.
                      </p>
                    </div>
                  </section>

                  {/* ANALISIS */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <h2
                        className="text-4xl font-bold"
                        style={{ fontFamily: "Playfair Display" }}
                      >
                        Analisis
                      </h2>
                      <div className="h-px flex-1 bg-black/10" />
                    </div>

                    <div className="space-y-5 text-gray-600 leading-relaxed text-justify">
                      <p>
                        Masjid Menara Kudus menunjukkan bahwa keberhasilan penyebaran
                        Islam di Nusantara sangat dipengaruhi oleh kemampuan para ulama
                        dalam memahami budaya masyarakat.
                      </p>

                      <p>
                        Sunan Kudus menggunakan pendekatan yang menghargai tradisi lokal
                        sehingga Islam dapat diterima tanpa menimbulkan konflik budaya
                        yang besar.
                      </p>

                      <p>
                        Keberadaan menara bercorak Hindu-Jawa, gerbang tradisional, dan
                        berbagai unsur lokal lainnya membuktikan bahwa proses islamisasi
                        di Jawa berlangsung melalui akulturasi budaya.
                      </p>

                      <p>
                        Oleh karena itu, Masjid Menara Kudus tidak hanya menjadi
                        peninggalan sejarah, tetapi juga simbol toleransi, dialog budaya,
                        dan keberagaman yang masih relevan bagi masyarakat Indonesia
                        hingga saat ini.
                      </p>
                    </div>
                  </section>

                </div>
                <p>
                  Lokasinya di Jawa Tengah menandai titik penting dalam
                  penyebaran Islam melalui pendekatan budaya yang inklusif.
                </p>

                <p>
                  Strategi dakwah Sunan Kudus mengadopsi elemen visual
                  Hindu-Jawa untuk meminimalisir resistensi kultural,
                  menciptakan ruang transisi di mana masyarakat dapat mengenal
                  ajaran baru tanpa merasa tercerabut dari akar tradisinya.
                </p>
              </div>
            </section>





          </div>

          {/* SIDEBAR */}
          <aside className="md:col-span-4">

            <div className="sticky top-28 space-y-8">

              <div className="bg-white border border-black/10 rounded-xl p-8">

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
                      Kudus, Jawa Tengah
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Tahun Berdiri
                    </p>

                    <p className="font-medium">
                      1549 M
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Arsitektur
                    </p>

                    <p className="font-medium">
                      Hindu-Jawa & Islam
                    </p>
                  </div>

                </div>
              </div>

              <div className="bg-white border border-black/10 rounded-xl p-8">

                <h3 className="font-semibold mb-4">
                  Topik Terkait
                </h3>

                <ul className="space-y-3 text-[#b52619]">
                  <li>Wali Songo</li>
                  <li>Kerajaan Demak</li>
                  <li>Estetika Majapahit</li>
                </ul>

              </div>

            </div>

          </aside>

        </div>
      </section>

      <Footer />

    </main>
  );
}