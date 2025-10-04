import VideoThumb from "@/public/images/Nikan Tech.png";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div     className="mx-auto max-w-5xl mt-10 mb-10 px-4 sm:px-6 rounded-2xl animate-shadowPulse"
>
  
      
        {/* Hero content */}
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            
            {/* ستون سمت چپ (متن) */}
            <div>
                 <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Nikan Technology
              </h1>
              <p
                className="text-xl leading-relaxed text-indigo-200/65"
                data-aos="fade-up"
                style={{ fontFamily: "Vazir" }}
                data-aos-delay={200}
              >
                Nikan Technology Group is an innovative company in the field of
                technology that, with a focus on artificial intelligence and
                digital solutions, aims to simplify, accelerate, and optimize
                business processes. Leveraging a team of experts in website and
                software development, data analysis, and artificial
                intelligence, the group provides practical and creative
                solutions for businesses, striving to deliver a smart, secure,
                and efficient experience for its clients.
              </p>
            </div>

            {/* ستون سمت راست (لوگو + ویدیو) */}
            <div className="text-center md:text-right">
           
              <div className="mt-6 flex justify-center md:justify-end float-animation">
                <ModalVideo
                  thumb={VideoThumb}
                  data-aos="fade-up"
                  thumbWidth={350}
                  thumbHeight={300}
                  thumbAlt="Modal video thumbnail"
                  video="videos/video.mp4"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
