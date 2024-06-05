"use client";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <section className="mx-4 lg:mx-0 py-10 flex flex-col gap-12 lg:gap-0 lg:flex-row justify-center">
          <div className="lg:w-[48%] lg:p-5 text-slate-800">
            <Slide direction="down">
              <h1 className="my-4 text-xl lg:text-4xl lg:text-primary text-slate-800 font-semibold">
                Sobre nós
              </h1>
              <hr className="bg-primary h-2 w-[86px] rounded-3xl" />
            </Slide>

            <p className="mt-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quisquam, consequatur qui deserunt consequuntur, harum
              nesciunt eos voluptatem dolores, vel reiciendis? Aspernatur totam
              iusto nobis quas unde sapiente, sed mollitia. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Blanditiis quisquam,
              consequatur qui deserunt consequuntur, harum nesciunt eos
              voluptatem dolores, vel reiciendis? Aspernatur totam iusto nobis
              quas unde sapiente, sed mollitia. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Blanditiis quisquam, consequatur qui
              deserunt consequuntur, harum nesciunt eos voluptatem dolores, vel
              reiciendis? Aspernatur totam iusto nobis quas unde sapiente, sed
              mollitia.
            </p>
            <p className="mt-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quisquam, consequatur qui deserunt consequuntur, harum
              nesciunt eos voluptatem dolores, vel reiciendis? Aspernatur totam
              iusto nobis quas unde sapiente, sed mollitia. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Blanditiis quisquam,
              consequatur qui deserunt consequuntur, harum nesciunt eos
              voluptatem dolores, vel reiciendis? Aspernatur totam iusto nobis
              quas unde sapiente, sed mollitia. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Blanditiis quisquam, consequatur qui
              deserunt consequuntur, harum nesciunt eos voluptatem dolores, vel
              reiciendis? Aspernatur totam iusto nobis quas unde sapiente, sed
              mollitia.
            </p>
          </div>
          <div className="lg:w-[48%] flex flex-col gap-2">
            <Image
              src={"/about-image.jpg"}
              alt="Product Image"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
              className="mx-auto"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
